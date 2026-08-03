import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceOne from "../../assets/optimized/services/1.webp";
import serviceTwo from "../../assets/optimized/services/2.webp";
import serviceThree from "../../assets/optimized/services/3.webp";
import serviceFour from "../../assets/optimized/services/4.webp";
import serviceFive from "../../assets/optimized/services/5.webp";
import serviceSix from "../../assets/optimized/services/6.webp";

const services = [
  { title: "Estimation & BOQ", image: serviceOne, path: "/services/estimation-and-boq" },
  { title: "Land Development", image: serviceTwo, path: "/services/land-development" },
  { title: "Industrial Construction", image: serviceThree, path: "/services/industrial-construction" },
  { title: "Factory Buildings", image: serviceFour, path: "/services/factory-buildings" },
  { title: "Industrial Roads", image: serviceFive, path: "/services/industrial-roads" },
  { title: "Master Planning", image: serviceSix, path: "/services/master-planning" },
];

export default function SMEServices() {
  const [activeService, setActiveService] = useState(3);
  const navigate = useNavigate();

  return (
    <section className="relative isolate mx-[15px] h-[calc(100svh-30px)] min-h-[760px] overflow-hidden rounded-[20px] bg-[#202423] text-white max-[900px]:mx-2 max-[900px]:h-auto max-[900px]:min-h-[680px] max-[900px]:rounded-[14px]">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={services[activeService].title}
            className="absolute inset-0 h-full w-full object-cover"
            src={services[activeService].image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.055 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.6, ease: "easeInOut" },
              scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
            }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,8,8,.7)_0%,rgba(5,8,8,.46)_48%,rgba(5,8,8,.3)_100%),linear-gradient(0deg,rgba(4,7,6,.36),transparent_55%)] max-[900px]:bg-[linear-gradient(90deg,rgba(5,8,8,.76),rgba(5,8,8,.4)),linear-gradient(0deg,rgba(4,7,6,.5),transparent_70%)]" />

      <motion.div
        className="flex min-h-full w-full items-center px-[clamp(28px,4.8vw,78px)] py-[clamp(55px,6vw,90px)] max-[900px]:items-start max-[900px]:px-5 max-[900px]:py-12"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full max-w-[760px]">
          <span className="inline-flex rounded-full border border-[#ff4828] px-5 py-2 text-[13px] font-medium text-[#ff4828] max-[480px]:px-4 max-[480px]:py-1.5 max-[480px]:text-xs">
            SME Services
          </span>

          <h2 className="mt-7 max-w-[750px] font-[Clash_Display] text-[clamp(3rem,4.25vw,5rem)] font-medium leading-[1.05] tracking-[-.06em] max-[900px]:text-[clamp(2.35rem,8vw,4rem)] max-[480px]:mt-5 max-[480px]:text-[2.15rem]">
            Comprehensive Industrial Construction Services
          </h2>

          <div
            className="mt-[clamp(28px,3vw,46px)] flex max-w-[520px] flex-col gap-[clamp(12px,1.4vh,20px)]"
            aria-label="SME services"
          >
            {services.map((service, index) => {
              const active = activeService === index;
              return (
                <button
                  key={service.title}
                  className={`group flex w-fit max-w-full cursor-pointer items-center gap-3 border-0 bg-transparent p-0 text-left text-[clamp(1.15rem,1.55vw,1.7rem)] font-normal transition-colors duration-300 max-[480px]:gap-2 max-[480px]:text-[1rem] ${active ? "text-[#ff4828]" : "text-white/85 hover:text-white"}`}
                  type="button"
                  aria-pressed={active}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => {
                    setActiveService(index);
                    navigate(service.path);
                  }}
                >
                  <span
                    className={`h-[2px] shrink-0 transition-[width,background-color] duration-500 ${active ? "w-14 bg-[#ff4828]" : "w-7 bg-white/80 group-hover:w-10"}`}
                  />
                  <span className="shrink-0 text-[.9em] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
