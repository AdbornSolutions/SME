import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import dottedBackground from "../../assets/dotedBg.png";

const counters = [
  { value: 10, label: "Years of Expertise" },
  { value: 60, label: "Projects Delivered" },
  { value: 45, label: "Resident Engineers" },
  { value: 350, label: "Skilled Workforce" },
  { value: 25, label: "Heavy Machines" },
  { value: 20, label: "Ongoing Projects" },
];

function CountUp({ value }) {
  const counterRef = useRef(null);
  const isVisible = useInView(counterRef, { once: true, amount: 0.7 });
  const count = useMotionValue(0);
  const displayValue = useTransform(
    count,
    (latest) => `${Math.round(latest)}+`,
  );

  useEffect(() => {
    if (!isVisible) return undefined;

    const controls = animate(count, value, {
      duration: 2.1,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, isVisible, value]);

  return (
    <motion.strong
      ref={counterRef}
      className="block whitespace-nowrap font-[Clash_Display] text-[clamp(2.6rem,3.2vw,4rem)] leading-none font-medium tracking-[-.055em] text-black tabular-nums max-[560px]:text-[2.7rem]"
    >
      {displayValue}
    </motion.strong>
  );
}

export default function CounterNum() {
  return (
    <section className="w-full bg-[#F2F1EE] py-[clamp(34px,4vw,62px)]">
      <div className="relative min-h-[210px] w-full overflow-hidden">
        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={dottedBackground}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

        <motion.div
          className="relative z-[1] grid min-h-[210px] grid-cols-6 items-center gap-x-5 px-[clamp(28px,4vw,70px)] py-10 max-[1050px]:grid-cols-3 max-[1050px]:gap-y-12 max-[760px]:px-6 max-[620px]:grid-cols-2 max-[620px]:gap-x-4 max-[620px]:gap-y-10 max-[480px]:px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.09 },
            },
          }}
        >
          {counters.map((counter) => (
            <motion.div
              key={counter.label}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <CountUp value={counter.value} />
              <p className="mt-3 text-[clamp(.68rem,.75vw,.8rem)] leading-tight font-medium text-black/70">
                {counter.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
