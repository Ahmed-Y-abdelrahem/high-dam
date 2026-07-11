import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CareersCTA() {
  return (
    <section className="bg-white py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-teal-900 md:text-4xl">
          Build the next generation of projects with us.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
          Submit your CV and join our team of professionals.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Submit Your CV
          </Button>
        </div>
      </Container>
    </section>
  );
}