import { getTranslations } from 'next-intl/server';
import HeroSection from '@/features/home/components/HeroSection';
import ServicesSection from '@/features/home/components/ServicesSection';
import ProjectsSection from '@/features/home/components/ProjectsSection';
import IndustriesSection from '@/features/home/components/IndustriesSection';
import StatsSection from '@/features/home/components/StatsSection';
import WhyChooseUsSection from '@/features/home/components/WhyChooseUsSection';

export default async function HomePage({ locale }) {
  const t = await getTranslations('home');
  
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
    </>
  );
}