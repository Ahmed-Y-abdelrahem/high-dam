import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import IndustryHero from "@/features/industries/industry-details/IndustryHero";
import IndustryOverview from "@/features/industries/industry-details/IndustryOverview";
import IndustryChallenges from "@/features/industries/industry-details/IndustryChallenges";
import IndustryProjects from "@/features/industries/industry-details/IndustryProjects";
import IndustryCTA from "@/features/industries/industry-details/IndustryCTA";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { generateIndustrySchema, generateBreadcrumbSchema } from "@/lib/seo";

// ==========================================
// دوال مساعدة آمنة لاستخراج البيانات حسب اللغة
// ==========================================
const getText = (value, locale) => {
  if (typeof value === 'object' && value !== null) {
    return value[locale] || value.en || '';
  }
  return value || '';
};

const getArray = (value, locale) => {
  if (Array.isArray(value)) return value;
  if (typeof value === 'object' && value !== null) {
    return value[locale] || value.en || [];
  }
  return [];
};

// توليد الصفحات statically (ممتاز للـ SEO والـ Performance)
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

// Metadata كاملة ومحسنة للـ SEO مع دعم اللغات
export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const industry = industries.find((i) => i.slug === slug);
  
  if (!industry) {
    return {
      title: "Industry Not Found",
      robots: { index: false, follow: false },
    };
  }
  
  const name = getText(industry.name, locale);
  const description = getText(industry.longDescription, locale) || getText(industry.description, locale);
  const url = `${SITE_URL}/${locale}/industries/${industry.slug}`;
  const title = `${name} | ${SITE_NAME}`;
  
  // ✅ استخراج أول 3 خدمات بأمان للكلمات المفتاحية
  const servicesArray = getArray(industry.services, locale);
  const topServices = servicesArray.slice(0, 3).map(s => typeof s === 'object' ? getText(s, locale) : s);

  return {
    title,
    description,
    keywords: [
      name,
      `${name} Saudi Arabia`,
      `${name} KSA`,
      `${name} construction`,
      `${name} contractor`,
      ...topServices,
    ],
    alternates: {
      canonical: url,
      languages: {
        'en': `${SITE_URL}/en/industries/${industry.slug}`,
        'ar': `${SITE_URL}/ar/industries/${industry.slug}`,
      },
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
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: "article",
      images: [
        {
          url: industry.image?.src || "/images/og-industries.jpg",
          width: 1200,
          height: 630,
          alt: getText(industry.altText, locale) || name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [industry.image?.src || "/images/og-industries.jpg"],
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
  const { slug, locale } = await params;
  const industry = industries.find((i) => i.slug === slug);
  
  if (!industry) {
    notFound();
  }
  
  // ✅ استخراج البيانات بشكل آمن للمكونات والـ Schema
  const name = getText(industry.name, locale);
  const projectsArray = getArray(industry.projects, locale);

  const industrySchema = generateIndustrySchema(industry, locale);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'ar' ? "الرئيسية" : "Home", url: `/${locale}` },
    { name: locale === 'ar' ? "القطاعات" : "Industries", url: `/${locale}/industries` },
    { name: name, url: `/${locale}/industries/${industry.slug}` },
  ]);
  
  return (
    <>
      <IndustryHero industry={industry} />
      <IndustryOverview industry={industry} />
      <IndustryChallenges industry={industry} />
      
      {/* ✅ تمرير المصفوفة المستخرجة بشكل آمن */}
      <IndustryProjects projects={projectsArray} industrySlug={industry.slug} />
      
      <IndustryCTA industryName={industry.name} />
      
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