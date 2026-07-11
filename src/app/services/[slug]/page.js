import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceHero from "@/features/services/service-details/ServiceHero";
import ServiceFeatures from "@/features/services/service-details/ServiceFeatures";
import ServiceAdvantages from "@/features/services/service-details/ServiceAdvantages";
import ServiceCTA from "@/features/services/service-details/ServiceCTA";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

// توليد الصفحات statically (ممتاز للـ SEO والـ Performance)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Metadata كاملة لكل صفحة
export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const service = services.find((s) => s.slug === awaitedParams.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }
  
  const url = `${SITE_URL}/services/${service.slug}`;
  const title = `${service.title} | ${SITE_NAME}`;
  const description = service.shortDescription || service.description;
  
  return {
    title,
    description,
    
    // Keywords مهمة للـ SEO
    keywords: [
      service.title,
      `${service.title} Saudi Arabia`,
      `${service.title} KSA`,
      service.company,
      "construction services Saudi Arabia",
      "EPC contractor",
      ...service.features.slice(0, 3),
    ],
    
    // Canonical URL (مهم جداً)
    alternates: {
      canonical: url,
    },
    
    // Robots
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
    
    // Open Graph (مهم للمشاركة على فيسبوك ولينكد إن)
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      images: [
        {
          url: service.image?.src || "/images/og-services.jpg",
          width: 1200,
          height: 630,
          alt: service.altText || service.title,
        },
      ],
    },
    
    // Twitter Cards (مهم لتويتر)
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image?.src || "/images/og-services.jpg"],
      creator: "@highdamgroup",
      site: "@highdamgroup",
    },
    
    // Authors
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
  };
}

// مكون الصفحة
export default async function ServiceDetailsPage({ params }) {
  const awaitedParams = await params;
  const service = services.find((s) => s.slug === awaitedParams.slug);
  
  if (!service) {
    notFound();
  }
  
  // Structured Data (JSON-LD) - مهم جداً لجوجل
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: service.company,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Services`,
      itemListElement: service.features.map((feature, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };
  
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };
  
  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceAdvantages advantages={service.advantages} />
      <ServiceCTA serviceTitle={service.title} />
      
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