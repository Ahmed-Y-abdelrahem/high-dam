import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  { title: "Mega Projects", description: "Work on Saudi Arabia's most ambitious projects." },
  { title: "Career Growth", description: "Continuous learning and development opportunities." },
  { title: "Safety Culture", description: "Join a team that prioritizes your well-being." },
  { title: "Competitive Benefits", description: "Attractive compensation and benefits package." },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          index="01"
          overline="Why Join Us"
          title="Build your career with industry leaders."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-teal-900">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}