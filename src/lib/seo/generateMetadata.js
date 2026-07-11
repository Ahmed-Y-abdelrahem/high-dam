import { SITE_NAME, SITE_URL, CONTACT } from "./constants";

/**
 * Generate comprehensive metadata for any page
 * @param {Object} options - Page metadata options
 * @returns {Object} Next.js metadata object
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.jpg",
  type = "website",
  noindex = false,
  keywords = [],
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  
  const defaultKeywords = [
    "High Dam Group",
    "EPC Saudi Arabia",
    "General Contracting KSA",
    "Aramco contractor",
    "SABIC contractor",
    "construction Saudi Arabia",
    "mega projects KSA",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    
    // Canonical URL
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "ar-SA": `${url}?lang=ar`,
      },
    },
    
    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    // Twitter Cards
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@highdamgroup",
      site: "@highdamgroup",
    },
    
    // Additional
    category: "business",
  };
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(service) {
  return generatePageMetadata({
    title: service.title,
    description: service.shortDescription || service.description,
    path: `/services/${service.slug}`,
    image: service.image?.src || "/images/og-services.jpg",
    type: "article",
    keywords: [
      service.title,
      `${service.title} Saudi Arabia`,
      service.company,
      "construction services KSA",
      ...service.features.slice(0, 3),
    ],
  });
}

/**
 * Generate metadata for project pages
 */
export function generateProjectMetadata(project) {
  return generatePageMetadata({
    title: project.name,
    description: project.shortDescription || project.description,
    path: `/projects/${project.slug}`,
    image: project.image?.src || "/images/og-projects.jpg",
    type: "article",
    keywords: [
      project.name,
      project.sector,
      project.client,
      `${project.sector} projects Saudi Arabia`,
      project.location,
    ],
  });
}

/**
 * Generate metadata for industry pages
 */
export function generateIndustryMetadata(industry) {
  return generatePageMetadata({
    title: industry.name,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    image: industry.image?.src || "/images/og-industries.jpg",
    type: "article",
    keywords: [
      industry.name,
      `${industry.name} Saudi Arabia`,
      `${industry.name} construction`,
      "industry services KSA",
    ],
  });
}