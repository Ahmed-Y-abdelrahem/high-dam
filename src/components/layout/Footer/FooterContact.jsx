import { MapPin, Phone, Mail, Clock } from "lucide-react";
import IconBox from "@/components/shared/IconBox";
import { COMPANY_INFO } from "@/constants/footer";

export default function FooterContact() {
  return (
    <ul className="mt-8 space-y-4 text-sm text-white/70">
      <li className="flex items-start gap-3 group">
        <IconBox><MapPin size={16} /></IconBox>
        <div className="pt-1.5">
          <p className="text-xs text-white/50 mb-0.5">Headquarters</p>
          <p className="text-white/80">{COMPANY_INFO.address.street}</p>
          <p className="text-white/80">{COMPANY_INFO.address.city}</p>
        </div>
      </li>
      <li className="flex items-center gap-3 group">
        <IconBox><Phone size={16} /></IconBox>
        <div>
          <p className="text-xs text-white/50 mb-0.5">Call Us</p>
          <a href={`tel:${COMPANY_INFO.phone}`} className="text-white/80 hover:text-yellow-400 transition-colors">
            {COMPANY_INFO.phone}
          </a>
        </div>
      </li>
      <li className="flex items-center gap-3 group">
        <IconBox><Mail size={16} /></IconBox>
        <div>
          <p className="text-xs text-white/50 mb-0.5">Email Us</p>
          <a href={`mailto:${COMPANY_INFO.email}`} className="text-white/80 hover:text-yellow-400 transition-colors">
            {COMPANY_INFO.email}
          </a>
        </div>
      </li>
      <li className="flex items-center gap-3 group">
        <IconBox><Clock size={16} /></IconBox>
        <div>
          <p className="text-xs text-white/50 mb-0.5">Working Hours</p>
          <p className="text-white/80">{COMPANY_INFO.workingHours}</p>
        </div>
      </li>
    </ul>
  );
}