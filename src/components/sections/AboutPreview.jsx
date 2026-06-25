import { images } from "../../data/siteData.js";

export default function AboutPreview({ onNavigate }) {
  return (
    <section className="bg-white px-6 pb-28 pt-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[1fr_0.95fr]">
        <div className="animate-slide-left">
          <h2 className="text-3xl font-bold uppercase">About Us</h2>
          <p className="mt-6 text-xl leading-relaxed">
            Originally founded in 2009 as Blue Thread Solutions, Axtrum operates from its offices in
            London and Noida (India) and serves customers in the USA, UK, Continental Europe and India.
          </p>
          <p className="mt-4 text-xl leading-relaxed">
            We are a solutions-driven organisation, and we love to be challenged with complex business
            problems. Innovation is at our heart, and we keep finding new and better ways of doing
            things, making continuously improving our customers and ourselves.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("about")}
            className="mt-8 inline-flex rounded-md bg-[var(--teal)] px-12 py-4 text-lg text-white"
          >
            Read More
          </button>
        </div>
        <img
          src={images.handshake}
          alt="Business partners shaking hands in a meeting room"
          className="animate-slide-up animation-delay-100 h-[360px] w-full rounded-lg bg-neutral-100 object-contain shadow-sm"
        />
      </div>
    </section>
  );
}
