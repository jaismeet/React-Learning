export default function WhySection() {
  const highlights = ["Business focused", "Fresh approach", "Smarter delivery"];
  const stats = [
    ["2009", "Founded"],
    ["2", "Office regions"],
    ["4", "Customer markets"]
  ];

  return (
    <section className="-mt-px bg-[linear-gradient(180deg,var(--teal),var(--teal-deep))] px-6 pb-24 pt-20 text-center text-white">
      <h2 className="animate-slide-up hero-sans text-5xl font-light sm:text-6xl">Why Axtrum?</h2>
      <p className="animate-slide-up animation-delay-100 hero-sans mx-auto mt-6 max-w-[20rem] text-lg leading-relaxed text-white/95 sm:max-w-3xl sm:text-xl">
        We craft solutions to your business problems, technology included! With a fresh new approach
        and innovative out of the box holistic thinking, we constantly review if there is a better,
        smarter and more efficient way of doing things.
      </p>
      <div className="animate-slide-up animation-delay-200 section-line text-white" />
      <div className="animate-slide-up animation-delay-300 mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {highlights.map((highlight) => (
          <div key={highlight} className="border border-white/35 bg-white/10 px-5 py-5 text-lg backdrop-blur-sm">
            {highlight}
          </div>
        ))}
      </div>
      <div className="animate-slide-up animation-delay-300 mx-auto mt-12 grid max-w-3xl grid-cols-3 border-y border-white/25 py-7">
        {stats.map(([value, label]) => (
          <div key={label} className="px-3">
            <span className="hero-sans block text-4xl font-light leading-none">{value}</span>
            <span className="sans-copy mt-2 block text-xs font-bold uppercase tracking-[0.16em] text-white/75">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
