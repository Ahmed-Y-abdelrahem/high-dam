import Link from "next/link";
import Image from "next/image";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <Image
          src="/HdcLogo.png"
          alt="High Dam Group"
          width={120}
          height={120}
          className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </Link>
  );
}