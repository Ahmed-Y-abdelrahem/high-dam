import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="bg-gray-50 py-28">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold text-teal-900 md:text-4xl">
          One scope, one contract, one accountable team.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
          Talk to us about how an integrated execution model reduces your project risk.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">
            Request a Proposal
          </Button>
          <Button href="/projects" variant="outline">
            View Our Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}