import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
  title: {
    default: "Growers Ground — Find Garden Space & Local Gardeners Near You",
    template: "%s | Growers Ground",
  },
  description: siteConfig.description,
  verification: {
    google: "Ge2Bp1irNhRHzfAAJUs-Ctkxfkk0VP2H2sq1OEhwm6I",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Growers Ground — Where Growers Meet Ground",
    description: siteConfig.ogDescription,
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growers Ground — Where Growers Meet Ground",
    description: siteConfig.ogDescription,
    images: ["/images/hero.jpg"],
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
