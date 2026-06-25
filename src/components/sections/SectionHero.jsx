export default function SectionHero({ title, subtitle, image, lightText = false, action }) {
  return (
    <section
      className="media-hero text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`media-hero__overlay ${lightText ? "bg-black/48" : "bg-white/58"}`} />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16">
        <h1
          className={`animate-slide-up text-shadow-soft mx-auto max-w-[13ch] text-4xl leading-tight tracking-normal sm:max-w-5xl sm:text-5xl md:text-6xl ${
            lightText ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className={`animate-slide-up animation-delay-100 mx-auto mt-4 max-w-[20rem] break-words text-base leading-snug sm:max-w-4xl sm:text-xl md:text-2xl ${lightText ? "text-white" : "text-black"}`}>
            {subtitle}
          </p>
        ) : null}
        {action ? (
          <div className="animate-slide-up animation-delay-200">
            <div className={`section-line ${lightText ? "text-white" : "text-black"}`} />
            <button
              type="button"
              onClick={action.onClick}
              className={`mt-7 inline-flex min-w-40 justify-center border px-9 py-3 text-lg ${
                lightText
                  ? "border-white text-white hover:bg-white hover:text-neutral-800"
                  : "border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {action.label}
            </button>
          </div>
        ) : null}
      </div>
      <div className="absolute -bottom-px left-0 z-[3] h-16 w-full bg-white angled-top-white" />
    </section>
  );
}
