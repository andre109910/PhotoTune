import { Hero } from "@/components/sections/hero";
import { PainSolution } from "@/components/sections/pain-solution";
import { Demo } from "@/components/sections/demo";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { UrgencyBanner } from "@/components/sections/urgency-banner";
import { Evidence } from "@/components/sections/evidence";

const SectionDivider = () => <div className="section-divider" />;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <UrgencyBanner />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <PainSolution />
        <SectionDivider />
        <Evidence />
        <SectionDivider />
        <Demo />
        <SectionDivider />
        <Benefits />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
