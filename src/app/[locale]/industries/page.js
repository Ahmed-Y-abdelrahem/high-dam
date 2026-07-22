import IndustriesHero from "@/features/industries/components/IndustriesHero";
import IndustriesGrid from "@/features/industries/components/IndustriesGrid";
import IndustryBenefits from "@/features/industries/components/IndustryBenefits";
import IndustryCTA from "@/features/industries/components/IndustryCTA";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Industries Served | High Dam Group",
  description: "High Dam Group serves Oil & Gas, infrastructure, healthcare, hospitality, commercial, and government sectors across Saudi Arabia with specialized expertise.",
  
  keywords: [
    "industries served Saudi Arabia",
    "Oil & Gas construction KSA",
    "infrastructure contractor Saudi Arabia",
    "healthcare construction KSA",
    "hospitality construction Saudi Arabia",
    "commercial construction KSA",
    "EPC contractor industries",
    "sector expertise Saudi Arabia",
  ],
  
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
  
  openGraph: {
    title: `Industries Served | ${SITE_NAME}`,
    description: "Specialized expertise across Oil & Gas, infrastructure, healthcare, hospitality, and commercial sectors in Saudi Arabia.",
    url: `${SITE_URL}/industries`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/industries/hero.png",
        width: 1200,
        height: 630,
        alt: "Industries Served by High Dam Group",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `Industries Served | ${SITE_NAME}`,
    description: "Specialized expertise across Saudi Arabia's most demanding industries.",
    images: ["/images/industries/hero.png"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustryBenefits />
      <IndustryCTA />
    </>
  );
}