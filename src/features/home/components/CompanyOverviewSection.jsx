import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

export default function CorporateOverviewSection() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <SectionHeader
            overline="Corporate Overview"
            title="A one-stop-shop delivery model built on integration and control."
            description="Our operating model is built around a one-stop solution approach, designed to reduce contractor interfaces, accelerate mobilization, and maintain full accountability from early works through project completion."
          />
          <div className="relative h-80 overflow-hidden rounded-2xl md:h-auto">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url(/images/about/about-company.png)" }}
            />
            <div className="absolute inset-0 bg-teal-900/10" />
          </div>
        </div>
      </Container>
    </section>
  );
}