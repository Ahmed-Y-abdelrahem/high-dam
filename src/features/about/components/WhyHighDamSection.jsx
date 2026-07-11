import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { companies } from "@/data/companies";

export default function WhyHighDamSection() {
  return (
    <section className="bg-white py-28">
      <Container>

        <SectionHeader
          overline="Group Structure"
          title="Five companies, one accountable execution team."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {companies.map((company) => (
            <div
              key={company.slug}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal-700 hover:shadow-lg"
            >

              {/* subtle background glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-teal-500/10 blur-2xl" />
              </div>

              {/* vertical identity line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-teal-600 to-transparent opacity-60" />

              <div className="pl-5">

                {/* code */}
                <p className="text-xs tracking-[0.3em] text-teal-700 font-semibold">
                  {company.code}
                </p>

                {/* name */}
                <h3 className="mt-3 text-lg font-semibold text-teal-900 transition-colors group-hover:text-teal-700">
                  {company.name}
                </h3>

                {/* tagline */}
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  {company.tagline}
                </p>

                {/* role (primary info now) */}
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {company.role}
                </p>

              </div>

              {/* subtle bottom accent (no harsh line) */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-600 to-transparent transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}