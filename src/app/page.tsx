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
import { Guarantee } from "@/components/sections/guarantee";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <UrgencyBanner />
      <main className="flex-1">
        <div className="bg-background"><Hero /></div>
        <div className="bg-orange-50/30"><PainSolution /></div>
        <div className="bg-background"><Evidence /></div>
        <div className="bg-transparent"><Demo /></div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-100"><Benefits /></div>
        <div className="bg-background"><Testimonials /></div>
        <div className="bg-orange-50/30"><Pricing /></div>
        <div className="bg-transparent"><Guarantee /></div>
        <div className="bg-background"><FinalCta /></div>
      </main>
      <Footer />
    </div>
  );
}
