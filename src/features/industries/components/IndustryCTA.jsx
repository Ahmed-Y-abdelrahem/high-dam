import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function IndustryCTA() {
  return (
    <section className="bg-teal-900 py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Ready to discuss your industry-specific needs?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Our team is ready to provide tailored solutions for your sector.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="secondary">
            Contact Our Team
          </Button>
          <Button href="/projects" variant="outlineLight">
            View Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}