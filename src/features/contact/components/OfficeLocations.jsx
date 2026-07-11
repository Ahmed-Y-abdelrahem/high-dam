import Container from "@/components/ui/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { MapPin } from "lucide-react";

const offices = [
  { city: "Al Khobar (Headquarters)", address: "Dhahran Road, Thugbah Bldg. No.3907" },
  { city: "Riyadh", address: "Olaya District, Business Center" },
  { city: "Jeddah", address: "Prince Sultan Road, Commercial Center" },
];

export default function OfficeLocations() {
  return (
    <section className="bg-gray-50 py-28">
      <Container>
        <SectionHeader
          index="01"
          overline="Our Offices"
          title="Strategic locations across the Kingdom."
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {offices.map((office, i) => (
            <div key={office.city} className="rounded-2xl border border-gray-200 bg-white p-6">
              <MapPin size={24} className="text-teal-700 mb-4" />
              <h3 className="font-display text-lg font-bold text-teal-900">{office.city}</h3>
              <p className="mt-3 text-sm text-gray-600">{office.address}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}