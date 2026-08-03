import { motion } from "framer-motion";
import commonHeroImage from "../../assets/CommonHero.png";
import Navbar from "../Common/Navbar";

export default function Hero() {
  const scrollToOpenings = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative isolate mx-2 mt-2 min-h-[455px] overflow-hidden rounded-[18px] text-white sm:aspect-[2.25/1] sm:min-h-0"
      id="career"
    >
      <motion.img
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        src={commonHeroImage}
        alt="Modern engineered building facade"
        fetchPriority="high"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,48,81,.42),rgba(15,48,81,.12)_68%)]" />

      <div className="mx-auto mt-3.5 w-[calc(100%-60px)] max-[760px]:mt-3 max-[760px]:w-[calc(100%-24px)]">
        <Navbar />
      </div>

      <motion.div
        className="absolute bottom-[20.5%] left-[4.7%] max-[760px]:bottom-[12%] max-[760px]:left-6 max-[760px]:right-6"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-2 text-[clamp(16px,1.75vw,20px)] tracking-[-.02em] text-white/95">
          Join the Team
        </p>
        <h1 className="font-display max-w-[540px] text-[clamp(39px,4vw,58px)] font-medium leading-[1.08] tracking-[-.055em] max-[760px]:text-[clamp(34px,10vw,46px)]">
          Build a future you
          <span className="block">believe in</span>
        </h1>
        <button
          className="mt-2.5 inline-flex cursor-pointer items-center gap-2 rounded-full border-0 bg-[#ff4d2d] px-[15px] py-[10px] text-[12px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#e93e20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          type="button"
          onClick={scrollToOpenings}
        >
          Open Position
          <svg
            className="size-3 fill-none stroke-current stroke-2"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path d="m4 2 4 4-4 4" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
