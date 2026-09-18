import Image from "next/image";
import Link from "next/link";
import { work } from "@/content/site";

function BrowserFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white/[0.02] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <Image src={src} alt={alt} width={1400} height={924} className="w-full" />
    </div>
  );
}

export default function ProjectShowcase() {
  const [first, second, third] = work;

  return (
    <section className="wrap py-14 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Recent work</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Real sites, not mockups.</h2>
        </div>
        <Link
          href="/projects/"
          className="text-sm font-semibold text-amber underline decoration-2 underline-offset-4"
        >
          See all projects →
        </Link>
      </div>

      <div className="relative mt-12 sm:mt-16">
        <BrowserFrame
          src={first.desktop}
          alt={`Desktop view of the ${first.name} website`}
          className="mx-auto w-full max-w-3xl"
        />
        <BrowserFrame
          src={second.desktop}
          alt={`Desktop view of the ${second.name} website`}
          className="absolute -left-2 bottom-0 hidden w-[46%] translate-y-1/4 sm:block lg:-left-10"
        />
        <BrowserFrame
          src={third.desktop}
          alt={`Desktop view of the ${third.name} website`}
          className="absolute -right-2 bottom-0 hidden w-[46%] translate-y-1/4 sm:block lg:-right-10"
        />
      </div>

      {/* Spacer so the overlapping frames don't collide with the next section */}
      <div className="h-16 sm:h-28" />
    </section>
  );
}
