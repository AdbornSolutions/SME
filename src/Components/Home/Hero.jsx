import { motion } from "framer-motion";
import bgImage from "../../assets/bg.png";
import Navbar from "../Common/Navbar";

const stats = [
  ["35+", "Factories", "layers"],
  ["20+", "Residential Building", "building"],
  ["10+", "Industrial Layout", "layout"],
  ["60+", "Complete Projects", "target"],
];

function StatIcon({ type }) {
  const icons = {
    layers: (
      <>
        <path d="m4 8 8-4 8 4-8 4-8-4Z" />
        <path d="m6 12 6 3 6-3M6 16l6 3 6-3" />
      </>
    ),
    building: (
      <>
        <path d="M5 21V4h10v17M15 11h4v10M3 21h18" />
        <path d="M9 8h2m-2 4h2m-2 4h2" />
      </>
    ),
    layout: <path d="M4 19V9l3-4h10l3 4v10M7 19v-5h10v5M7 10h10M3 19h18" />,
    target: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M8 3H4v4m12-4h4v4M8 21H4v-4m12 4h4v-4" />
      </>
    ),
  };
  return (
    <svg
      className="size-3 fill-none stroke-[#1b1e27] stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative isolate mx-2 mt-2 min-h-[calc(100svh-16px)] overflow-hidden rounded-[18px] bg-[#141719] text-white max-[1024px]:min-h-[760px] max-[760px]:min-h-[840px]"
      id="home"
    >
      <motion.img
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        src={bgImage}
        alt="Industrial construction site"
        fetchPriority="high"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.27),transparent_64%),linear-gradient(0deg,rgba(0,0,0,.53),transparent_57%)]" />
      <div className="mx-auto mt-3.5 w-[calc(100%-60px)] max-[760px]:mt-3 max-[760px]:w-[calc(100%-24px)]">
        <Navbar />
      </div>

      <motion.div
        className="absolute bottom-[clamp(48px,11.5%,120px)] left-[clamp(32px,4.5vw,64px)] max-[1024px]:bottom-[290px] max-[760px]:bottom-[325px] max-[760px]:left-6 max-[760px]:right-5"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="m-0 font-display text-[clamp(2rem,3.8vw,3.7rem)] font-medium leading-[1.12] tracking-[-.055em] max-[1024px]:text-[clamp(2rem,5.2vw,3.3rem)] max-[760px]:text-[clamp(1.9rem,8vw,2.75rem)]">
          <span className="block">Engineering Industrial Projects</span>
          <span className="block">with Precision, Performance &amp;</span>
          <span className="block">Accountability</span>
        </h1>
      </motion.div>

      <motion.aside
        className="absolute bottom-[clamp(42px,6%,70px)] right-[clamp(32px,4.4vw,62px)] w-[min(480px,34vw)] rounded-[30px] bg-white px-10 py-[26px] text-[#11131b] max-[1024px]:bottom-10 max-[1024px]:right-8 max-[1024px]:w-[min(440px,43vw)] max-[760px]:inset-x-6 max-[760px]:bottom-8 max-[760px]:w-auto max-[760px]:rounded-[22px] max-[760px]:px-5 max-[760px]:py-4"
        aria-label="Company achievements"
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map(([value, label, icon], index) => (
          <div
            className="grid min-h-[66px] grid-cols-[110px_1fr_50px] items-center border-b border-[#ededed] last:border-0 max-[760px]:min-h-[45px] max-[760px]:grid-cols-[70px_1fr_32px]"
            key={`${label}-${index}`}
          >
            <strong className="text-[30px] font-medium max-[760px]:text-xl">
              {value}
            </strong>
            <span className="text-[13px] uppercase text-[#5c5f67] max-[760px]:text-[8px]">
              {label}
            </span>
            <i className="flex size-12 items-center justify-center rounded-full border border-[#e5e6e8] max-[760px]:size-7">
              <StatIcon type={icon} />
            </i>
          </div>
        ))}
      </motion.aside>
    </section>
  );
}
