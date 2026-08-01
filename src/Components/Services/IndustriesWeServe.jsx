import { motion, useReducedMotion } from "framer-motion";
import industryOne from "../../assets/optimized/about-industries/1.webp";
import industryTwo from "../../assets/optimized/about-industries/2.webp";
import industryThree from "../../assets/optimized/about-industries/3.webp";
import industryFour from "../../assets/optimized/about-industries/4.webp";
import industryEight from "../../assets/optimized/about-industries/8.webp";

const ease = [0.16, 1, 0.3, 1];

const industries = [
  {
    label: "Steel",
    image: industryOne,
    alt: "Organized steel sections in an industrial warehouse",
  },
  {
    label: "Pipe",
    image: industryTwo,
    alt: "Industrial steel pipes prepared for infrastructure projects",
  },
  {
    label: "Warehousing",
    image: industryThree,
    alt: "Large organized industrial warehouse facility",
  },
  {
    label: "Pharma",
    image: industryFour,
    alt: "Pharmaceutical manufacturing and packaging facility",
  },
  
  {
    label: "Food",
    image: industryEight,
    alt: "Modern food processing and production facility",
  },
];

function IndustryCard({ industry, index, reduceMotion }) {
  return (
    <motion.figure
      className="group relative m-0 aspect-[1.48/1] overflow-hidden rounded-[18px] bg-[#d8d7d2] shadow-[0_16px_45px_rgba(25,27,26,.045)] outline-none"
      initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      whileFocus={reduceMotion ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.75,
        delay: index * 0.055,
        ease,
      }}
      tabIndex={0}
      aria-label={industry.label}
    >
      <img
        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.075] group-focus:scale-[1.075]"
        src={industry.image}
        alt={industry.alt}
        loading="lazy"
        decoding="async"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-85 group-focus:opacity-85"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:left-[120%] group-hover:opacity-100 group-focus:left-[120%] group-focus:opacity-100"
        aria-hidden="true"
      />

      <figcaption className="absolute bottom-3 left-3 inline-flex min-h-[30px] items-center gap-0 overflow-hidden rounded-full bg-[#ff4828] px-3.5 py-1 text-[12px] leading-none font-medium text-white capitalize transition-[gap,padding] duration-400 group-hover:gap-2 group-hover:px-4 group-focus:gap-2 group-focus:px-4">
        {industry.label}
        <span
          className="max-w-0 overflow-hidden text-sm opacity-0 transition-[max-width,opacity,transform] duration-400 group-hover:max-w-5 group-hover:translate-x-0 group-hover:opacity-100 group-focus:max-w-5 group-focus:translate-x-0 group-focus:opacity-100"
          aria-hidden="true"
        >
          {"\u2197"}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function IndustriesWeServe() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="overflow-hidden bg-[#F2F1EE] px-[clamp(20px,4.4vw,72px)] py-[clamp(75px,7.5vw,125px)] text-black"
      aria-labelledby="industries-heading"
    >
      <motion.div
        className="mx-auto flex max-w-[850px] flex-col items-center text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.85, ease }}
      >
        <span className="inline-flex rounded-full border border-black/20 px-4 py-1.5 text-[12px] leading-none font-medium text-[#ff4828]">
          Industries we serve
        </span>
        <h2
          id="industries-heading"
          className="mt-7 font-[Clash_Display] text-[clamp(2.8rem,4.3vw,5rem)] leading-[1.1] font-medium tracking-[-.055em]"
        >
          Versatile engineering
          <br className="max-[520px]:hidden" /> expertise for diverse industrial
          domains
        </h2>
      </motion.div>

      <div className="mx-auto mt-[clamp(55px,6vw,90px)] grid max-w-[1400px] grid-cols-5 gap-[clamp(12px,1.4vw,22px)] max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
        {industries.map((industry, index) => (
          <IndustryCard
            key={industry.label}
            industry={industry}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </section>
  );
}
