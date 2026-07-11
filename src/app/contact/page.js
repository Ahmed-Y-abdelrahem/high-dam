import ContactHero from "@/features/contact/components/ContactHero";
import ContactInfo from "@/features/contact/components/ContactInfo";
import ContactForm from "@/features/contact/components/ContactForm";
import OfficeLocations from "@/features/contact/components/OfficeLocations";
import FAQSection from "@/features/contact/components/FAQSection";
import { generatePageMetadata, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { CONTACT, SITE_URL } from "@/lib/constants";

const faqs = [
  { 
    question: "What services does High Dam Group provide?", 
    answer: "We provide integrated project execution services including civil works, MEP, dewatering, shoring, manpower supply, and equipment rental across Saudi Arabia." 
  },
  { 
    question: "Which industries do you serve?", 
    answer: "We serve Oil & Gas, infrastructure, healthcare, hospitality, commercial, and government sectors across Saudi Arabia." 
  },
  { 
    question: "What are your HSE standards?", 
    answer: "We maintain ISO 9001, 14001, and 45001 certifications and comply with ARAMCO, SABIC, and EPC HSE requirements." 
  },
  { 
    question: "How can I request a proposal?", 
    answer: "You can contact us through our contact form, email at info@high-dam.co, or phone at +966 13 899 6997. Our team will respond within one business day." 
  },
  { 
    question: "Where is High Dam Group located?", 
    answer: "Our headquarters is in Al Khobar, Saudi Arabia, with additional offices in Riyadh and Jeddah." 
  },
];

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description: `Get in touch with High Dam Group for EPC partnerships, project inquiries, or careers. Located in Al Khobar, Saudi Arabia. Call us at ${CONTACT.phone}.`,
  path: "/contact",
  keywords: ["contact High Dam Group", "construction contact KSA", "EPC contractor contact"],
});

export default function ContactPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <ContactHero />
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <OfficeLocations />
      <FAQSection />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [faqSchema, breadcrumbSchema],
          }),
        }}
      />
    </>
  );
}