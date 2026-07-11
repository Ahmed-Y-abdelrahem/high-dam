import Container from "@/components/ui/Container";

/**
 * Reusable section wrapper with consistent styling
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Section content
 */
export default function SectionWrapper({ 
  className = "", 
  children 
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <Container className="relative z-10">
        {children}
      </Container>
    </section>
  );
}