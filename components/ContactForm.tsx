"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-white placeholder:text-ink-soft focus:border-amber focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // No form service configured yet — open the visitor's email app instead.
    if (!site.formAccessKey) {
      const body = `Business: ${data.business || "-"}\nName: ${data.name || "-"}\nPhone: ${data.phone || "-"}\n\n${data.message || ""}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Website enquiry: ${data.business || data.name || "new"}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject: `Website enquiry: ${data.business || data.name || "new"}`,
          ...data,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white/5 p-8">
        <p className="text-xl font-semibold text-white">Thanks. That has come through.</p>
        <p className="mt-2 text-ink-soft">
          Expect a reply within one business day. If it's urgent, call {site.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-soft">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="business" className="mb-2 block text-sm font-medium text-ink-soft">
            Business name
          </label>
          <input id="business" name="business" required autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-soft">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink-soft">
            Phone <span className="text-white/55">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-soft">
          What does your business do, and what do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A few lines is plenty. Mention if you already have a logo, photos or a domain."
          className={field}
        />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-amber disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-ink-soft">Or call {site.phoneDisplay}</p>
      </div>
      {status === "error" && (
        <p className="text-sm text-white">
          That didn't send. Email {site.email} directly and it'll be picked up from there.
        </p>
      )}
    </form>
  );
}
