import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { work } from "@/content/site";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <main id="main">
      <section className="wrap py-12 sm:py-16">
        <p className="eyebrow">Projects</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">Demo builds, live and fully working.</h1>
        <p className="lede mt-6 max-w-xl">
          These are self-built demo sites, not paid client work — built to show exactly what a finished site looks and works like. Real client projects get added here as each one launches.
        </p>
      </section>

      <section className="wrap pb-20 sm:pb-28">
        {work.map((w) => (
          <article key={w.name} className="border-t border-line py-14 first:border-t-0 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <h2 className="display text-4xl sm:text-5xl">
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-amber decoration-2 underline-offset-8 hover:text-amber"
                  >
                    {w.name}
                  </a>
                </h2>
                <p className="mt-2 text-ink-soft">{w.kind}</p>
                <p className="mt-6 max-w-md body-text">{w.body}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <li key={t} className="rounded-full bg-white/5 px-3.5 py-1.5 text-sm font-medium text-amber">
                      {t}
                    </li>
                  ))}
                </ul>
                <a href={w.href} target="_blank" rel="noreferrer" className="btn-amber mt-8 inline-flex">
                  Visit the live site
                </a>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-line bg-white/[0.02]">
                  <Image
                    src={w.desktop}
                    alt={`Desktop view of the ${w.name} website`}
                    width={1400}
                    height={924}
                    className="w-full"
                  />
                </div>
                {w.mobile && (
                  <div className="absolute -bottom-10 -left-8 hidden w-[26%] overflow-hidden rounded-xl border border-line bg-paper shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] sm:block">
                    <Image
                      src={w.mobile}
                      alt={`Mobile view of the ${w.name} website`}
                      width={520}
                      height={988}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className="mt-16 rounded-3xl border border-dashed border-line p-10 sm:p-16">
          <p className="text-lg text-ink-soft">
            More projects land here as they launch. In the meantime, get in touch and Voltion will start on the next one.
          </p>
          <Link href="/contact/" className="btn-amber mt-8 inline-flex">Get a free quote</Link>
        </div>
      </section>
    </main>
  );
}
