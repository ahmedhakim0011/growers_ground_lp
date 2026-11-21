import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PageMotion } from "@/components/motion/PageMotion";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./refresh.css";

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
    default: "Growers Ground: Garden Sharing App to Find or Share Garden Space",
    template: "%s | Growers Ground",
  },
  description: siteConfig.description,
  verification: {
    google: "Ge2Bp1irNhRHzfAAJUs-Ctkxfkk0VP2H2sq1OEhwm6I",
    other: {
      "facebook-domain-verification": "p9efaga1ayuvf6h3ovo4l4a1q5wgd5",
    },
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
      { url: siteConfig.markPath, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/logo-48.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Growers Ground: Garden Sharing App to Find or Share Garden Space",
    description: siteConfig.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Growers Ground: Garden Sharing App to Find or Share Garden Space",
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
