import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";

export default function MissionVision() {
  return (
    <section className="bg-white py-28">
      <Container>

        <SectionHeader
          overline="Our Foundation"
          title="Driven by vision, guided by mission."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* VISION */}
          <div className="relative group">

            {/* subtle line accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-teal-600 to-transparent" />

            <div className="pl-6">

              <p className="text-xs tracking-[0.3em] text-teal-700 uppercase font-semibold">
                Vision 2030
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-snug">
                To be the most trusted and integrated project execution partner in Saudi Arabia.
              </h3>

              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Contributing to the Kingdom's Vision 2030 through excellence in delivery and
                unwavering commitment to quality, innovation, and long-term value creation.
              </p>

            </div>
          </div>

          {/* MISSION */}
          <div className="relative group">

            {/* subtle line accent */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-500 to-transparent opacity-70" />

            <div className="pl-6">

              <p className="text-xs tracking-[0.3em] text-yellow-600 uppercase font-semibold">
                Mission
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-snug">
                Deliver comprehensive engineering solutions through integrated execution.
              </h3>

              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Ensuring safety, quality, and timeliness while building lasting partnerships
                with clients through a unified and efficient project delivery model.
              </p>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}