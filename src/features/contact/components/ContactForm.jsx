"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const INQUIRY_TYPES = ["EPC Partnership", "Careers", "Media Inquiry", "General"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState(INQUIRY_TYPES[0]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-12 text-center"
      >
        <CheckCircle2 size={40} className="text-teal-700" />
        <h3 className="mt-4 font-display text-xl font-bold text-teal-900">
          Message received.
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Our team will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {INQUIRY_TYPES.map((type) => (
          <button
            type="button"
            key={type}
            onClick={() => setInquiryType(type)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
              inquiryType === type
                ? "border-teal-700 bg-teal-700 text-white"
                : "border-gray-300 text-gray-600 hover:border-teal-700"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 outline-none transition-colors focus:border-teal-700"
        />
      </div>

      <Button type="submit" variant="primary" className="mt-8 w-full justify-center">
        Send Message
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 outline-none transition-colors focus:border-teal-700"
      />
    </div>
  );
}