import { ArrowRight, CheckCircle2, X } from "lucide-react";

export default function ProjectDetailsModal({ project, onClose, onContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/60 px-4 py-8">
      <article className="max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-md bg-white p-6 text-neutral-800 shadow-2xl">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="sans-copy text-sm font-bold uppercase tracking-[0.16em] text-[var(--teal)]">
              Project story
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-tight">{project.large}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-neutral-300 transition hover:border-[var(--teal)] hover:text-[var(--teal)]"
            aria-label="Close project details"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex min-h-52 items-center justify-center bg-neutral-100">
            <div className="absolute bottom-5 h-24 w-40 skew-x-[-23deg] bg-neutral-300/70" />
            <div
              className={`relative flex h-44 w-44 flex-col items-center justify-center px-5 text-center shadow-lg [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)] ${project.className}`}
            >
              <span className="sans-copy text-3xl font-black italic">{project.small}</span>
              <span className="sans-copy text-2xl font-bold italic leading-tight">{project.large}</span>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed">{project.summary}</p>

            <div className="mt-7">
              <h3 className="sans-copy text-sm font-bold uppercase tracking-[0.16em] text-neutral-500">
                Services used
              </h3>
              <div className="mt-4 grid gap-3">
                {project.services.map((service) => (
                  <p key={service} className="flex items-center gap-3 text-base font-bold">
                    <CheckCircle2 size={19} className="text-[var(--teal)]" />
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-l-4 border-[var(--teal)] bg-neutral-50 p-5">
          <p className="sans-copy text-sm font-bold uppercase tracking-[0.16em] text-neutral-500">Outcome</p>
          <p className="mt-3 text-lg leading-relaxed">{project.result}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="rounded-md border border-neutral-300 px-5 py-3">
            Close
          </button>
          <button
            type="button"
            onClick={onContact}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--teal)] px-5 py-3 text-white transition hover:bg-[var(--teal-dark)]"
          >
            Discuss similar work
            <ArrowRight size={18} />
          </button>
        </div>
      </article>
    </div>
  );
}
