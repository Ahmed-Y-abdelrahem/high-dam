import AboutHero from "@/features/about/components/AboutHero";
import CompanyStory from "@/features/about/components/CompanyStory";
import MissionVision from "@/features/about/components/MissionVision";
import CoreValues from "@/features/about/components/CoreValues";
import WhyHighDamSection from "@/features/about/components/WhyHighDamSection"; // تم تغيير الاسم
import CTASection from "@/components/shared/CTASection";
import CEOMessage from "@/features/about/components/CeoMessage";

export const metadata = {
  title: "About Us",
  description: "High Dam Group is a leading Tier-1 general contracting and integrated project execution group in Saudi Arabia, aligned with Vision 2030.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CEOMessage />
      <CoreValues />
      <WhyHighDamSection />
      <CTASection />
    </>
  );
}