import { AppScreenshotsSection } from "@/components/AppScreenshotsSection";
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

export default function HomePage() {
  return (
    <>
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
