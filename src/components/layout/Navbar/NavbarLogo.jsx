"use client";

import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img
        src="/HdcLogo.png"
        alt="High Dam General Contracting - السد العالي للمقاولات العامة"
        className="h-8 sm:h-10 md:h-12 w-auto object-contain"
      />
    </Link>
  );
}
