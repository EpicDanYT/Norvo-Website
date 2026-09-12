import type { Metadata } from "next";
import Link from "next/link";
import { about, site } from "@/content/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <main id="main">
      <section className="wrap py-12 sm:py-16">
        <p className="eyebrow">About</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">{about.heading}</h1>
        <p className="lede mt-6 max-w-2xl">{about.intro}</p>

        <p className="mt-8 max-w-2xl body-text">{about.story.body}</p>
        <p className="mt-2 text-sm text-ink-soft">{about.story.source}</p>

        <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-line bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
          <span className="display shrink-0 text-6xl text-amber sm:text-7xl">{about.stat.figure}</span>
          <div>
            <p className="text-lg leading-relaxed text-white sm:text-xl">{about.stat.body}</p>
            <p className="mt-2 text-sm text-ink-soft">{about.stat.source}</p>
          </div>
        </div>

        <ul className="mt-10 grid gap-10 sm:grid-cols-2">
          {about.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <li>
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 body-text">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-amber">Get a free quote</Link>
          <Link href="/projects/" className="btn-ghost">See the work</Link>
        </div>
      </section>
    </main>
  );
}
