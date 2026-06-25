import { useMemo, useState } from "react";
import { offices } from "../../data/siteData.js";

export default function MapPanel() {
  const [activeOfficeId, setActiveOfficeId] = useState(offices[0].id);
  const activeOffice = offices.find((office) => office.id === activeOfficeId) ?? offices[0];
  const encodedQuery = useMemo(() => encodeURIComponent(activeOffice.mapQuery), [activeOffice.mapQuery]);

  return (
    <div className="relative h-[390px] w-full overflow-hidden bg-neutral-200 text-neutral-800 md:h-[460px]">
      <iframe
        title={`${activeOffice.label} office on Google Maps`}
        src={`https://maps.google.com/maps?q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
        className="map-embed h-full w-full border-0"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="absolute left-6 top-6 flex overflow-hidden rounded-md border border-white/70 bg-white/95 shadow-[0_12px_26px_rgb(0_0_0_/_16%)]">
        {offices.map((office) => (
          <button
            type="button"
            key={office.id}
            onClick={() => setActiveOfficeId(office.id)}
            className={`sans-copy px-5 py-3 text-sm font-bold transition ${
              activeOffice.id === office.id
                ? "bg-[var(--teal)] text-white"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {office.label}
          </button>
        ))}
      </div>
      <div className="absolute bottom-6 left-6 right-6 min-w-0 border border-white/70 bg-white/95 p-5 shadow-[0_18px_40px_rgb(0_0_0_/_22%)] sm:right-auto sm:max-w-sm">
        <p className="sans-copy text-xs font-bold uppercase tracking-[0.18em] text-[var(--teal)]">
          {activeOffice.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl text-neutral-900">{activeOffice.title}</h2>
        <p className="mt-3 break-words sans-copy text-sm leading-6 text-neutral-700">{activeOffice.address}</p>
        <p className="mt-3 sans-copy text-sm font-bold text-neutral-700">{activeOffice.phone}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`}
          target="_blank"
          rel="noreferrer"
          className="sans-copy mt-4 inline-flex rounded-md bg-[var(--teal)] px-4 py-2 text-sm font-bold text-white transition hover:bg-[var(--teal-dark)]"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
