import FooterLink from "@/components/shared/FooterLink";

export default function FooterColumn({ title, links }) {
  return (
    <div className="lg:col-span-2">
      <p className="readout mb-5 text-xs text-yellow-400 font-bold tracking-wider">{title}</p>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}