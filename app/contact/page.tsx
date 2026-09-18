import type { Metadata } from "next";
import { site } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <main id="main">
      <section className="wrap py-12 sm:py-16">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">Tell Voltion about the business.</h1>
        <p className="lede mt-6 max-w-xl">
          Send through what's needed and Voltion will be in touch shortly with a price and a timeline.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-2">
            <p>
              <a href={`tel:${site.phoneE164}`} className="font-semibold text-white underline-offset-4 hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="text-ink-soft underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
