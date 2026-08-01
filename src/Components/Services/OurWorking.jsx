import { useState } from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Accurate Cost Estimation",
    description:
      "Developing detailed Bills of Quantities (BOQs) and precise engineering estimates.",
  },
  {
    title: "Smart Project Scheduling",
    description:
      "Utilizing integrated ERP systems, Gantt chart scheduling, and structured execution strategies.",
  },
  {
    title: "Quality Assurance",
    description:
      "Implementing rigorous QA/QC protocols, standardized inspection checklists, and comprehensive material testing.",
  },
  {
    title: "On-Time Project Delivery",
    description:
      "Executing structured workflows designed to ensure seamless operational and production readiness.",
  },
  {
    title: "Complete Accountability",
    description:
      "Providing a single point of accountability from initial cost estimation through final project handover.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OurWorking() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="mx-[15px] overflow-hidden bg-[#F2F1EE] px-[clamp(24px,2.8vw,54px)] py-[55px] text-black max-[900px]:mx-2 max-[900px]:py-20 max-[640px]:px-4 max-[640px]:py-16">
      <div className="mx-auto grid min-h-[470px] max-w-[1780px] grid-cols-[minmax(0,1fr)_minmax(480px,522px)] items-center gap-[clamp(70px,10vw,190px)] max-[1050px]:grid-cols-[minmax(0,1fr)_minmax(430px,48%)] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-14">
        <motion.div
          className="self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={reveal}
            className="inline-flex rounded-full border border-black/20 px-5 py-2 text-[14px] leading-none font-medium text-[#ff4828] max-[480px]:px-4 max-[480px]:py-1.5 max-[480px]:text-xs"
          >
            SME Promises
          </motion.span>

          <motion.h2
            variants={reveal}
            className="mt-8 max-w-[690px] font-[Clash_Display] text-[clamp(2.85rem,3vw,3rem)] font-medium leading-[1.28] tracking-[-.055em] max-[900px]:max-w-[620px] max-[640px]:mt-6 max-[640px]:text-[clamp(2.35rem,10vw,3.25rem)] max-[640px]:leading-[1.12]"
          >
            Our Proven Methodology for
            <br className="max-[520px]:hidden" /> Delivering Project Success
          </motion.h2>
        </motion.div>

        <motion.div
          className="w-full self-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { delayChildren: 0.12, staggerChildren: 0.09 },
            },
          }}
          onMouseLeave={() => setActiveStep(null)}
        >
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <motion.button
                key={step.title}
                type="button"
                variants={{
                  hidden: { opacity: 0, x: 48 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.72,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className={`group relative grid w-full cursor-pointer grid-cols-[55px_1fr] overflow-hidden border-x-0 border-t-0 border-b border-solid px-0 py-[11px] text-left transition-[background-color,color,border-color,padding] duration-500 ease-[cubic-bezier(.16,1,.3,1)] max-[640px]:grid-cols-[45px_1fr] max-[640px]:py-4 ${
                  isActive
                    ? "border-[#ff4828] bg-transparent px-5 text-white max-[640px]:px-4"
                    : "border-black/20 bg-transparent text-black hover:border-[#ff4828]"
                }`}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <span
                  className={`pointer-events-none absolute inset-0 origin-top bg-[#ff4828] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                  aria-hidden="true"
                />

                <span
                  className={`relative z-[1] pt-1 font-[Clash_Display] text-[clamp(1.25rem,1.35vw,1.55rem)] leading-none font-medium tabular-nums transition-transform duration-500 ${
                    isActive ? "translate-x-0" : "group-hover:translate-x-1"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="relative z-[1] min-w-0 pr-2">
                  <span className="block font-[Clash_Display] text-[clamp(1.05rem,1.15vw,1.3rem)] leading-[1.15] font-medium tracking-[-.025em]">
                    {step.title}
                  </span>
                  <span
                    className={`mt-2 block max-w-[410px] text-[clamp(.9rem,.95vw,1rem)] leading-[1.18] transition-colors duration-500 ${
                      isActive ? "text-white/95" : "text-black/80"
                    }`}
                  >
                    {step.description}
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
