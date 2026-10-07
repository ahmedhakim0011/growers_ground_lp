import type { Metadata } from "next";
import { AppScreenshotsSection } from "@/components/AppScreenshotsSection";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CityPickerSection } from "@/components/CityPickerSection";
import { CommunityDirectorySection } from "@/components/CommunityDirectorySection";
import { MapTeaserSection } from "@/components/MapTeaserSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { QuoteCarouselSection } from "@/components/QuoteCarouselSection";
import { RatingsSection } from "@/components/RatingsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Growers Ground — Find Garden Space & Local Gardeners Near You",
    description: siteConfig.ogDescription,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <HeroSection />
        <QuoteCarouselSection />
        <AppScreenshotsSection />
        <CapabilitiesSection />
        <CityPickerSection />
        <MapTeaserSection />
        <CommunityDirectorySection />
        <TestimonialsSection />
        <RatingsSection />
        <WaitlistSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
