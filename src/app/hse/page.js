import HSEHero from "@/features/hse/components/HSEHero";
import HSEOverview from "@/features/hse/components/HSEOverview";
import SafetyPrinciples from "@/features/hse/components/SafetyPrinciples";
import CertificationsSection from "@/features/hse/components/CertificationsSection";
import TrainingPrograms from "@/features/hse/components/TrainingPrograms";
import HSECTA from "@/features/hse/components/HSECTA";

export const metadata = {
  title: "Health, Safety & Environment (HSE)",
  description:
    "High Dam Group's unwavering commitment to HSE: Zero harm, full compliance, and continuous safety improvement across all operations.",
};

export default function HSEPage() {
  return (
    <>
      <HSEHero />
      <HSEOverview />
      <SafetyPrinciples />
      <CertificationsSection />
      <TrainingPrograms />
      <HSECTA />
    </>
  );
}