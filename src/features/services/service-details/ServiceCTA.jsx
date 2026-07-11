import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServiceCTA({ serviceTitle }) {
  return (
    <section className="bg-gray-50 py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-teal-900 md:text-4xl">
          Ready to discuss your {serviceTitle} needs?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
          Our team is ready to provide tailored solutions for your project.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">
            Request a Quote
          </Button>
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}