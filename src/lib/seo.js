import { SITE_NAME, SITE_URL, CONTACT } from "./constants";

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
 */
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: service.company || SITE_NAME,
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
}

/**
 * Project Schema for JSON-LD
 */
export function generateProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    datePublished: project.year,
    contentLocation: {
      "@type": "Place",
      name: project.location,
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords: [project.sector, project.client, project.location].join(", "),
  };
}

/**
 * Industry Schema for JSON-LD
 */
export function generateIndustrySchema(industry) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${industry.name} Services`,
    description: industry.longDescription || industry.description,
    url: `${SITE_URL}/industries/${industry.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: industry.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${industry.name} Services`,
      itemListElement: industry.services.map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };
}

/**
 * FAQ Schema for JSON-LD
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb Schema for JSON-LD (مهم جداً للـ SEO)
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * JobPosting Schema for JSON-LD (مهم جداً لصفحات الوظائف)
 */
export function generateJobPostingSchema(job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
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
        streetAddress: "Dhahran Road, Thugbah Bldg. No.3907",
        addressLocality: "Al Khobar",
        addressRegion: "Eastern Province",
        postalCode: "34623",
        addressCountry: "SA",
      },
    },
    jobLocationType: job.locationType || "TELECOMMUTE",
  };
}