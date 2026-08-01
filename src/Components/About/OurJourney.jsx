import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import timeOne from "../../assets/AboutImage/time1.jpg";
import timeTwo from "../../assets/AboutImage/time2.jpg";
import timeThree from "../../assets/AboutImage/time3.jpg";
import timeFour from "../../assets/AboutImage/time4.jpg";

const ease = [0.16, 1, 0.3, 1];

const milestones = [
  {
    year: "1",
    title: "Project Conception & Initiation",
    points: ["Project Charter", "Project Initiation"],
    image: timeOne,
    imageAlt: "Engineer preparing technical construction drawings",
    imageSide: "left",
    portrait: true,
  },
  {
    year: "2",
    title: "Project Definition & Planning",
    points: [
      "Scope & Budget",
      "Work Breakdown Schedule",
      "Gantt Chart",
      "Communication Plan",
      "Risk Management",
    ],
    image: timeTwo,
    imageAlt: "Site engineer inspecting heavy construction equipment",
    imageSide: "right",
  },
  {
    year: "3",
    title: "Project Launch or Execution",
    points: ["Status & Tracking", "KPIs", "Quality", "Forecasts"],
    image: timeThree,
    imageAlt: "Engineering team reviewing a large construction plan",
    imageSide: "left",
  },
  {
    year: "4",
    title: "Project Performance & Control",
    points: ["Quality Deliverables", "Efforts & Cost Tracking", "Performance"],
    image: timeFour,
    imageAlt: "Industrial project team discussing plans on site",
    imageSide: "right",
  },
  {
    year: "5",
    title: "Project Close",
    points: ["Post Mortem", "Project Punchlist", "Reporting"],
    image: timeOne,
    imageAlt: "Engineer preparing technical construction drawings",
    imageSide: "left",
    portrait: true,
  },
];

