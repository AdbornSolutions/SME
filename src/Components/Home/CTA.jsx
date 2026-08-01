import { motion } from "framer-motion";
import ctaBackground from "../../assets/CtaBg.png";
import Button from "../Common/Button";

export default function CTA() {
  return (
    <section className="bg-[#f2f1ee] px-[13px] py-[clamp(34px,4vw,62px)] max-[900px]:px-2">
      <motion.div
        className="group relative isolate mx-auto flex h-[282px] min-h-[282px] w-full items-center overflow-hidden rounded-[20px] text-white max-[700px]:h-auto max-[700px]:min-h-[390px]"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.018]"
          src={ctaBackground}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="mx-auto grid w-full max-w-[1260px] grid-cols-[1fr_auto] items-center gap-16 px-[clamp(32px,6vw,90px)] py-12 max-[700px]:grid-cols-1 max-[700px]:content-center max-[700px]:gap-9 max-[480px]:px-6">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: 0.12, duration: 0.75 }}
          >
            <h2 className="font-display text-[clamp(1.8rem,2.5vw,2.6rem)] font-medium leading-[1.1] tracking-[-.04em]">
              Ready to Build Your Next Industrial Facility?
            </h2>
            <p className="mt-5 max-w-[720px] text-[clamp(.88rem,1vw,1rem)] leading-[1.45] text-white/95">
              Partner with India&apos;s leading industrial infrastructure
              specialists for projects delivered with precision, safety, and
              scale.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: 0.2, duration: 0.75 }}
          >
            <Button to="/contact" iconPosition="right">
              START PROJECT
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
