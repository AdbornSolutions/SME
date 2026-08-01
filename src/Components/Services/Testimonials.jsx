import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import testimonialBackground from "../../assets/bottombuldingback.png";

const testimonials = [
  "Excellent planning and execution. The project was delivered on time with outstanding workmanship.",
  "SM Engineers & Contractors understood our requirements from day one and delivered every milestone with precision.",
  "Their engineering expertise, transparent communication, and commitment to quality made the entire process seamless.",
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 45 : -45,
    y: 12,
    filter: "blur(7px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -45 : 45,
    y: -12,
    filter: "blur(7px)",
  }),
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const changeSlide = (nextIndex, nextDirection) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative isolate min-h-[520px] overflow-hidden bg-[#F2F1EE] px-[clamp(20px,5vw,80px)] py-[clamp(52px,5.5vw,86px)] text-black max-[640px]:min-h-[500px]"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <img
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-[min(600px,68vw)] -translate-x-1/2 object-contain opacity-65 mix-blend-multiply max-[640px]:w-[120vw]"
        src={testimonialBackground}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <motion.div
        className="mx-auto flex max-w-[1400px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-flex rounded-full border border-black/20 px-4 py-1.5 text-[12px] leading-none font-medium text-[#ff4828]">
          Testimonials
        </span>
        <h2 className="mt-6 font-[Clash_Display] text-[clamp(2.4rem,3.2vw,3.5rem)] leading-none font-medium tracking-[-.045em]">
          What Our Clients Say
        </h2>

        <div className="mt-[clamp(65px,7vw,100px)] grid w-full grid-cols-[54px_1fr_54px] items-center gap-[clamp(18px,4vw,70px)] max-[640px]:grid-cols-[44px_1fr_44px] max-[640px]:gap-2">
          <button
            className="group grid size-11 cursor-pointer place-items-center justify-self-center rounded-full border border-black/15 bg-[#F2F1EE]/80 transition-[border-color,background-color,transform] duration-400 hover:-translate-x-1 hover:border-[#ff4828] hover:bg-[#ff4828] max-[640px]:size-10"
            type="button"
            aria-label="Previous testimonial"
            onClick={() => changeSlide(activeIndex - 1, -1)}
          >
            <svg
              className="size-4 transition-colors group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="relative min-h-[105px] overflow-hidden max-[640px]:min-h-[150px]">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.blockquote
                key={activeIndex}
                className="m-0 mx-auto max-w-[940px] font-[Clash_Display] text-[clamp(1.55rem,2.2vw,2.55rem)] leading-[1.14] font-normal tracking-[-.035em]"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
              >
                {testimonials[activeIndex]}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <button
            className="group grid size-11 cursor-pointer place-items-center justify-self-center rounded-full border border-black/15 bg-[#F2F1EE]/80 transition-[border-color,background-color,transform] duration-400 hover:translate-x-1 hover:border-[#ff4828] hover:bg-[#ff4828] max-[640px]:size-10"
            type="button"
            aria-label="Next testimonial"
            onClick={() => changeSlide(activeIndex + 1, 1)}
          >
            <svg
              className="size-4 transition-colors group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-[clamp(45px,5vw,72px)] flex items-center gap-3 text-[11px] font-medium tabular-nums">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <div className="relative h-px w-[120px] overflow-hidden bg-black/25 max-[480px]:w-20">
            <motion.span
              className="absolute inset-y-0 left-0 bg-[#ff4828]"
              animate={{
                width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
              }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span>{String(testimonials.length).padStart(2, "0")}</span>
        </div>
      </motion.div>
    </section>
  );
}
