import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Space_Grotesk, Inter, IBM_Plex_Mono, Tajawal } from 'next/font/google';
import Script from 'next/script';
import { routing } from '@/i18n/routing';
import { SITE_NAME, SITE_URL, GA_MEASUREMENT_ID } from '@/lib/constants';



import './globals.css';

// ============================================
// Google Fonts
// ============================================
const display = Space_Grotesk({
  subsets: ['latin', 'arabic'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const arabic = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-arabic',
  display: 'swap',
});

// ============================================
// Static Params
// ============================================
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ============================================
// Root Layout
// ============================================
export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const isRTL = locale === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/HdcLogo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966138996997',
      contactType: 'customer service',
      email: 'info@high-dam.co',
      areaServed: 'SA',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dhahran Road, Thugbah Bldg. No.3907',
      addressLocality: 'Al Khobar',
      addressRegion: 'Eastern Province',
      postalCode: '34623',
      addressCountry: 'SA',
    },
  };

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="icon" href="/HdcLogo.png" type="image/png" />
        <link rel="shortcut icon" href="/HdcLogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/HdcLogo.png" />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />

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
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${arabic.variable} font-body ${
          isRTL ? 'font-arabic' : ''
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">
            {messages.common?.skipToContent || 'Skip to content'}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}