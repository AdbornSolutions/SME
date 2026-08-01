import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import sliderOne from "../../assets/optimized/projects/slider1.webp";
import sliderTwo from "../../assets/optimized/projects/slider2.webp";
import sliderThree from "../../assets/optimized/projects/slider3.webp";
import sliderFour from "../../assets/optimized/projects/slider4.webp";
import noiseTexture from "../../assets/optimized/projects/noisyimage.webp";

const projects = [
  {
    title: "Hi-Tech SAW Manufacturing Plant",
    image: sliderOne,
    year: "2025",
    type: "Industrial Manufacturing Facility",
    description:
      "A flagship industrial manufacturing facility developed with engineering precision and large-scale execution capabilities. The project included a 2,50,000+ sq. ft. production shed, complete site development, internal roads, utilities, and production infrastructure, ensuring operational readiness with uncompromising quality.",
    services: [
      "Industrial Construction",
      "Factory Shed Construction",
      "Site Development",
      "Internal Roads & Utilities",
      "Project Planning",
      "Quality Assurance",
    ],
  },
  {
    title: "Viera Seamless Manufacturing Plant",
    image: sliderTwo,
    year: "2025",
    type: "Steel Manufacturing Plant",
    description:
      "A modern seamless steel pipe manufacturing facility designed and executed with advanced industrial infrastructure. The project included manufacturing bays, internal roads, utility networks, and comprehensive site development to support efficient industrial operations.",
    services: [
      "Industrial Building Construction",
      "Infrastructure Development",
      "Utility Planning",
      "RCC & PEB Construction",
      "Quality Control",
    ],
  },
  {
    title: "Pharmaceutical Manufacturing Facility",
    image: sliderThree,
    year: "2024",
    type: "Pharmaceutical Plant",
    description:
      "A precision-built pharmaceutical manufacturing facility developed for controlled production environments, efficient workflows, and demanding compliance standards. The project combines durable civil infrastructure with reliable industrial planning and execution.",
    services: [
      "RCC Construction",
      "PEB Structure",
      "Civil Infrastructure",
      "Project Management",
      "Quality Assurance",
      "Process Coordination",
    ],
  },
  {
    title: "Industrial Land Development",
    image: sliderFour,
    year: "2024",
    type: "Infrastructure Development",
    description:
      "A comprehensive industrial land development project involving earthworks, grading, internal RCC roads, drainage systems, and utility infrastructure, creating a strong foundation for future industrial expansion.",
    services: [
      "Earthwork",
      "Internal RCC Roads",
      "Drainage Systems",
      "Utility Infrastructure",
      "Site Development",
      "Land Preparation",
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-42, 42]);
  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [46, 0, -46]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.48, 1],
    [0.94, 1, 0.97],
  );

  return (
    <motion.article
      ref={cardRef}
      className="group sticky top-0 isolate h-[100svh] min-h-[680px] overflow-hidden rounded-[14px] border border-white/80 bg-[#101313] text-white max-[900px]:relative max-[900px]:top-auto max-[900px]:h-auto max-[900px]:min-h-[920px] max-[900px]:rounded-[12px] max-[560px]:min-h-[980px]"
      style={{ zIndex: index + 1 }}
    >
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <motion.img
          className="absolute -inset-y-[9%] left-0 h-[118%] w-full object-cover transition-[filter,transform] duration-1000 group-hover:saturate-[1.08]"
          src={project.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          style={{ y: reduceMotion ? 0 : backgroundY }}
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,5,6,.74)_0%,rgba(3,5,6,.54)_36%,rgba(3,5,6,.43)_63%,rgba(3,5,6,.7)_100%),linear-gradient(0deg,rgba(2,3,4,.48),rgba(2,3,4,.16))]" />
      <img
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-70 mix-blend-soft-light"
        src={noiseTexture}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="mx-auto grid h-full w-full grid-cols-[248px_456px_248px] items-center justify-center gap-x-[80px] px-6 py-[clamp(38px,6vh,72px)] max-[1200px]:grid-cols-[220px_380px_220px] max-[1200px]:gap-x-10 max-[1000px]:grid-cols-[190px_330px_190px] max-[1000px]:gap-x-7 max-[900px]:grid-cols-1 max-[900px]:content-start max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:py-10 max-[560px]:px-4">
        <motion.div
          className="order-1 flex h-[570px] w-[248px] flex-col justify-between max-[1200px]:h-[520px] max-[1200px]:w-[220px] max-[1000px]:h-[480px] max-[1000px]:w-[190px] max-[900px]:order-2 max-[900px]:h-auto max-[900px]:w-full max-[900px]:min-h-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            variants={reveal}
            className="w-full text-justify text-[clamp(.72rem,.82vw,.92rem)] leading-[1.24] text-white/85 max-[900px]:max-w-[680px] max-[900px]:text-left max-[900px]:text-sm"
          >
            {project.description}
          </motion.p>

          <motion.div variants={reveal} className="max-[900px]:mt-7">
            <p className="mb-4 text-[11px] text-white/70 tabular-nums">
              {String(index + 1).padStart(2, "0")}/
              {String(projects.length).padStart(2, "0")}
            </p>
            <h3 className="max-w-[290px] font-[Clash_Display] text-[clamp(1.3rem,1.4vw,1.65rem)] leading-[1.08] font-medium tracking-[-.03em] max-[900px]:text-[1.65rem]">
              {project.title}
            </h3>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-2 mx-auto h-[570px] w-[456px] overflow-hidden rounded-[20px] border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,.28)] max-[1200px]:h-[520px] max-[1200px]:w-[380px] max-[1000px]:h-[480px] max-[1000px]:w-[330px] max-[900px]:order-1 max-[900px]:h-[clamp(360px,67vw,560px)] max-[900px]:w-full max-[900px]:max-w-[520px]"
          style={{
            y: reduceMotion ? 0 : imageY,
            scale: reduceMotion ? 1 : imageScale,
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.025 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.045]"
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10 ring-inset" />
        </motion.div>

        <motion.div
          className="order-3 flex h-[550px] w-[248px] flex-col justify-between max-[1200px]:h-[500px] max-[1200px]:w-[220px] max-[1000px]:h-[460px] max-[1000px]:w-[190px] max-[900px]:h-auto max-[900px]:w-full max-[900px]:min-h-0 max-[900px]:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            visible: {
              transition: { delayChildren: 0.12, staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={reveal}>
            <p className="text-[10px] text-white/55">Year</p>
            <p className="mt-3 font-[Clash_Display] text-[clamp(1.45rem,1.7vw,2rem)] font-medium">
              {project.year}
            </p>
          </motion.div>

          <motion.div variants={reveal}>
            <p className="text-[10px] text-white/55">Project Type</p>
            <p className="mt-3 max-w-[250px] text-[clamp(.85rem,.92vw,1rem)] leading-[1.2] font-medium text-white/90">
              {project.type}
            </p>
          </motion.div>

          <motion.div variants={reveal}>
            <p className="mb-3 text-[10px] text-white/55">Services</p>
            <ul className="m-0 flex list-none flex-col gap-1 p-0 text-[clamp(.72rem,.8vw,.9rem)] leading-[1.2] text-white/90">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="relative bg-[#F2F1EE] px-[15px] pb-[1px] max-[900px]:px-2">
      <div className="flex h-[312px] items-start justify-center pt-[68px] max-[900px]:h-[280px] max-[900px]:pt-14 max-[560px]:h-[245px] max-[560px]:pt-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex rounded-full border border-black/20 px-5 py-2 text-[14px] leading-none font-medium text-[#ff4828] max-[560px]:px-4 max-[560px]:py-1.5 max-[560px]:text-xs">
            Featured Projects
          </span>
          <h2 className="mt-7 font-[Clash_Display] text-[48px] leading-[1.28] font-medium tracking-[-.045em] text-black max-[900px]:text-[clamp(2.4rem,6vw,3rem)] max-[560px]:mt-5 max-[560px]:text-[clamp(2rem,9vw,2.6rem)] max-[560px]:leading-[1.15]">
            Engineering Excellence in
            <br />
            Every Project
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
