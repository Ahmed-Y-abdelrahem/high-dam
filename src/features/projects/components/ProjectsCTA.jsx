import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProjectsCTA() {
  return (
    <section className="bg-white py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-teal-900 md:text-4xl">
          The next mega project on your list — executed with certainty.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
          Partner with High Dam Group for decisive action and disciplined execution.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
          <Button href="/services" variant="outline">
            Explore Services
          </Button>
        </div>
      </Container>
    </section>
  );
}