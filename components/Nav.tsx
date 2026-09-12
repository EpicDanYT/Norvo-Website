"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, nav } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="display text-2xl" onClick={() => setOpen(false)}>
          voltion<span className="text-amber">.</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${active ? "text-amber" : "text-ink-soft hover:text-white"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <span className="hidden text-sm text-ink-soft lg:inline">{site.phoneDisplay}</span>
          <Link href="/contact/" className="btn-amber !px-5 !py-2.5 text-sm">
            Get a free quote
          </Link>
        </nav>

        <button
          className="rounded p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <div className="wrap flex flex-col py-2">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-medium text-white"
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneE164}`} className="btn-amber my-3 self-start">
              Call {site.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
