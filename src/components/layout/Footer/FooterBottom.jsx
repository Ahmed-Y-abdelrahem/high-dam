import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-white/40 md:flex-row">
      <p>&copy; {new Date().getFullYear()} High Dam Group. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
        <Link href="/sitemap" className="hover:text-yellow-400 transition-colors">Sitemap</Link>
      </div>
      <p className="readout">www.high-dam.co</p>
    </div>
  );
}