import { motion } from "framer-motion";

const points = [
  "Accurate Project Cost Estimation",
  "Project Schedule",
  "Budget & Cost Control",
  "Quality Without Compromise",
  "On-Time Project Delivery",
];

function Items({ duplicate = false }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={duplicate}>
      {points.map((point) => (
        <span
          className="flex items-center whitespace-nowrap pl-[clamp(20px,2.2vw,42px)] text-[clamp(10px,1vw,15px)] font-bold uppercase tracking-[.07em] max-[760px]:text-[10px]"
          key={`${point}-${duplicate}`}
        >
          {point}
          <i className="ml-[clamp(12px,1.3vw,22px)] size-[clamp(9px,.8vw,13px)] rounded-full bg-white" />
        </span>
      ))}
    </div>
  );
}

export default function Textslider() {
  return (
    <section
      className="overflow-hidden bg-[#f2f1ee] px-2 pb-2 pt-0 min-[761px]:px-[15px] min-[761px]:pb-[13px]"
      aria-label="Project capabilities"
    >
      <div className="overflow-hidden rounded-[clamp(14px,1.3vw,20px)] bg-[#ff4a2a] py-[clamp(18px,2.15vw,34px)]">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          <Items />
          <Items duplicate />
        </motion.div>
      </div>
    </section>
  );
}
