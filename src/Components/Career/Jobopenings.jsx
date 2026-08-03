import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const jobs = [
  {
    title: "Site Engineer",
    description:
      "Manage on-site construction activities, coordinate with contractors, monitor project progress, and ensure quality and safety standards are maintained throughout execution.",
  },
  {
    title: "Civil Engineer",
    description:
      "Support project planning, estimation, structural execution, quality inspections, and site coordination across industrial construction projects.",
  },
  {
    title: "Project Manager",
    description:
      "Lead industrial construction projects from planning to handover while managing schedules, budgets, resources, and client communication.",
  },
  {
    title: "Planning Engineer",
    description:
      "Develop construction schedules, monitor milestones, optimize resources, and ensure projects progress according to plan.",
  },
];

function LocationIcon() {
  return (
    <svg className="size-3.5 fill-none stroke-[#ff4b2e]" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13 6.7c0 3.5-5 7.3-5 7.3S3 10.2 3 6.7a5 5 0 0 1 10 0Z" strokeWidth="1.2" />
      <circle cx="8" cy="6.7" r="1.7" strokeWidth="1.2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="size-3.5 fill-none stroke-[#ff4b2e]" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="5.4" strokeWidth="1.2" />
      <path d="M8 4.5V8h3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Jobopenings() {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (!selectedJob) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedJob(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedJob]);

  const submitApplication = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Application for ${selectedJob}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nExperience: ${form.get("experience")}\n\nMessage:\n${form.get("message")}`,
    );

    window.location.href = `mailto:smecontractors1@gmail.com?subject=${subject}&body=${body}`;
    setSelectedJob(null);
  };

  return (
    <section
      className="scroll-mt-5 bg-[#f4f3f0] px-[5.75%] pb-[26px] pt-4 text-[#080808] max-[700px]:px-4 max-[700px]:pt-8"
      id="open-positions"
    >
      <motion.div
        className="mx-auto max-w-[1260px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center">
          <span className="inline-flex min-h-6 items-center rounded-full border border-[#d2d0cc] px-[14px] text-[11px] font-medium text-[#ff4b2e]">
            Job Opening
          </span>
          <h2 className="mx-auto mt-[17px] max-w-[470px] font-display text-[clamp(35px,3.55vw,52px)] font-medium leading-[.98] tracking-[-.055em]">
            Explore Career
            <span className="block">Opportunities</span>
          </h2>
          <p className="mx-auto mt-[20px] max-w-[485px] text-[12px] leading-[1.13] tracking-[-.015em] text-[#333]">
            Whether you&apos;re an experienced professional or an aspiring engineer,
            discover exciting opportunities to grow your career with a team
            that&apos;s building the future of industrial infrastructure.
          </p>
        </div>

        <div className="mt-[30px] grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">
          {jobs.map((job) => (
            <article
              className="flex min-h-[239px] flex-col rounded-[14px] border border-[#dfddd8] px-9 pb-[34px] pt-[29px] max-[700px]:min-h-[250px] max-[700px]:px-6"
              key={job.title}
            >
              <h3 className="font-display text-[20px] font-medium leading-tight tracking-[-.055em]">
                {job.title}
              </h3>
              <p className="mt-[16px] max-w-[440px] text-[12px] leading-[1.68] text-[#505050]">
                {job.description}
              </p>

              <div className="mt-auto flex items-end justify-between gap-4 pt-5 max-[420px]:items-start max-[420px]:flex-col">
                <div className="space-y-[5px] text-[13px] font-medium">
                  <p className="flex items-center gap-[10px]">
                    <LocationIcon />
                    Nagpur, Maharashtra
                  </p>
                  <p className="flex items-center gap-[10px]">
                    <ClockIcon />
                    Full - Time
                  </p>
                </div>

                <button
                  className="inline-flex h-9 items-center gap-2 rounded-full bg-[#ff4b2e] px-[14px] text-[11px] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4b2e]"
                  type="button"
                  onClick={() => setSelectedJob(job.title)}
                  aria-label={`Apply for ${job.title}`}
                >
                  Apply now
                  <svg className="size-3 fill-none stroke-current stroke-[1.5]" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="m4 2 4 4-4 4" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#07111d]/70 px-4 py-6 backdrop-blur-[5px]"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedJob(null);
          }}
        >
          <motion.div
            className="relative w-full max-w-[610px] overflow-hidden rounded-[24px] bg-[#f7f6f3] p-8 shadow-[0_30px_90px_rgba(0,0,0,.3)] max-[600px]:rounded-[18px] max-[600px]:p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-title"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#ff4b2e]" />
            <button
              className="absolute right-5 top-5 grid size-9 cursor-pointer place-items-center rounded-full border border-[#d9d6d0] bg-transparent text-xl leading-none text-[#17202a] transition-colors hover:border-[#ff4b2e] hover:text-[#ff4b2e]"
              type="button"
              onClick={() => setSelectedJob(null)}
              aria-label="Close application form"
            >
              ×
            </button>

            <span className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#ff4b2e]">
              Join our team
            </span>
            <h2
              className="mt-2 pr-12 font-display text-[clamp(28px,4vw,38px)] font-medium leading-none tracking-[-.045em]"
              id="application-title"
            >
              Apply for {selectedJob}
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[#62605c]">
              Share your details below. Your email app will open with the
              application ready to send.
            </p>

            <form className="mt-6 grid grid-cols-2 gap-4 max-[560px]:grid-cols-1" onSubmit={submitApplication}>
              <label className="text-[12px] font-semibold text-[#242424]">
                Full name <span className="text-[#ff4b2e]">*</span>
                <input
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#d9d6d0] bg-white px-3.5 text-[13px] font-normal outline-none transition-colors placeholder:text-[#aaa6a0] focus:border-[#ff4b2e]"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoFocus
                  required
                />
              </label>
              <label className="text-[12px] font-semibold text-[#242424]">
                Email address <span className="text-[#ff4b2e]">*</span>
                <input
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#d9d6d0] bg-white px-3.5 text-[13px] font-normal outline-none transition-colors placeholder:text-[#aaa6a0] focus:border-[#ff4b2e]"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </label>
              <label className="text-[12px] font-semibold text-[#242424]">
                Phone number <span className="text-[#ff4b2e]">*</span>
                <input
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#d9d6d0] bg-white px-3.5 text-[13px] font-normal outline-none transition-colors placeholder:text-[#aaa6a0] focus:border-[#ff4b2e]"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  required
                />
              </label>
              <label className="text-[12px] font-semibold text-[#242424]">
                Experience
                <select
                  className="mt-2 h-11 w-full rounded-[10px] border border-[#d9d6d0] bg-white px-3.5 text-[13px] font-normal outline-none transition-colors focus:border-[#ff4b2e]"
                  name="experience"
                  defaultValue="Fresher"
                >
                  <option>Fresher</option>
                  <option>1 - 3 years</option>
                  <option>3 - 5 years</option>
                  <option>5+ years</option>
                </select>
              </label>
              <label className="col-span-2 text-[12px] font-semibold text-[#242424] max-[560px]:col-span-1">
                Cover message
                <textarea
                  className="mt-2 min-h-[92px] w-full resize-y rounded-[10px] border border-[#d9d6d0] bg-white px-3.5 py-3 text-[13px] font-normal outline-none transition-colors placeholder:text-[#aaa6a0] focus:border-[#ff4b2e]"
                  name="message"
                  placeholder="Tell us briefly why you are a good fit..."
                />
              </label>
              <div className="col-span-2 mt-1 flex items-center justify-end gap-3 max-[560px]:col-span-1">
                <button
                  className="h-11 cursor-pointer rounded-full border border-[#d4d1cb] bg-transparent px-5 text-[12px] font-semibold text-[#333]"
                  type="button"
                  onClick={() => setSelectedJob(null)}
                >
                  Cancel
                </button>
                <button
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border-0 bg-[#ff4b2e] px-6 text-[12px] font-semibold text-white transition-transform hover:-translate-y-px"
                  type="submit"
                >
                  Submit application
                  <svg className="size-3 fill-none stroke-current stroke-[1.5]" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="m4 2 4 4-4 4" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
