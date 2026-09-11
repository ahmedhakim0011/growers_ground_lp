import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SpotlightSection } from "@/components/SpotlightSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WaitlistSection } from "@/components/WaitlistSection";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <AnnouncementBar />
      <SiteHeader />

      <main id="main">
        <HeroSection />
        <PhotoGallerySection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <SpotlightSection
          id="gardener"
          variant="gardener"
          badge="For Gardeners"
          heading="No plot? No problem. Find ground in your neighborhood."
          description="Community gardens have waitlists. Balconies have limits. Browse a map of nearby hosts, see why each match fits, message before you commit, and start growing — rent or barter."
          primaryCta={{ href: "#waitlist", label: "Join as a Gardener" }}
          secondaryCta={{ href: "#how-it-works", label: "How matching works" }}
          benefits={[
            "Map-ranked hosts",
            "AI match reasons",
            "Safe messaging",
            "Growing journals",
          ]}
          image={{
            src: "/images/pexels-natalia-sevruk-636238602-30371404.jpg",
            alt: "Hands planting tomato seedlings in rich garden soil",
            position: "center center",
          }}
        />
        <SpotlightSection
          id="host"
          variant="host"
          badge="For Hosts"
          badgeClass="clay"
          heading="Unused yard? Turn your ground into opportunity."
          description="List one or multiple garden spots. Set seasonal rent or a share of the harvest. Interview gardeners, agree on terms — no daily supervision required."
          primaryCta={{ href: "#waitlist", label: "List Your Ground" }}
          secondaryCta={{
            href: "#comparison",
            label: "Why not just rent on Craigslist?",
          }}
          benefits={[
            "Passive income",
            "Multiple plots",
            "You choose who gardens",
            "Simple agreements",
          ]}
          image={{
            src: "/images/pexels-helenalopes-27176056.jpg",
            alt: "Gardener planting a seedling in a sunny raised garden bed",
            position: "center center",
          }}
        />
        <UseCasesSection />
        <CommunitySection />
        <ComparisonSection />
        <TestimonialsSection />
        <WaitlistSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
