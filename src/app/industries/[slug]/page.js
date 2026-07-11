import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { 
  IndustryHero, 
  IndustryOverview, 
  IndustryChallenges, 
  IndustryProjects,
  IndustryDetailsCTA 
} from "@/features/industries";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generateIndustrySchema, generateBreadcrumbSchema } from "@/lib/seo";

// توليد الصفحات statically
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Metadata كاملة لكل صفحة
export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const industry = industries.find((i) => i.slug === awaitedParams.slug);
  
  if (!industry) {
    return {
      title: "Industry Not Found",
      robots: { index: false, follow: false },
    };
  }
  
  const url = `${SITE_URL}/industries/${industry.slug}`;
  const title = `${industry.name} Industry Services | ${SITE_NAME}`;
  const description = industry.longDescription || industry.description;
  
  return {
    title,
    description,
    
    keywords: [
      industry.name,
      `${industry.name} Saudi Arabia`,
      `${industry.name} KSA`,
      `${industry.name} construction`,
      `${industry.name} contractor`,
      ...industry.services.slice(0, 3),
    ],
    
    alternates: {
      canonical: url,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: industry.image?.src || "/images/industries/hero.png",
          width: 1200,
          height: 630,
          alt: industry.altText || industry.name,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [industry.image?.src || "/images/industries/hero.png"],
      creator: "@highdamgroup",
      site: "@highdamgroup",
    },
    
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
  };
}

// مكون الصفحة
export default async function IndustryDetailsPage({ params }) {
  const awaitedParams = await params;
  const industry = industries.find((i) => i.slug === awaitedParams.slug);
  
  if (!industry) {
    notFound();
  }
  
  // Structured Data
  const industrySchema = generateIndustrySchema(industry);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: industry.name, url: `/industries/${industry.slug}` },
  ]);

  return (
    <>
      <IndustryHero industry={industry} />
      <IndustryOverview industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustryProjects projects={industry.projects} />
      <IndustryDetailsCTA />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [industrySchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}