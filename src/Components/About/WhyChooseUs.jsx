import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Engineering-Driven Approach",
    description:
      "Every project begins with detailed planning, engineering analysis, and accurate cost estimation.",
  },
  {
    title: "Complete Project Responsibility",
    description:
      "From concept to commissioning, one dedicated team manages every stage of the project.",
  },
  {
    title: "Experienced Technical Team",
    description:
      "Our multidisciplinary team brings expertise in project planning, site execution, quality assurance, and construction management.",
  },
  {
    title: "Advanced Project Management",
    description:
      "Modern ERP systems, milestone tracking, and structured scheduling ensure complete visibility and timely execution.",
  },
  {
    title: "Commitment to Quality",
    description:
      "Every construction activity follows stringent quality control procedures, inspections, and material testing standards.",
  },
];

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(null);

  return (
    <section
      className="mx-[15px] overflow-hidden bg-[#F2F1EE] px-[clamp(24px,4.4vw,76px)] py-[clamp(70px,7vw,115px)] text-black max-[900px]:mx-2 max-[640px]:px-4 max-[640px]:py-16"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto grid min-h-[570px] max-w-[1450px] grid-cols-[minmax(0,1fr)_minmax(490px,560px)] items-center gap-[clamp(80px,11vw,190px)] max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(450px,48%)] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-16">
        <motion.div
          className="self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            className="inline-flex rounded-full border border-black/20 px-5 py-2 text-[14px] leading-none font-medium text-[#ff4828] max-[480px]:px-4 max-[480px]:py-1.5 max-[480px]:text-xs"
            variants={reveal}
          >
            Why Choose SME
          </motion.span>

          <motion.h2
            id="why-choose-heading"
            className="mt-8 max-w-[720px] font-[Clash_Display] text-[clamp(3rem,4.15vw,5rem)] leading-[1.15] font-medium tracking-[-.055em] max-[640px]:mt-6 max-[640px]:text-[clamp(2.45rem,10.5vw,3.5rem)] max-[640px]:leading-[1.08]"
            variants={reveal}
          >
            Why Leading Industries Choose SM Engineers &amp; Contractors
          </motion.h2>
        </motion.div>

        <motion.div
          className="w-full self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            visible: {
              transition: { delayChildren: 0.12, staggerChildren: 0.09 },
            },
          }}
          onMouseLeave={() => setActiveReason(null)}
        >
          {reasons.map((reason, index) => {
            const isActive = activeReason === index;

            return (
              <motion.button
                key={reason.title}
                className={`group relative grid w-full cursor-pointer grid-cols-[62px_1fr] overflow-hidden border-x-0 border-b border-solid px-0 py-[13px] text-left transition-[color,border-color,padding] duration-500 ease-[cubic-bezier(.16,1,.3,1)] max-[640px]:grid-cols-[46px_1fr] max-[640px]:py-4 ${index === 0 ? "border-t" : "border-t-0"} ${
                  isActive
                    ? "border-[#ff4828] px-5 text-white max-[640px]:px-4"
                    : "border-black/20 text-black hover:border-[#ff4828]"
                }`}
                type="button"
                aria-pressed={isActive}
                onMouseEnter={() => setActiveReason(index)}
                onFocus={() => setActiveReason(index)}
                onBlur={() => setActiveReason(null)}
                onClick={() => setActiveReason(index)}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.72, ease },
                  },
                }}
              >
                <span
                  className={`pointer-events-none absolute inset-0 origin-top bg-[#ff4828] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${isActive ? "scale-y-100" : "scale-y-0"}`}
                  aria-hidden="true"
                />

                <span
                  className={`relative z-[1] pt-1 font-[Clash_Display] text-[clamp(1.35rem,1.55vw,1.75rem)] leading-none font-medium tabular-nums transition-transform duration-500 ${isActive ? "translate-x-0" : "group-hover:translate-x-1"}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="relative z-[1] min-w-0 pr-2">
                  <span className="block font-[Clash_Display] text-[clamp(1.12rem,1.35vw,1.5rem)] leading-[1.12] font-medium tracking-[-.025em]">
                    {reason.title}
                  </span>
                  <span
                    className={`mt-3 block max-w-[480px] text-[clamp(.92rem,1.02vw,1.08rem)] leading-[1.2] transition-colors duration-500 ${isActive ? "text-white/95" : "text-black/80"}`}
                  >
                    {reason.description}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
