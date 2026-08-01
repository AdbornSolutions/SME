import { motion } from "framer-motion";
import commonHeroImage from "../../assets/CommonHero.png";
import Navbar from "../Common/Navbar";

export default function Hero() {
  return (
    <section
      className="relative isolate mx-2 mt-2 min-h-[320px] overflow-hidden rounded-[18px] text-white sm:aspect-[2.25/1] sm:min-h-0"
      id="services"
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
      <div className="absolute inset-0 -z-10 bg-[#061424]/[.22]" />
      <div className="mx-auto mt-3.5 w-[calc(100%-60px)] max-[760px]:mt-3 max-[760px]:w-[calc(100%-24px)]">
        <Navbar />
      </div>
      <motion.div
        className="absolute inset-x-5 top-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-display text-[clamp(2rem,4.1vw,4.25rem)] font-medium leading-none tracking-[-.055em]">
          Strong. Reliable. Engineered for Excellence.
        </h1>
        <p className="mt-5 text-[clamp(12px,.95vw,16px)] text-white/90">
          Home&nbsp; – &nbsp;Service
        </p>
      </motion.div>
    </section>
  );
}
