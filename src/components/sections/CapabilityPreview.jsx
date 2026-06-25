import { ArrowRight } from "lucide-react";
import ServiceIcon from "../common/ServiceIcon.jsx";
import { services } from "../../data/siteData.js";

const featuredServices = services.slice(0, 3);

export default function CapabilityPreview({ onNavigate }) {
  return (
    <section className="bg-white px-6 py-24 text-neutral-900">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div className="animate-slide-left">
            <p className="sans-copy text-sm font-bold uppercase tracking-[0.18em] text-[var(--teal)]">
              What we deliver
            </p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">
              Practical technology for business momentum.
            </h2>
          </div>
          <p className="animate-slide-up text-lg leading-relaxed text-neutral-600">
            Axtrum combines delivery experience, application expertise, and support discipline to move
            complex business ideas into working solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <article
              key={service.title}
              className={`animate-slide-up group flex min-h-[300px] flex-col rounded-md border border-neutral-200 bg-white p-7 shadow-[0_12px_34px_rgb(15_23_42_/_8%)] transition duration-300 hover:-translate-y-1 hover:border-[var(--teal)] hover:shadow-[0_18px_44px_rgb(15_23_42_/_14%)] ${
                index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : ""
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal)] text-white transition duration-300 group-hover:bg-[var(--teal-deep)]">
                <ServiceIcon name={service.icon} size={34} />
              </div>
              <h3 className="sans-copy mt-8 text-2xl font-bold leading-tight">{service.title}</h3>
              <p className="sans-copy mt-5 flex-1 text-base leading-7 text-neutral-600">{service.text}</p>
              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="sans-copy mt-7 inline-flex items-center gap-2 text-base font-bold text-[var(--teal)] transition group-hover:gap-3"
              >
                Explore service
                <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
