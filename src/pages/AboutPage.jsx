import Footer from "../components/layout/Footer.jsx";
import SectionHero from "../components/sections/SectionHero.jsx";
import { images, principles } from "../data/siteData.js";

export default function AboutPage({ onNavigate }) {
  return (
    <>
      <SectionHero title="Who we are" image={images.about} lightText />
      <section className="bg-white px-6 pb-28 pt-20">
        <div className="mx-auto grid max-w-6xl gap-16 text-lg leading-relaxed md:grid-cols-2">
          <div>
            <p>
              Originally founded in 2009 as Blue Thread Solutions, Axtrum operates from its offices in
              London and Noida (India) and serves customers in the USA, UK, Continental Europe and India.
            </p>
            <p className="mt-6">
              We are a solutions driven organisation and we love to be challenged with complex business
              problems. Innovation is at our heart and we keep finding new and better ways of doing
              things, making continuously improve our customers and ourselves.
            </p>
          </div>
          <div>
            <p>
              We hire the best talent that shares our passion and values. And yes, we keep them happy,
              directly resulting in exceptional customer satisfaction.
            </p>
            <p className="mt-6">
              Focused on delivering value for your business, we aim at being the partner of choice for
              our customers. Axtrum's management team has many years of delivering business solutions
              and helping customers globally.
            </p>
            <p className="mt-6">Vikram Saxena, Founder</p>
            <p>Parul Saxena, Founder</p>
          </div>
        </div>
      </section>
      <section className="-mt-16 bg-[var(--teal)] px-6 pb-20 pt-24 text-center text-white angled-bottom-teal">
        <h2 className="text-4xl">The five Axtrum principles</h2>
        <div className="section-line text-white" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-5">
          {principles.map((principle, index) => (
            <div key={principle} className="border border-white/55 p-5 text-base leading-snug">
              <span className="mb-3 block text-3xl">{index + 1}</span>
              {principle}
            </div>
          ))}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
