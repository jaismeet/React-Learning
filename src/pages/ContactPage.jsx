import ContactForm from "../components/forms/ContactForm.jsx";
import Footer from "../components/layout/Footer.jsx";
import MapPanel from "../components/sections/MapPanel.jsx";
import { offices } from "../data/siteData.js";

export default function ContactPage({ onNavigate }) {
  return (
    <section className="bg-[var(--teal)] pt-24 text-white">
      <MapPanel />
      <div className="-mt-px px-6 pb-24 pt-20 text-center angled-bottom-teal">
        <h1 className="animate-slide-up text-5xl sm:text-6xl">Want to talk?</h1>
        <p className="animate-slide-up animation-delay-100 mx-auto mt-7 max-w-[20rem] break-words text-lg leading-relaxed sm:max-w-4xl sm:text-xl">
          Speak with our London or Noida team about delivery, support, validation, or a new digital project.
        </p>
        <div className="animate-slide-up animation-delay-200 section-line text-white" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {offices.map((office, index) => (
            <article
              key={office.id}
              className={`animate-slide-up min-w-0 break-words border border-white/30 bg-white/10 p-6 text-left backdrop-blur-sm ${
                index === 1 ? "animation-delay-100" : ""
              }`}
            >
              <p className="sans-copy text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                {office.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl">{office.label}</h2>
              <p className="sans-copy mt-4 break-words text-sm leading-6 text-white/90">{office.address}</p>
              <p className="sans-copy mt-4 text-sm font-bold">{office.phone}</p>
              <p className="sans-copy mt-1 text-sm">{office.email}</p>
            </article>
          ))}
        </div>
      </div>
      <ContactForm />
      <Footer onNavigate={onNavigate} />
    </section>
  );
}
