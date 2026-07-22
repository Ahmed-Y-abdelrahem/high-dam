"use client";

import Image from "next/image";

export default function Logo({ size = "md", className = "" }) {
  const sizes = {
    xs: { height: 24, width: "auto" },
    sm: { height: 32, width: "auto" },
    md: { height: 48, width: "auto" },
    lg: { height: 64, width: "auto" },
    xl: { height: 80, width: "auto" },
  };

  const { height, width } = sizes[size] || sizes.md;

  return (
    <div className={`relative ${className}`} style={{ height, width }}>
      <Image
        src="/HdcLogo.png"
        alt="High Dam General Contracting - السد العالي للمقاولات العامة"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
