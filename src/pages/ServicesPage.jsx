import { CheckSquare, Mail } from "lucide-react";
import Footer from "../components/layout/Footer.jsx";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import SectionHero from "../components/sections/SectionHero.jsx";
import { images, services } from "../data/siteData.js";

export default function ServicesPage({ onNavigate }) {
  return (
    <>
      <SectionHero
        title="What we do"
        subtitle="We craft and deliver solutions that solve business problems"
        image={images.services}
        action={{ label: "Read More", onClick: () => window.scrollTo({ top: 520, behavior: "smooth" }) }}
      />
      <section className="bg-[linear-gradient(180deg,var(--teal),var(--teal-deep))] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-5xl leading-tight">Verification &<br /> Validation</h2>
            <div className="mt-5 h-[3px] w-20 bg-[var(--teal)]" />
            <p className="mt-8 text-lg leading-relaxed">
              Any change and solution must meet the business objective. Our techniques and methodology
              are tailored towards ensuring that business benefits and objectives are delivered, not
              just a technical change.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              Our approach to verify and validate is not merely to test the solution against its
              technical specification, but also to test it against the intended usage and whether it
              solves the business problem it was built for.
            </p>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="mt-9 inline-flex items-center rounded-md bg-neutral-700 px-5 py-3 text-white shadow-[0_12px_28px_rgb(0_0_0_/_14%)] transition hover:-translate-y-0.5 hover:bg-[var(--teal)]"
            >
              <Mail size={20} className="mr-3" />
              Get In Touch
            </button>
          </div>
          <div className="mx-auto flex h-[360px] w-[230px] items-center justify-center rounded-md bg-[#7ab8da] shadow-[0_18px_40px_rgb(0_0_0_/_14%)]">
            <div className="relative h-44 w-32 bg-white shadow-lg">
              <div className="absolute -top-5 left-8 h-8 w-16 rounded-t bg-[#f5cf62]" />
              {[0, 1, 2].map((row) => (
                <div key={row} className="mt-8 flex items-center gap-3 px-4 first:mt-10">
                  <CheckSquare className="text-[#d66c6c]" size={22} />
                  <span className="h-3 flex-1 bg-neutral-200" />
                </div>
              ))}
              <div className="absolute right-[-20px] top-16 h-28 w-5 rotate-[28deg] rounded bg-[#f39f6b]" />
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
