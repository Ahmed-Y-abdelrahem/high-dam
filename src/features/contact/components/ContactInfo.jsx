import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <p className="readout mb-4 text-xs text-teal-700">// Reach Us Directly</p>
      <h2 className="font-display text-3xl font-bold text-teal-900">
        We are ready to assist you.
      </h2>

      <ul className="mt-10 space-y-6">
        <li className="flex items-start gap-4">
          <MapPin size={20} className="mt-1 shrink-0 text-teal-700" />
          <span className="text-gray-700">
            Dhahran Road, Thugbah Bldg. No.3907
            <br />
            Additional No. 8828, Saudi Arabia 34623
          </span>
        </li>
        <li className="flex items-center gap-4">
          <Phone size={20} className="shrink-0 text-teal-700" />
          <span className="text-gray-700">+966 13 899 6997 · +966 56 750 6353</span>
        </li>
        <li className="flex items-center gap-4">
          <Mail size={20} className="shrink-0 text-teal-700" />
          <span className="text-gray-700">info@high-dam.co</span>
        </li>
      </ul>

      <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
        <iframe
          title="High Dam Group location"
          className="h-72 w-full"
          loading="lazy"
          src="https://www.google.com/maps?q=Dhahran+Road+Thugbah+Al+Khobar+Saudi+Arabia&output=embed"
        />
      </div>
    </div>
  );
}