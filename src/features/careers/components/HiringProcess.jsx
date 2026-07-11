import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  { step: "01", title: "Application", description: "Submit your CV and qualifications." },
  { step: "02", title: "Screening", description: "Initial review of applications." },
  { step: "03", title: "Interview", description: "Technical and competency assessment." },
  { step: "04", title: "Onboarding", description: "Orientation and site induction." },
];

export default function HiringProcess() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          
          overline="Hiring Process"
          title="Our recruitment journey."
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.step} className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="readout mb-3 text-xs text-teal-700">{step.step}</p>
              <h3 className="font-display text-lg font-bold text-teal-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}