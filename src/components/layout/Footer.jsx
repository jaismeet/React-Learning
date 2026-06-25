import { Linkedin, Twitter } from "lucide-react";
import Logo from "../common/Logo.jsx";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[linear-gradient(180deg,var(--footer),#39393d)] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.1fr_0.9fr_1fr]">
        <div className="flex justify-center md:justify-start">
          <Logo large onClick={onNavigate ? () => onNavigate("home") : undefined} />
        </div>
        <div>
          <h3 className="sans-copy text-sm font-bold uppercase tracking-[0.16em] text-white/70">Address</h3>
          <p className="mt-5 text-lg leading-relaxed">
            Axtrum Solutions Limited<br />
            Kemp House<br />
            152-160 City Road<br />
            London, EC1V 2NX
          </p>
          <p className="mt-8 text-lg leading-relaxed">
            Unit No. 1206, Express Trade Towers2<br />
            B-36, Sector 132, Noida<br />
            Uttar Pradesh 201304<br />
            Phone: +91 (0) 120 497 0666
          </p>
        </div>
        <div>
          <h3 className="sans-copy text-sm font-bold uppercase tracking-[0.16em] text-white/70">Connect</h3>
          <div className="mt-6 flex gap-4">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--footer)] transition hover:-translate-y-0.5 hover:text-[var(--teal)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} fill="currentColor" />
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--footer)] transition hover:-translate-y-0.5 hover:text-[var(--teal)]"
              aria-label="Twitter"
            >
              <Twitter size={28} fill="currentColor" />
            </button>
          </div>
          <p className="mt-6 text-lg leading-relaxed">
            Phone: +44 203 129 2722<br />
            Email: hello@axtrum.com
          </p>
        </div>
        <div>
          <h3 className="sans-copy text-sm font-bold uppercase tracking-[0.16em] text-white/70">Subscribe</h3>
          <form className="mt-6" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-md bg-slate-100 px-4 py-3 text-lg italic text-neutral-800 outline-none transition focus:shadow-[0_0_0_3px_rgb(29_156_188_/_22%)]"
            />
            <button type="submit" className="mt-5 rounded-md bg-[var(--teal)] px-5 py-3 text-lg transition hover:-translate-y-0.5 hover:bg-[var(--teal-dark)]">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/15 pt-6 text-center sans-copy text-sm text-white/60 md:text-left">
        Technology enabled business solutions for practical, high-quality delivery.
      </div>
    </footer>
  );
}
