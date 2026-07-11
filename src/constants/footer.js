/**
 * Footer configuration constants
 */
import { Award, Shield, CheckCircle, FileDown } from "lucide-react";

export const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/hse", label: "HSE Policy" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_SERVICES = [
  { href: "/services/civil-works", label: "Civil Works" },
  { href: "/services/mechanical-installations", label: "Mechanical" },
  { href: "/services/electrical-mep", label: "Electrical & MEP" },
  { href: "/services/dewatering-shoring", label: "Dewatering" },
  { href: "/services/manpower-equipment", label: "Manpower" },
  { href: "/services/interior-fitout", label: "Interior Fit-Out" },
];

export const CERTIFICATIONS = [
  { icon: Award, label: "ISO 9001:2015", desc: "Quality Management" },
  { icon: Shield, label: "ISO 14001:2015", desc: "Environmental" },
  { icon: CheckCircle, label: "ISO 45001:2018", desc: "Occupational H&S" },
];

// 🆕 أضف ده - Company Profile Download
export const COMPANY_PROFILE = {
  fileName: "High-Dam-Company-Profile.pdf",
  fileSize: "5.2 MB",
  format: "PDF",
  downloadUrl: "/docs/High-Dam-Company-Profile.pdf",
};

export const COMPANY_INFO = {
  name: "High Dam Group",
  tagline: "One Group. One Standard.",
  description: "A fully integrated business group supporting Oil & Gas operators, EPC contractors, government entities, and mega project developers across Saudi Arabia.",
  address: {
    street: "Dhahran Road, Thugbah Bldg. No.3907",
    city: "Al Khobar, Saudi Arabia",
  },
  phone: "+966 13 899 6997",
  mobile: "+966 56 750 6353",
  email: "info@high-dam.co",
  workingHours: "Sun - Thu: 8:00 AM - 5:00 PM",
};