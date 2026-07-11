import ProjectsHero from "@/features/projects/components/ProjectsHero";
import ProjectsGrid from "@/features/projects/components/ProjectsGrid";
import ProjectsStats from "@/features/projects/components/ProjectsStats";
import ProjectsCTA from "@/features/projects/components/ProjectsCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Project Portfolio | High Dam Group",
  description: "Discover High Dam Group's portfolio of successfully executed projects across Oil & Gas, healthcare, infrastructure, and more for Saudi Aramco, SABIC, and government clients.",
  
  keywords: [
    "High Dam Group projects",
    "construction projects Saudi Arabia",
    "Aramco projects KSA",
    "SABIC projects Saudi Arabia",
    "mega projects KSA",
    "infrastructure projects Saudi Arabia",
    "healthcare construction KSA",
    "project portfolio Saudi Arabia",
  ],
  
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  
  openGraph: {
    title: `Project Portfolio | ${SITE_NAME}`,
    description: "50+ major structural projects executed across Saudi Arabia for Aramco, SABIC, and government clients.",
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/projects/hero.png",
        width: 1200,
        height: 630,
        alt: "High Dam Group Project Portfolio",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `Project Portfolio | ${SITE_NAME}`,
    description: "50+ major projects executed across Saudi Arabia.",
    images: ["/images/projects/hero.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  );
}