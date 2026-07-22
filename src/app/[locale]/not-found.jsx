import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// ملاحظة: لا تقم بإضافة export const metadata هنا، Next.js لا يدعمها في not-found.jsx

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-teal-900">
      {/* استخدام hdg-watermark ليتطابق مع globals.css */}
      <div className="hdg-watermark" /> 
      <Container className="relative z-10 text-center">
        <p className="readout text-xs text-yellow-400">// ERROR 404</p>
        <h1 className="mt-4 font-display text-6xl font-bold text-white">
          Page not found on the plan.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you're looking for has been moved, renamed, or never existed.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to Homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}