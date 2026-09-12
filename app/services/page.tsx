import type { Metadata } from "next";
import Link from "next/link";
import { promises, steps, site } from "@/content/site";
import FlowChart from "@/components/FlowChart";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <main id="main">
      <section className="wrap py-12 sm:py-16">
        <p className="eyebrow">Services</p>
        <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
          A website built, launched, and looked after.
        </h1>
        <p className="lede mt-6 max-w-2xl">
          One service, done properly: a site designed around the business, built to be found, and kept current after it goes live.
        </p>
      </section>

      <section className="border-y border-line bg-white/[0.02] py-14 sm:py-20">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">What's included</h2>
          <ul className="mt-9 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li className="group rounded-2xl border border-transparent p-1 transition-colors hover:border-line">
                  <div className="flex items-baseline gap-3">
                    <span className="display text-4xl text-amber transition-transform group-hover:-translate-y-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                  </div>
                  <p className="mt-3 body-text">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14 sm:py-20">
        <h2 className="display text-3xl sm:text-4xl">How it works</h2>
        <p className="body-text mt-3 max-w-xl">Five steps, start to finish, each one leading straight into the next.</p>
        <div className="mt-10">
          <Reveal>
            <FlowChart steps={steps} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white/[0.02] py-14 sm:py-20">
        <div className="wrap">
          <h2 className="display text-3xl sm:text-4xl">Questions worth asking upfront</h2>
          <p className="body-text mt-3 max-w-xl">
            The things most people want to know before they get on a call.
          </p>
          <div className="mt-10">
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wrap py-14 sm:py-20">
        <div className="mt-2">
          <Link href="/contact/" className="btn-amber">Get a free quote</Link>
        </div>
      </section>
    </main>
  );
}
