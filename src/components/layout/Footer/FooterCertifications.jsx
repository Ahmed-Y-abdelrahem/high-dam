import { CERTIFICATIONS } from "@/constants/footer";

export default function FooterCertifications() {
  return (
    <div className="py-10 border-b border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="readout text-xs text-yellow-400 font-bold tracking-wider mb-2">CERTIFIED EXCELLENCE</p>
          <p className="text-sm text-white/60">Internationally recognized quality standards</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.label}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 transition-colors group-hover:bg-yellow-400">
                <cert.icon size={20} className="text-yellow-400 transition-colors group-hover:text-teal-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">{cert.label}</p>
                <p className="text-[10px] text-white/60">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}