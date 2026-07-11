import { SOCIAL_LINKS } from "@/constants/social";
import SocialIcon from "@/components/shared/SocialIcon";

export default function FooterSocial() {
  return (
    <div className="mt-8">
      <p className="text-xs text-white/50 mb-3">Follow Us</p>
      <div className="flex items-center gap-2">
        {SOCIAL_LINKS.map((social) => (
          <SocialIcon 
            key={social.label}
            icon={social.icon}
            href={social.href}
            label={social.label}
          />
        ))}
      </div>
    </div>
  );
}