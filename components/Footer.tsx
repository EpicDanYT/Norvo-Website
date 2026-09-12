import Link from "next/link";
import { site, nav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="display text-2xl">voltion<span className="text-amber">.</span></span>
          <p className="mt-2 text-sm text-ink-soft">Web design in {site.location}, NSW.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">{l.label}</Link>
          ))}
        </nav>
        <p className="text-sm text-ink-soft">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
