import Image from "next/image";
import Link from "next/link";
import { site, promises, work, advantages } from "@/content/site";
import Reveal from "@/components/Reveal";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="wrap pb-14 pt-10 sm:pb-20 sm:pt-16">
        <h1 className="display max-w-4xl text-[12vw] sm:text-6xl lg:text-[5rem]">{site.headline}</h1>
        <p className="lede mt-8 max-w-2xl">{site.subhead}</p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/contact/" className="btn-amber">Get a free quote</Link>
          <Link href="/services/" className="btn-ghost">See how it works</Link>
        </div>
        <p className="mt-7 text-sm text-ink-soft">
          Based in {site.location}.
        </p>
      </section>

      <ProjectShowcase />

      {/* Why bother with a website at all */}
      <section className="wrap pb-14 sm:pb-20">
        <h2 className="display max-w-2xl text-3xl sm:text-4xl">Why it's worth having one</h2>
        <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <li>
                <h3 className="text-xl font-semibold text-white">{a.title}</h3>
                <p className="mt-2 body-text">{a.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Recent work — browser-mockup showcase */}
      <section className="wrap pb-14 sm:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display max-w-xl text-3xl sm:text-4xl">Recent work</h2>
            <p className="mt-2 text-sm text-ink-soft">Self-built demos, not paid client work — see what a finished site actually looks like.</p>
          </div>
          <Link href="/projects/" className="text-sm font-semibold text-amber hover:underline">
            See all projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.name} delay={i * 80}>
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-line bg-white/[0.02] transition-colors hover:border-amber/50"
              >
                <div className="flex items-center gap-1.5 border-b border-line bg-white/[0.03] px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 truncate rounded bg-white/5 px-2 py-1 text-[11px] text-ink-soft">
                    {w.href.replace("https://", "")}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <Image
                    src={w.desktop}
                    alt={`${w.name} website homepage`}
                    width={1400}
                    height={924}
                    className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{w.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{w.kind}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Promises — NORVO, condensed */}
      <section className="border-y border-line bg-white/[0.02] py-14 sm:py-20">
        <div className="wrap">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">What you get, every time</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li>
                  <div className="flex items-baseline gap-3">
                    <span className="display text-4xl text-amber transition-transform hover:-translate-y-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                  </div>
                  <p className="mt-3 body-text">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Link href="/services/" className="mt-10 inline-block text-sm font-semibold text-amber hover:underline">
            See the full process →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap py-14 sm:py-20">
        <Reveal className="flex flex-col items-start gap-8 rounded-3xl border border-line bg-white/[0.02] p-10 transition-colors hover:border-amber/50 sm:flex-row sm:items-center sm:justify-between sm:p-14">
          <div>
            <h2 className="display text-3xl sm:text-4xl">Ready to talk about the business?</h2>
            <p className="mt-3 max-w-md text-ink-soft">Fifteen minutes, no charge, no obligation.</p>
          </div>
          <Link href="/contact/" className="btn-amber whitespace-nowrap">Get a free quote</Link>
        </Reveal>
      </section>
    </main>
  );
}
