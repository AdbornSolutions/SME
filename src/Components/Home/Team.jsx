import { useRef } from "react";
import { preload } from "react-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import leaderImage from "../../assets/LeaderIMG.webp";
import leadershipBackground from "../../assets/LeadershipBg.webp";
import ethanImage from "../../assets/demo2.png";
import kashishImage from "../../assets/demo3.png";

if (window.location.pathname === "/") {
  preload(leadershipBackground, { as: "image", fetchPriority: "high" });
}

const ease = [0.16, 1, 0.3, 1];
const expertise = [
  "Industrial Project Planning",
  "Cost Estimation & Budget Engineering",
  "Quantity Surveying & BOQ Preparation",
  "Project Scheduling & Resource Planning",
  "Value Engineering & Cost Optimization",
  "Contract Management",
  "Quality Assurance & Site Execution",
  "Client Coordination & Technical Support",
];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
};

function MemberCard({ image, name, role }) {
  return (
    <article>
      <img
        className="aspect-[.93/1] w-full object-cover"
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-[clamp(14px,1.25vw,20px)] font-medium leading-none text-[#141416]">
            {name}
          </h3>
          <p className="mt-1 text-[clamp(11px,.85vw,14px)] leading-none text-[#606066]">
            {role}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full border border-[#ded9d3] px-2 py-1 text-[7px] uppercase text-[#151516]">
          ×&nbsp; Twitter
        </span>
      </div>
    </article>
  );
}

function LeadershipProfile() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-40, 55]);
  const profileY = useTransform(scrollYProgress, [0, 1], [34, -24]);

  return (
    <div
      ref={sectionRef}
      className="relative mt-[clamp(34px,5vw,68px)] pb-[clamp(20px,3vw,45px)]"
    >
      <motion.div
        className="relative h-[735px] overflow-hidden rounded-[20px] max-[1100px]:h-[620px] max-[700px]:h-[390px] max-[480px]:h-[310px] max-[480px]:rounded-[15px]"
        initial={false}
      >
        <motion.img
          className="h-[116%] w-full -translate-y-[8%] object-cover"
          style={{ y: reduceMotion ? 0 : backgroundY }}
          src={leadershipBackground}
          alt="Contemporary architectural interior"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          initial={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
      </motion.div>

      <motion.div
        className="relative z-[2] ml-auto -mt-[478px] grid w-[80%] grid-cols-[34.5%_65.5%] overflow-hidden rounded-[20px] shadow-[0_30px_90px_rgba(33,24,18,.16)] max-[1100px]:-mt-[390px] max-[900px]:w-[calc(100%-44px)] max-[760px]:grid-cols-1 max-[700px]:-mt-[220px] max-[480px]:-mt-[175px] max-[480px]:w-[calc(100%-20px)] max-[480px]:rounded-[15px]"
        style={{ y: reduceMotion ? 0 : profileY }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.975 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.12, ease }}
      >
        <div className="flex min-h-[728px] flex-col bg-[#07345f] max-[1100px]:min-h-[650px] max-[900px]:min-h-[620px] max-[760px]:min-h-0">
          <div className="group relative min-h-0 flex-1 overflow-hidden max-[760px]:aspect-square max-[760px]:flex-none">
            <motion.img
              className="size-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.045]"
              src={leaderImage}
              alt="Subhash Mandhan, Founder and Managing Director"
              loading="eager"
              decoding="async"
              initial={reduceMotion ? false : { scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.25, ease }}
            />
          </div>
          <motion.div
            className="px-[clamp(24px,2.8vw,42px)] py-[clamp(26px,3vw,44px)] text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.h3
              className="font-display text-[clamp(1.35rem,1.7vw,1.75rem)] font-medium tracking-[-.035em]"
              variants={reveal}
            >
              Subhash Mandhan
            </motion.h3>
            <motion.p
              className="mt-3 text-[12px] text-white/75"
              variants={reveal}
            >
              Founder &amp; Managing Director
            </motion.p>
            <motion.div className="mt-5 h-px bg-white/15" variants={reveal} />
            <motion.p
              className="mt-5 text-[11px] leading-[1.3] text-white/70"
              variants={reveal}
            >
              10+ Years • Civil Construction • Maharashtra
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="flex min-h-[728px] flex-col bg-[#ff4828] px-[clamp(30px,4vw,68px)] py-[clamp(36px,4vw,66px)] max-[1100px]:min-h-[650px] max-[900px]:min-h-[620px] max-[760px]:min-h-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            visible: {
              transition: { delayChildren: 0.24, staggerChildren: 0.09 },
            },
          }}
        >
          <motion.span
            className="w-fit rounded-full border border-white/35 px-4 py-1.5 text-[11px] font-medium leading-none uppercase"
            variants={reveal}
          >
            Leadership Profile
          </motion.span>
          <motion.h2
            id="leadership-profile-title"
            className="mt-7 font-display text-[clamp(2.2rem,3.15vw,3.4rem)] font-medium leading-none tracking-[-.05em]"
            variants={reveal}
          >
            Mr. Subhash Mandhan
          </motion.h2>
          <motion.div className="mt-8 h-px bg-white/25" variants={reveal} />
          <motion.p
            className="mt-8 text-[clamp(.83rem,.9vw,.98rem)] leading-[1.35] text-white/95"
            variants={reveal}
          >
            Founder &amp; Managing Director of SM Engineers &amp; Contractors,
            leading the organization with a clear vision of delivering
            high-quality industrial, commercial, and infrastructure projects
            through engineering excellence, disciplined execution, and
            client-focused solutions.
          </motion.p>
          <motion.p
            className="mt-6 text-[clamp(.83rem,.9vw,.98rem)] leading-[1.35] text-white/95"
            variants={reveal}
          >
            With over a decade of hands-on experience in civil construction,
            project planning, estimation, and execution management, he has
            successfully led delivery of industrial facilities, factory
            buildings, residential, commercial, roads, utility infrastructure,
            and large-scale site development works.
          </motion.p>
          <motion.h3
            className="mt-8 font-display text-[clamp(1.1rem,1.3vw,1.35rem)] font-medium tracking-[-.025em]"
            variants={reveal}
          >
            Engineering &amp; Project Leadership — Core Expertise
          </motion.h3>
          <motion.ul
            className="mt-6 grid list-none grid-cols-2 gap-x-8 gap-y-4 p-0 max-[1050px]:grid-cols-1 max-[760px]:grid-cols-2 max-[560px]:grid-cols-1"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.055 } },
            }}
          >
            {expertise.map((item) => (
              <motion.li
                className="group flex items-start gap-3 text-[clamp(.7rem,.72vw,.8rem)] leading-[1.25] text-white/95 transition-transform duration-300 hover:translate-x-1"
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease },
                  },
                }}
              >
                <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-[#07345f] text-[10px] transition-[background-color,transform] duration-300 group-hover:rotate-12 group-hover:bg-white group-hover:text-[#ff4828]">
                  ✓
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="bg-[#f4f2ef] px-[clamp(20px,5.5vw,86px)]" id="team">
      <div className="mx-auto max-w-[1400px]">
        <div>
          <span className="inline-flex rounded-full border border-[#d8d3cd] px-4 py-1.5 text-[clamp(11px,.85vw,14px)] text-[#ff4b2d]">
            SME Team
          </span>
          <h2 className="mt-5 max-w-[560px] font-display text-[clamp(2.35rem,4.2vw,4.6rem)] font-medium leading-[.98] tracking-[-.06em] text-[#101113]">
            Through a<br />
            unique combination.
          </h2>
        </div>
        <LeadershipProfile />
        <div
          className="mt-[clamp(28px,4vw,58px)] grid gap-[clamp(16px,2vw,28px)] md:grid-cols-3"
          id="team-members"
        >
          <article className="flex min-h-[clamp(260px,32vw,430px)] flex-col justify-center rounded-[clamp(14px,1.5vw,22px)] bg-[#ff4b2d] p-[clamp(22px,2.4vw,38px)] text-white">
            <h3 className="max-w-[250px] font-display text-[clamp(1.7rem,2.7vw,3.4rem)] font-medium leading-[1.05] tracking-[-.05em]">
              People Are Our Greatest Strength
            </h3>
            <p className="mt-8 max-w-[270px] text-[clamp(11px,.85vw,14px)] leading-[1.15]">
              We believe exceptional projects begin with exceptional people.
              That's why we invest in talent, encourage continuous learning, and
              create opportunities for every team member to grow.
            </p>
          </article>
          <MemberCard
            image={ethanImage}
            name="Ethan Roberts"
            role="Marketing Leader"
          />
          <MemberCard
            image={kashishImage}
            name="Ms. Kashish Mulchandani"
            role="Senior Accountant Officer"
          />
        </div>
      </div>
    </section>
  );
}
