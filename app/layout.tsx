import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/content/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fg = localFont({
  src: [
    { path: "../public/fonts/familjen-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "../public/fonts/familjen-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "../public/fonts/familjen-grotesk-latin-600-normal.woff2", weight: "600" },
    { path: "../public/fonts/familjen-grotesk-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-fg",
  display: "swap",
});

const title = `${site.name}: Websites for ${site.location} businesses`;
const description =
  "Fast, professional websites for local Sydney businesses, built, launched and looked after end to end.";

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${site.name}` },
  description,
  openGraph: { title, description, type: "website", locale: "en_AU" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description,
  email: site.email,
  areaServed: { "@type": "City", name: "Sydney" },
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  serviceType: "Web design and development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={fg.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
