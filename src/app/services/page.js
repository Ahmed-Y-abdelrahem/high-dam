import ServicesHero from "@/features/services/components/ServicesHero";
import ServicesGrid from "@/features/services/components/ServicesGrid";
import ServiceProcess from "@/features/services/components/ServiceProcess";
import ServiceBenefits from "@/features/services/components/ServiceBenefits";
import ServicesCTA from "@/features/services/components/ServicesCTA";

export const metadata = {
  title: "Our Services",
  description:
    "Explore High Dam Group's comprehensive services: Civil Works, Mechanical Installations, Electrical & MEP, Dewatering, Shoring, Manpower Supply, Equipment Rental, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServiceBenefits />
      <ServicesCTA />
    </>
  );
}