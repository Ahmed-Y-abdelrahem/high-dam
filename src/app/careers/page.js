import CareersHero from "@/features/careers/components/CareersHero";
import WhyWorkWithUs from "@/features/careers/components/WhyWorkWithUs";
import OpenPositions from "@/features/careers/components/OpenPositions";
import BenefitsSection from "@/features/careers/components/BenefitsSection";
import HiringProcess from "@/features/careers/components/HiringProcess";
import CareersCTA from "@/features/careers/components/CareersCTA";
import { SITE_NAME, SITE_URL, CONTACT } from "@/lib/constants";

export const metadata = {
  title: "Careers | Join High Dam Group",
  description: "Join High Dam Group's team. Explore career opportunities in civil works, MEP, dewatering, shoring, and equipment operation across Saudi Arabia.",
  
  keywords: [
    "careers Saudi Arabia",
    "construction jobs KSA",
    "High Dam Group careers",
    "civil engineer jobs Saudi Arabia",
    "MEP jobs KSA",
    "HSE jobs Saudi Arabia",
    "project manager jobs KSA",
    "Aramco contractor jobs",
  ],
  
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  
  openGraph: {
    title: `Careers | Join ${SITE_NAME}`,
    description: "Build your career with Saudi Arabia's leading integrated construction group.",
    url: `${SITE_URL}/careers`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/careers/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at High Dam Group",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `Careers | Join ${SITE_NAME}`,
    description: "Build your career with Saudi Arabia's leading integrated construction group.",
    images: ["/images/careers/hero.jpg"],
  },
};

export default function CareersPage() {
  // JobPosting Schema للصفحة الرئيسية
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/HdcLogo.png`,
    sameAs: [
      "https://www.linkedin.com/company/high-dam-group",
      "https://twitter.com/highdamgroup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      email: CONTACT.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhahran Road, Thugbah Bldg. No.3907",
      addressLocality: "Al Khobar",
      addressRegion: "Eastern Province",
      postalCode: "34623",
      addressCountry: "SA",
    },
  };

  return (
    <>
      <CareersHero />
      <WhyWorkWithUs />
      <OpenPositions />
      <BenefitsSection />
      <HiringProcess />
      <CareersCTA />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />
    </>
  );
}