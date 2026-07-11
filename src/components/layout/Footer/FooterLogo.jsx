import Link from "next/link";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group mb-1">
      <div className="relative">
        <Image
          src="/HdcLogo.png"
          alt="High Dam Group"
          width={60}
          height={60}
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}