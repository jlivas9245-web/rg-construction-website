import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | General Contractor in Longview & Tyler, TX`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#11151b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.legalName,
    image: `${site.url}/opengraph-image`,
    "@id": site.url,
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "US",
    },
    areaServed: ["Longview TX", "Tyler TX", "Kilgore TX", "Marshall TX", "East Texas"],
    priceRange: "$$",
    description: site.description,
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCallButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
