import { MapPin, Settings } from "lucide-react";

export default function JobCard({ job, onViewDetails }) {
  return (
    <article className="animate-slide-left grid min-h-40 grid-cols-[82px_1fr] gap-5 rounded-md border border-white/30 bg-white/10 p-6 shadow-[0_12px_28px_rgb(0_0_0_/_10%)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15 sm:grid-cols-[96px_1fr] sm:gap-6 sm:p-7">
      <div className="flex h-20 w-20 items-center justify-center bg-white text-neutral-700 shadow-sm sm:h-24 sm:w-24">
        <Settings size={62} />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{job.title}</h3>
        <p className="mt-2 flex items-center gap-1 text-sm font-bold uppercase">
          <MapPin size={16} fill="currentColor" /> Sector - 132, Express Trade Tower, Noida
        </p>
        <p className="mt-2 text-base font-bold uppercase">
          Exp: {job.exp} <span className="ml-6">Opening: {job.openings}</span>
        </p>
        <button
          type="button"
          onClick={() => onViewDetails(job)}
          className="mt-2 inline-flex text-lg underline underline-offset-2"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