function Milestone({ milestone, index, timelineProgress, reduceMotion }) {
  const rowRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const activationPoint = 0.08 + index * 0.21;
  const markerColor = useTransform(
    timelineProgress,
    [activationPoint - 0.045, activationPoint],
    ["#0a3158", "#ff4828"],
  );
  const markerScale = useTransform(
    timelineProgress,
    [activationPoint - 0.05, activationPoint],
    [0.72, 1],
  );
  const connectorScale = useTransform(
    timelineProgress,
    [activationPoint - 0.075, activationPoint],
    [0, 1],
  );
  const imageOnLeft = milestone.imageSide === "left";

  const image = (
    <motion.figure
      className={`group m-0 overflow-hidden rounded-[18px] ${milestone.portrait ? "ml-auto aspect-[.79/1] w-[min(100%,280px)]" : "aspect-[1.48/1] w-full max-w-[390px]"}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, x: imageOnLeft ? -55 : 55, scale: 0.96 }
      }
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.img
        className="h-[116%] w-full -translate-y-[8%] object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.045]"
        style={{ y: reduceMotion ? 0 : imageY }}
        src={milestone.image}
        alt={milestone.imageAlt}
        loading="lazy"
        decoding="async"
      />
    </motion.figure>
  );

  const card = (
    <motion.article
      className="group relative w-full max-w-[380px] rounded-[18px] border border-transparent bg-white px-[clamp(26px,2.5vw,42px)] py-[clamp(26px,2.6vw,40px)] shadow-[0_18px_55px_rgba(26,29,28,.035)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-[#ff4828]/25 hover:shadow-[0_24px_70px_rgba(26,29,28,.09)] max-[760px]:max-w-none max-[760px]:pr-[88px]"
      initial={
        reduceMotion ? false : { opacity: 0, x: imageOnLeft ? 55 : -55, y: 20 }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.85, ease }}
    >
      <motion.span
        className={`absolute top-1/2 grid size-[64px] -translate-y-1/2 place-items-center rounded-full text-[13px] font-medium text-white shadow-[0_10px_30px_rgba(10,49,88,.18)] max-[760px]:top-5 max-[760px]:right-5 max-[760px]:left-auto max-[760px]:size-[54px] max-[760px]:translate-y-0 ${imageOnLeft ? "-left-8" : "-right-8"}`}
        style={{ backgroundColor: markerColor, scale: markerScale }}
      >
        {milestone.year}
      </motion.span>
      <h3 className="font-[Clash_Display] text-[clamp(1.35rem,1.7vw,1.8rem)] leading-[1.05] font-medium tracking-[-.04em]">
        {milestone.title}
      </h3>
      <ul className="mt-5 space-y-1 text-[clamp(.85rem,.92vw,1rem)] leading-[1.32] text-black/65">
        {milestone.points.map((point) => (
          <li key={point}>•&nbsp; {point}</li>
        ))}
      </ul>
    </motion.article>
  );

  return (
    <div
      ref={rowRef}
      className="relative grid min-h-[260px] grid-cols-[minmax(0,1fr)_200px_minmax(0,1fr)] items-center gap-y-6 max-[760px]:min-h-0 max-[760px]:grid-cols-[40px_minmax(0,1fr)] max-[760px]:items-start"
    >
      <div
        className={`col-start-1 row-start-1 flex items-center justify-end max-[760px]:col-start-2 max-[760px]:justify-start ${imageOnLeft ? "max-[760px]:row-start-2" : "max-[760px]:row-start-1"}`}
      >
        {imageOnLeft ? image : card}
      </div>

      <div className="relative col-start-2 row-start-1 flex h-full items-center justify-center max-[760px]:col-start-1 max-[760px]:row-span-2 max-[760px]:row-start-1 max-[760px]:min-h-full max-[760px]:items-start max-[760px]:pt-8">
        <motion.span
          className="relative z-[2] size-[10px] rounded-full border-2 border-[#F2F1EE] shadow-[0_0_0_1px_#0a3158]"
          style={{ backgroundColor: markerColor, scale: markerScale }}
        />
        <motion.span
          className={`absolute top-1/2 w-[100px] border-t border-dashed max-[760px]:hidden ${imageOnLeft ? "right-0 origin-left" : "left-0 origin-right"}`}
          style={{ scaleX: connectorScale, borderColor: markerColor }}
          aria-hidden="true"
        />
      </div>

      <div
        className={`col-start-3 row-start-1 flex items-center justify-start max-[760px]:col-start-2 ${imageOnLeft ? "max-[760px]:row-start-1" : "max-[760px]:row-start-2"}`}
      >
        {imageOnLeft ? card : image}
      </div>
    </div>
  );
}

export default function OurJourney() {
  const timelineRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 68%", "end 62%"],
  });

  return (
    <section
      className="overflow-hidden bg-[#F2F1EE] px-[clamp(20px,5vw,80px)] py-[clamp(75px,8vw,130px)] text-black"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto flex h-[2350px] w-full max-w-[1103px] flex-col gap-10 max-[900px]:h-auto">
        <motion.div
          className="mx-auto flex max-w-[760px] shrink-0 flex-col items-center text-center"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease }}
        >
          <span className="inline-flex rounded-full border border-black/20 px-4 py-1.5 text-[12px] leading-none font-medium text-[#ff4828]">
            Our Journey
          </span>
          <h2
            id="journey-heading"
            className="mt-7 font-[Clash_Display] text-[clamp(2.8rem,4.25vw,4.9rem)] leading-[1.02] font-medium tracking-[-.055em]"
          >
            Smart <span className="text-[#ff4828]">Planning.</span> Seamless{" "}
            <span className="text-[#ff4828]">Execution</span>
          </h2>
          <p className="mt-3 text-[clamp(.75rem,.9vw,.95rem)] leading-[1.25] text-black/70">
            Every project begins with smart planning rooted in technical insight
            and real-world requirements.
            <br className="max-[600px]:hidden" /> From initial consultation to
            final execution, our process ensures clarity, coordination, and
            timely delivery at every stage.
          </p>
        </motion.div>

        <div
          ref={timelineRef}
          className="relative min-h-0 w-full flex-1 max-[900px]:min-h-0"
        >
          <span
            className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-black/20 max-[760px]:left-5 max-[760px]:translate-x-0"
            aria-hidden="true"
          />
          <motion.span
            className="absolute top-0 bottom-0 left-1/2 w-[2px] origin-top -translate-x-1/2 bg-[#ff4828] max-[760px]:left-5 max-[760px]:translate-x-0"
            style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            aria-hidden="true"
          />
          <span
            className="absolute top-0 left-1/2 z-[3] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4828] max-[760px]:left-5"
            aria-hidden="true"
          />

          <div className="grid h-full grid-rows-5 gap-10 max-[900px]:h-auto max-[900px]:grid-rows-none max-[760px]:gap-20">
            {milestones.map((milestone, index) => (
              <Milestone
                key={milestone.year}
                milestone={milestone}
                index={index}
                timelineProgress={scrollYProgress}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <motion.span
            className="absolute bottom-0 left-1/2 z-[3] grid size-6 -translate-x-1/2 translate-y-1/2 place-items-center bg-[#F2F1EE] text-lg leading-none text-[#ff4828] max-[760px]:left-5"
            animate={reduceMotion ? undefined : { y: ["50%", "70%", "50%"] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            {"\u2304"}
          </motion.span>
        </div>
      </div>
    </section>
  );
}
