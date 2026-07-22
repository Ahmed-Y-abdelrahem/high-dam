import { HeroSection, StatsSection, ServicesSection, ProjectsSection, IndustriesSection, WhyChooseUsSection, HSESection, ClientsCertifications, IntegratedGroupModel } from '@/features/home';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IntegratedGroupModel /> 
      <ProjectsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <HSESection />
      <ClientsCertifications />
    </>
  );
}