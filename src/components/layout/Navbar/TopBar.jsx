import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

export default function TopBar() {
  return (
    <div className="bg-teal-950 text-white/70 text-xs border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="tel:+966138996997" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone size={12} />
              <span>+966 13 899 6997</span>
            </a>
            <a href="mailto:info@high-dam.co" className="hidden md:flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail size={12} />
              <span>info@high-dam.co</span>
            </a>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin size={12} />
              <span>Al Khobar, Saudi Arabia</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Clock size={12} />
              <span>Sun - Thu: 8:00 AM - 5:00 PM</span>
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  );
}