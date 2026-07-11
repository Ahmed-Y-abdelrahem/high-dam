import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/lib/constants";

// ============================================
// Google Fonts Configuration
// ============================================
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// ============================================
// SEO Metadata Configuration
// ============================================
export const metadata = {
  metadataBase: new URL(SITE_URL),
  
  // Title
  title: {
    default: `${SITE_NAME} | One Group. One Standard. Total Project Control.`,
    template: `%s | ${SITE_NAME}`,
  },
  
  // Description
  description: "High Dam Group is a fully integrated, execution-driven business group supporting Oil & Gas operators, EPC contractors, government entities, and mega project developers across Saudi Arabia.",
  
  // Keywords
  keywords: [
    "High Dam Group",
    "EPC Saudi Arabia",
    "General Contracting KSA",
    "Aramco contractor",
    "SABIC contractor",
    "Mega Projects fit-out",
    "construction Saudi Arabia",
    "civil works KSA",
    "MEP contractor",
    "Oil & Gas construction",
    "infrastructure Saudi Arabia",
    "healthcare construction KSA",
  ],
  
  // Favicon & Icons
  icons: {
    icon: [
      { url: '/HdcLogo.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/HdcLogo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/HdcLogo.png'],
  },
  
  // PWA Manifest
  manifest: '/site.webmanifest',
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: SITE_NAME,
    description: "One Group. One Standard. Total Project Control.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/HdcLogo.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "One Group. One Standard. Total Project Control.",
    images: ["/HdcLogo.png"],
    creator: "@highdamgroup",
    site: "@highdamgroup",
  },
  
  // Robots Configuration
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
  
  // Canonical URL & Language Alternates
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "ar-SA": `${SITE_URL}?lang=ar`,
    },
  },
  
  // Authors & Publisher
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  
  // Category
  category: "business",
};

// ============================================
// Root Layout Component
// ============================================
export default function RootLayout({ children }) {
  // Organization Schema (JSON-LD)
  const jsonLd = {
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
      telephone: "+966138996997",
      contactType: "customer service",
      email: "info@high-dam.co",
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

  return (
    <html lang="en">
      <head>
        {/* Favicon - Direct HTML links for maximum compatibility */}
        <link rel="icon" href="/HdcLogo.png" type="image/png" />
        <link rel="shortcut icon" href="/HdcLogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/HdcLogo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main id="main-content">{children}</main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll to Top Button + WhatsApp Button */}
        <ScrollToTop />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}