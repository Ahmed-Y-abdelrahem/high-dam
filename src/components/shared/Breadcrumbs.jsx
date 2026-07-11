import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <Container>
        <ol className="flex items-center gap-2 py-3 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            
            return (
              <li 
                key={item.url} 
                className="flex items-center gap-2"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                {i > 0 && <ChevronRight size={14} className="text-gray-400" />}
                
                {isLast ? (
                  <span 
                    className="text-teal-700 font-semibold" 
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-1 text-gray-600 hover:text-teal-700 transition-colors"
                    itemProp="item"
                  >
                    {i === 0 && <Home size={14} />}
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}