import Container from "@/components/ui/Container";
import { companies } from "@/data/companies";
import { QUICK_LINKS, FOOTER_SERVICES, COMPANY_PROFILE } from "@/constants/footer";
import { FileDown, ExternalLink } from "lucide-react";
import FooterLogo from "./FooterLogo";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterColumn from "./FooterColumn";
import FooterCertifications from "./FooterCertifications";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-teal-950 to-black pt-20 text-white">
      <div className="high-watermark" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 lg:grid-cols-12 lg:gap-8">
          {/* Logo + Contact + Social */}
          <div className="lg:col-span-3">
            <FooterLogo />
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/60">
              A fully integrated business group supporting Oil &amp; Gas operators, EPC contractors, government entities, and mega project developers across Saudi Arabia.
            </p>
            <FooterContact />
            <FooterSocial />
          </div>

          {/* Our Companies - مع روابط خارجية */}
          <div className="lg:col-span-2">
            <p className="readout mb-5 text-xs text-yellow-400 font-bold tracking-wider">OUR COMPANIES</p>
            <ul className="space-y-3 text-sm">
              {companies.map((c) => (
                <li key={c.slug}>
                  <a 
                    href={c.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors"
                  >
                    <span>{c.name}</span>
                    <ExternalLink size={12} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <FooterColumn title="QUICK LINKS" links={QUICK_LINKS} />

          {/* Our Services */}
          <FooterColumn title="OUR SERVICES" links={FOOTER_SERVICES} />

          {/* Company Profile Download */}
          <div className="lg:col-span-3">
            <p className="readout mb-5 text-xs text-yellow-400 font-bold tracking-wider">COMPANY PROFILE</p>
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 transition-colors group-hover:bg-yellow-400">
                  <FileDown size={24} className="text-yellow-400 transition-colors group-hover:text-teal-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1">
                    Download Our Profile
                  </h3>
                  <p className="text-xs text-white/60 mb-3">
                    Complete overview of our services, projects, and capabilities
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      PDF Format
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {COMPANY_PROFILE.fileSize}
                    </span>
                  </div>
                  <a
                    href={COMPANY_PROFILE.downloadUrl}
                    download={COMPANY_PROFILE.fileName}
                    className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-xs font-bold text-teal-900 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
                  >
                    <FileDown size={14} />
                    Download Profile
                  </a>
                </div>
              </div>
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        </div>

        <FooterCertifications />
        <FooterBottom />
      </Container>
    </footer>
  );
}