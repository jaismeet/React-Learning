import { images } from "../../data/siteData.js";

export default function HeroHome({ onNavigate }) {
  return (
    <section
      className="home-hero text-white"
      style={{ backgroundImage: `url(${images.home})` }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center">
        <h1 className="animate-slide-up hero-sans mx-auto max-w-[11ch] text-[42px] font-light leading-tight tracking-normal sm:max-w-none sm:text-[70px] md:text-[82px]">
          Welcome to Axtrum
        </h1>
        <p className="animate-slide-up animation-delay-100 hero-sans mx-auto mt-4 max-w-[18rem] text-xl font-light leading-snug text-white/95 sm:max-w-none sm:text-3xl">
          Technology enabled business solutions
        </p>
        <div className="animate-slide-up animation-delay-200">
          <div className="section-line text-white" />
          <button
            type="button"
            onClick={() => onNavigate("about")}
            className="hero-sans mt-8 inline-flex min-w-44 justify-center border-2 border-white px-8 py-3 text-lg transition duration-300 hover:bg-white hover:text-neutral-800 hover:shadow-[0_14px_30px_rgb(0_0_0_/_24%)]"
          >
            Find out more
          </button>
        </div>
      </div>
      <div className="hero-v-divider absolute -bottom-px left-0 z-[3] w-full bg-[var(--teal)] angled-bottom-teal" />
    </section>
  );
}
