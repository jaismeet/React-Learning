import { useState } from "react";
import JobDetailsModal from "../components/common/JobDetailsModal.jsx";
import JobCard from "../components/cards/JobCard.jsx";
import Footer from "../components/layout/Footer.jsx";
import AboutPreview from "../components/sections/AboutPreview.jsx";
import SectionHero from "../components/sections/SectionHero.jsx";
import { images, jobs } from "../data/siteData.js";

export default function CareersPage({ onNavigate }) {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <SectionHero
        title="Explore Opportunities With Axtrum"
        subtitle="Build an experience that will matter! Bring your talent and together lets create better solutions for the world."
        image={images.careers}
        lightText
      />
      <AboutPreview onNavigate={onNavigate} />
      <section className="-mt-12 bg-[var(--teal)] px-6 pb-24 pt-24 text-white angled-bottom-teal">
        <h2 className="text-center text-3xl font-bold uppercase">Current Openings</h2>
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={`${job.title}-${job.exp}`} job={job} onViewDetails={setSelectedJob} />
          ))}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
      <JobDetailsModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={() => {
          setSelectedJob(null);
          onNavigate("contact");
        }}
      />
    </>
  );
}
