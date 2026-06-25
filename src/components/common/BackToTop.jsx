import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-md bg-[var(--teal)] text-white shadow-[0_12px_28px_rgb(0_0_0_/_20%)] transition hover:-translate-y-1 hover:bg-[var(--teal-dark)] focus:outline-none focus:ring-2 focus:ring-white/70"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}
