import { motion } from "framer-motion";
import engineerOne from "../../assets/demo2.png";
import engineerTwo from "../../assets/demo3.png";
import engineerThree from "../../assets/AboutImage/LeaderIMG.png";
import engineerFour from "../../assets/LeaderIMG.webp";

const team = [
  { src: engineerOne, position: "50% 24%" },
  { src: engineerTwo, position: "50% 22%" },
  { src: engineerThree, position: "50% 22%" },
  { src: engineerFour, position: "48% 28%" },
];

export default function Industry() {
  return (
    <section className="bg-[#f4f3f0] px-[5.6%] py-8 max-[700px]:px-4 max-[700px]:py-5">
      <motion.div
        className="mx-auto grid max-w-[1260px] grid-cols-[minmax(250px,32.3%)_1fr] gap-3.5 max-[700px]:grid-cols-1"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <article className="flex min-h-[217px] flex-col justify-center rounded-[14px] bg-[#ff4328] px-[30px] py-7 text-white max-[700px]:min-h-[210px] max-[700px]:px-6">
          <div className="mb-4 flex pl-px" aria-label="Our team members">
            {team.map(({ src, position }) => (
              <img
                className="-ml-[7px] size-10 rounded-full border border-white/70 bg-[#d9d9d9] object-cover first:ml-0"
                src={src}
                alt=""
                style={{ objectPosition: position }}
                loading="lazy"
                key={src}
              />
            ))}
          </div>
          <p className="max-w-[250px] text-[14px] font-medium leading-[1.18] tracking-[-.02em]">
            Join a workplace where collaboration, integrity, and innovation come
            together to create infrastructure that shapes industries and careers.
          </p>
        </article>

        <article className="relative flex min-h-[217px] items-center overflow-hidden rounded-[14px] bg-[#101313] px-[43px] py-8 text-white max-[700px]:min-h-[230px] max-[700px]:px-6">
          <div className="absolute -bottom-20 left-12 h-28 w-[45%] rotate-[-8deg] rounded-full bg-[#25b530]/70 blur-[42px]" />
          <div className="absolute -right-10 -top-14 h-28 w-[38%] rotate-[-58deg] rounded-full bg-[#d5aa21]/60 blur-[38px]" />
          <div className="absolute -bottom-20 right-0 h-32 w-[44%] rounded-full bg-[#f1321f]/75 blur-[46px]" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10">
            <h2 className="font-display text-[22px] font-medium leading-tight tracking-[-.035em]">
              Grow With Industry Experts
            </h2>
            <p className="mt-5 max-w-[760px] text-[13px] font-medium leading-[1.7] tracking-[-.025em] text-white/95">
              Work Alongside Experienced Engineers And Project Leaders On
              Large-Scale Industrial Projects
              <span className="block">
                That Challenge Your Skills And Accelerate Your Professional Growth.
              </span>
            </p>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
