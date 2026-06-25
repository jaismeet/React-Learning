import { BriefcaseBusiness, MapPin, X } from "lucide-react";

export default function JobDetailsModal({ job, onClose, onApply }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/55 px-4 py-8">
      <article className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-md bg-white p-6 text-neutral-800 shadow-2xl">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="sans-copy text-sm font-bold uppercase text-[var(--teal)]">Career opening</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight">{job.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-neutral-300"
            aria-label="Close job details"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mt-6 grid gap-3 text-base sm:grid-cols-2">
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-[var(--teal)]" />
            Sector - 132, Express Trade Tower, Noida
          </p>
          <p className="flex items-center gap-2">
            <BriefcaseBusiness size={18} className="text-[var(--teal)]" />
            Exp: {job.exp} | Opening: {job.openings}
          </p>
        </div>

        <p className="mt-6 text-lg leading-relaxed">{job.summary}</p>

        <div className="mt-6">
          <h3 className="text-xl font-bold">Key skills</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {job.skills.map((skill) => (
              <span key={skill} className="rounded-md bg-[var(--teal)] px-3 py-2 text-sm font-bold text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="rounded-md border border-neutral-300 px-5 py-3">
            Close
          </button>
          <button type="button" onClick={onApply} className="rounded-md bg-[var(--teal)] px-5 py-3 text-white">
            Apply / Contact
          </button>
        </div>
      </article>
    </div>
  );
}
