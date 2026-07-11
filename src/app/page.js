import {
  HeroSection,
  CorporateOverviewSection,
  IntegratedGroupModel,  // ← من هنا
  ServicesSection,
  IndustriesSection,
  ProjectsSection,
  StatsSection,
  WhyChooseUsSection,
  HSESection,
  ClientsCertifications,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CorporateOverviewSection />
      <IntegratedGroupModel />  {/* ← استخدامه */}
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <StatsSection />
      <WhyChooseUsSection />
      <HSESection />
      <ClientsCertifications />
    </>
  );
}