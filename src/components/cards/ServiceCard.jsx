import ServiceIcon from "../common/ServiceIcon.jsx";

export default function ServiceCard({ service, onNavigate }) {
  return (
    <article className="animate-slide-up group flex min-h-[360px] flex-col items-center justify-center rounded-md border border-white/20 bg-white/10 px-10 py-10 text-center shadow-[0_16px_36px_rgb(0_0_0_/_12%)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/15 hover:shadow-[0_22px_42px_rgb(0_0_0_/_18%)]">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-white/10 transition duration-300 group-hover:bg-white group-hover:text-[var(--teal)]">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="sans-copy mt-10 text-3xl font-bold leading-tight">{service.title}</h3>
      <p className="sans-copy mt-6 text-base leading-8 text-white/90">{service.text}</p>
      <button
        type="button"
        onClick={() => onNavigate("contact")}
        className="sans-copy mt-7 border border-white/85 px-5 py-2 text-base transition duration-300 hover:bg-white hover:text-[var(--teal)]"
      >
        Read More
      </button>
    </article>
  );
}
