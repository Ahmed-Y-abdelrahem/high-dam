"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // إظهار الأزرار بعد التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setShowWhatsApp(true);
      } else {
        setIsVisible(false);
        setShowWhatsApp(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // العودة لأعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // رقم الواتساب (بدون + أو مسافات)
  const whatsappNumber = "966506880221";
  const whatsappMessage = encodeURIComponent(
    "مرحباً، أريد الاستفسار عن خدماتكم"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* زر العودة لأعلى */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition-all duration-300 hover:bg-brand-700 hover:shadow-xl hover:scale-110 animate-fade-in"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* زر الواتساب */}
      {showWhatsApp && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:scale-110 animate-fade-in"
        >
          <MessageCircle size={24} />
        </a>
      )}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}