"use client";

import Link from "next/link";

export default function FooterLogo() {
  return (
    <Link href="/" className="inline-block">
      <img
        src="/HdcLogoWhite.png"  // ✅ تم التغيير هنا
        alt="High Dam General Contracting"
        className="h-10 sm:h-12 md:h-16 w-auto object-contain"
      />
    </Link>
  );
}