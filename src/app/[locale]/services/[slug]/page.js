import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceHero from "@/features/services/service-details/ServiceHero";
import ServiceFeatures from "@/features/services/service-details/ServiceFeatures";
import ServiceAdvantages from "@/features/services/service-details/ServiceAdvantages";
import ServiceCTA from "@/features/services/service-details/ServiceCTA";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

// دالة مساعدة آمنة لاستخراج النص حسب اللغة
const getText = (service, field, locale) => {
  if (typeof service[field] === 'object' && service[field] !== null) {
    return service[field][locale] || service[field].en;
  }
  return service[field];
};

// دالة مساعدة لاستخراج المصفوفة حسب اللغة
const getArray = (service, field, locale) => {
  if (Array.isArray(service[field])) return service[field];
  return service[field][locale] || service[field].en;
};

// توليد الصفحات statically (ممتاز للـ SEO والـ Performance)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Metadata كاملة لكل صفحة (محدثة لدعم اللغات)
export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }
  
  const titleText = getText(service, 'title', locale);
  const descText = getText(service, 'shortDescription', locale) || getText(service, 'description', locale);
  const companyText = getText(service, 'company', locale);
  const url = `${SITE_URL}/${locale}/services/${service.slug}`;
  const title = `${titleText} | ${SITE_NAME}`;
  
  // استخراج أول 3 ميزات للكلمات المفتاحية بأمان
  const featuresArray = getArray(service, 'features', locale);
  const topFeatures = Array.isArray(featuresArray) ? featuresArray.slice(0, 3).map(f => typeof f === 'object' ? (f[locale] || f.en) : f) : [];

  return {
    title,
    description: descText,
    keywords: [
      titleText,
      `${titleText} Saudi Arabia`,
      `${titleText} KSA`,
      companyText,
      "construction services Saudi Arabia",
      "EPC contractor",
      ...topFeatures,
    ],
    alternates: {
      canonical: url,
      languages: {
        'en': `${SITE_URL}/en/services/${service.slug}`,
        'ar': `${SITE_URL}/ar/services/${service.slug}`,
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
      description: descText,
      url,
      siteName: SITE_NAME,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US', // ✅ ديناميكي حسب اللغة
      type: "article",
      images: [
        {
          url: service.image?.src || "/images/og-services.jpg",
          width: 1200,
          height: 630,
          alt: getText(service, 'altText', locale) || titleText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: descText,
      images: [service.image?.src || "/images/og-services.jpg"],
      creator: "@highdamgroup",
      site: "@highdamgroup",
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
  };
}

// مكون الصفحة
export default async function ServiceDetailsPage({ params }) {
  const { slug, locale } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    notFound();
  }
  
  // ✅ استخراج البيانات بأمان حسب اللغة
  const titleText = getText(service, 'title', locale);
  const descText = getText(service, 'description', locale);
  const companyText = getText(service, 'company', locale);
  const featuresArray = getArray(service, 'features', locale);
  const advantagesArray = getArray(service, 'advantages', locale);

  // Structured Data (JSON-LD) - محدث لدعم اللغات ومحمي من الأخطاء
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: titleText,
    description: descText,
    url: `${SITE_URL}/${locale}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: companyText,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: titleText,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${titleText} Services`,
      itemListElement: featuresArray.map((feature, i) => {
        const featureText = typeof feature === 'object' ? (feature[locale] || feature.en) : feature;
        return {
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: featureText,
          },
        };
      }),
    },
  };
  
  // Breadcrumb Schema - محدث
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === 'ar' ? "الرئيسية" : "Home",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === 'ar' ? "خدماتنا" : "Services",
        item: `${SITE_URL}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: titleText,
        item: `${SITE_URL}/${locale}/services/${service.slug}`,
      },
    ],
  };
  
  return (
    <>
      <ServiceHero service={service} />
      
      {/* ✅ تمرير المصفوفات المستخرجة بشكل آمن */}
      <ServiceFeatures features={featuresArray} />
      <ServiceAdvantages advantages={advantagesArray} />
      <ServiceCTA serviceTitle={titleText} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [serviceSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}