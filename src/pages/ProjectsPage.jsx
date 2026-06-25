import { useState } from "react";
import ProjectDetailsModal from "../components/common/ProjectDetailsModal.jsx";
import Footer from "../components/layout/Footer.jsx";
import SectionHero from "../components/sections/SectionHero.jsx";
import { images, projectLogos } from "../data/siteData.js";

export default function ProjectsPage({ onNavigate }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SectionHero
        title="Success Stories"
        subtitle="Want to know what we could do for you? Take a look at some of our projects below."
        image={images.projects}
        lightText
      />
      <section className="bg-white px-6 pb-28 pt-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-14 md:flex-row">
          {projectLogos.map((logo, index) => (
            <button
              type="button"
              key={logo.large}
              onClick={() => setSelectedProject(logo)}
              className={`animate-slide-up group relative flex h-56 w-64 items-center justify-center ${
                index === 1 ? "animation-delay-100" : index === 2 ? "animation-delay-200" : ""
              }`}
              aria-label={`View ${logo.large} project details`}
            >
              <div className="absolute bottom-2 h-28 w-48 skew-x-[-23deg] bg-neutral-200/70 blur-[1px] transition duration-300 group-hover:translate-x-2 group-hover:bg-neutral-300/80" />
              <div
                className={`relative flex h-52 w-52 flex-col items-center justify-center px-6 text-center shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_22px_42px_rgb(0_0_0_/_18%)] [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)] ${logo.className}`}
              >
                <span className="sans-copy text-4xl font-black italic">{logo.small}</span>
                <span className="sans-copy text-3xl font-bold italic leading-tight">{logo.large}</span>
              </div>
              <span className="sans-copy absolute -bottom-8 text-sm font-bold uppercase tracking-[0.16em] text-[var(--teal)] opacity-0 transition group-hover:opacity-100">
                View story
              </span>
            </button>
          ))}
        </div>
        <h2 className="animate-slide-up animation-delay-300 mt-16 text-center text-3xl text-neutral-600">Client feedback</h2>
        <div className="animate-slide-up animation-delay-300 section-line text-[var(--teal)]" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {projectLogos.map((project) => (
            <article key={project.large} className="border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm">
              <p className="text-lg leading-relaxed text-neutral-700">"{project.result}"</p>
              <p className="sans-copy mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--teal)]">
                {project.large}
              </p>
            </article>
          ))}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContact={() => {
          setSelectedProject(null);
          onNavigate("contact");
        }}
      />
    </>
  );
}
