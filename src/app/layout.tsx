import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PageMotion } from "@/components/motion/PageMotion";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Growers Ground — Find Garden Space & Local Gardeners Near You",
    template: "%s | Growers Ground",
  },
  description: siteConfig.description,
  verification: {
    google: "Ge2Bp1irNhRHzfAAJUs-Ctkxfkk0VP2H2sq1OEhwm6I",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/images/logo-48.png", type: "image/png", sizes: "48x48" },
      { url: siteConfig.logoPath, type: "image/png", sizes: "500x500" },
    ],
    apple: [{ url: siteConfig.logoPath, sizes: "180x180", type: "image/png" }],
    shortcut: "/images/logo-48.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Growers Ground — Find Garden Space & Local Gardeners Near You",
    description: siteConfig.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Growers Ground — Find Garden Space & Local Gardeners Near You",
    description: siteConfig.ogDescription,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="lp-calai" suppressHydrationWarning>
        <PageMotion />
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
