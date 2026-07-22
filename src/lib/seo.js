import { SITE_NAME, SITE_URL, CONTACT } from "./constants";

// ==========================================
// دوال مساعدة آمنة لاستخراج البيانات حسب اللغة
// ==========================================
const getText = (value, locale = 'en') => {
  if (typeof value === 'object' && value !== null) {
    return value[locale] || value.en || '';
  }
  return value || '';
};

const getArray = (value, locale = 'en') => {
  if (Array.isArray(value)) return value;
  if (typeof value === 'object' && value !== null) {
    return value[locale] || value.en || [];
  }
  return [];
};

/**
 * Generate metadata for any page
 */
export function generatePageMetadata(title, description) {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      type: "website",
    },
  };
}

/**
 * Organization Schema for JSON-LD
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "High Dam Construction Group",
    url: SITE_URL,
    logo: `${SITE_URL}/HdcLogo.png`,
    description: "A fully integrated business group supporting Oil & Gas operators, EPC contractors, government entities, and mega project developers across Saudi Arabia.",
    slogan: "One Group. One Standard. Total Project Control.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      email: CONTACT.email,
      areaServed: "SA",
      availableLanguage: ["English", "Arabic"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhahran Road, Thugbah Bldg. No.3907",
      addressLocality: "Al Khobar",
      addressRegion: "Eastern Province",
      postalCode: "34623",
      addressCountry: "SA",
    },
    sameAs: [
      "https://www.linkedin.com/company/high-dam-group",
      "https://twitter.com/highdamgroup",
      "https://www.facebook.com/highdamgroup",
      "https://www.instagram.com/highdamgroup",
    ],
    knowsAbout: [
      "General Contracting",
      "EPC Projects",
      "Civil Works",
      "Mechanical Installations",
      "Electrical & MEP",
      "Dewatering & Shoring",
      "Manpower Supply",
      "Equipment Rental",
      "Interior Fit-Out",
      "Oil & Gas Construction",
      "Healthcare Facilities",
      "Infrastructure Projects",
    ],
  };
}

/**
 * LocalBusiness Schema for JSON-LD
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: `${SITE_URL}/HdcLogo.png`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhahran Road, Thugbah Bldg. No.3907",
      addressLocality: "Al Khobar",
      addressRegion: "Eastern Province",
      postalCode: "34623",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.2739,
      longitude: 50.2059,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$$",
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };
}

/**
 * Service Schema for JSON-LD
 * ✅ تم إضافة معلمة locale
 */
export function generateServiceSchema(service, locale = 'en') {
  const featuresArray = getArray(service.features, locale);
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: getText(service.title, locale),
    description: getText(service.description, locale),
    url: `${SITE_URL}/${locale}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: getText(service.company, locale) || SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: getText(service.title, locale),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${getText(service.title, locale)} Services`,
      itemListElement: featuresArray.map((feature, i) => {
        const featureText = typeof feature === 'object' ? getText(feature, locale) : feature;
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
}

/**
 * Project Schema for JSON-LD
 * ✅ تم إضافة معلمة locale
 */
export function generateProjectSchema(project, locale = 'en') {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: getText(project.name, locale),
    description: getText(project.description, locale),
    url: `${SITE_URL}/${locale}/projects/${project.slug}`,
    datePublished: project.year,
    contentLocation: {
      "@type": "Place",
      name: getText(project.location, locale),
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: [
      getText(project.sector, locale), 
      getText(project.client, locale), 
      getText(project.location, locale)
    ].filter(Boolean).join(", "),
  };
}

/**
 * Industry Schema for JSON-LD
 * ✅ تم إضافة معلمة locale وإصلاح مشكلة .map
 */
export function generateIndustrySchema(industry, locale = 'en') {
  const servicesArray = getArray(industry.services, locale);
  const name = getText(industry.name, locale);
  const description = getText(industry.longDescription, locale) || getText(industry.description, locale);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${name} Services`,
    description: description,
    url: `${SITE_URL}/${locale}/industries/${industry.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Services`,
      itemListElement: servicesArray.map((service, i) => {
        const serviceName = typeof service === 'object' ? getText(service, locale) : service;
        return {
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        };
      }),
    },
  };
}

/**
 * FAQ Schema for JSON-LD
 * ✅ تم إضافة معلمة locale
 */
export function generateFAQSchema(faqs, locale = 'en') {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: getText(faq.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: getText(faq.answer, locale),
      },
    })),
  };
}

/**
 * Breadcrumb Schema for JSON-LD
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name, // يُفترض أن name هنا نص عادي يتم تمريره من الصفحة
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * JobPosting Schema for JSON-LD
 * ✅ تم إضافة معلمة locale
 */
export function generateJobPostingSchema(job, locale = 'en') {
  // استخراج المدينة من location بشكل آمن (نفترض أن location قد يكون كائناً أو نصاً)
  const locationText = getText(job.location, locale);
  
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: getText(job.title, locale),
    description: getText(job.description, locale),
    datePosted: job.datePosted || new Date().toISOString().split('T')[0],
    validThrough: job.validThrough || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/HdcLogo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        // نستخدم الموقع المحدد للوظيفة، أو نعود للعنوان الافتراضي للشركة
        addressLocality: locationText || "Al Khobar",
        addressRegion: "Eastern Province",
        addressCountry: "SA",
      },
    },
    jobLocationType: job.locationType || "ONSITE",
  };
}