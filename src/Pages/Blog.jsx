import { motion } from "framer-motion";
import Navbar from "../Components/Common/Navbar";
import commonHeroImage from "../assets/CommonHero.png";
import projectOne from "../assets/optimized/projects/slider1.webp";
import projectTwo from "../assets/optimized/projects/slider2.webp";
import projectThree from "../assets/optimized/projects/slider3.webp";
import projectFour from "../assets/optimized/projects/slider4.webp";
import planningImage from "../assets/AboutImage/time1.jpg";

const articles = [
  {
    category: "Industrial Construction",
    date: "July 28, 2026",
    title: "How Smart Planning Reduces Industrial Construction Delays",
    excerpt:
      "A practical look at early-stage coordination, procurement planning and site decisions that keep industrial projects moving.",
    image: projectOne,
    readTime: "6 min read",
  },
  {
    category: "PEB Solutions",
    date: "July 16, 2026",
    title: "Why PEB Buildings Are a Smarter Choice for Growing Industries",
    excerpt:
      "Explore how pre-engineered buildings deliver speed, flexibility and long-term value for modern manufacturing facilities.",
    image: projectTwo,
    readTime: "5 min read",
  },
  {
    category: "Cost Management",
    date: "July 04, 2026",
    title: "The Role of Accurate BOQ in Controlling Project Costs",
    excerpt:
      "Learn how a detailed bill of quantities creates cost clarity, improves tendering and prevents avoidable budget overruns.",
    image: planningImage,
    readTime: "4 min read",
  },
  {
    category: "Infrastructure",
    date: "June 21, 2026",
    title: "Building Industrial Roads for Safety and Heavy-Duty Performance",
    excerpt:
      "From subgrade preparation to drainage, these are the essentials behind reliable roads for demanding industrial operations.",
    image: projectThree,
    readTime: "7 min read",
  },
  {
    category: "Project Planning",
    date: "June 09, 2026",
    title: "From Concept to Completion: A Better Project Roadmap",
    excerpt:
      "Discover the key stages that transform an industrial requirement into a coordinated, efficient and accountable project.",
    image: projectFour,
    readTime: "6 min read",
  },
];

function ArrowIcon() {
  return (
    <svg className="size-3.5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11 11 3M5 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Blog() {
  return (
    <main className="overflow-hidden bg-[#f4f3f0] text-[#0a0b0d]">
      <section className="relative isolate mx-2 mt-2 min-h-[455px] overflow-hidden rounded-[18px] text-white sm:aspect-[2.25/1] sm:min-h-0">
        <motion.img
          className="absolute inset-0 -z-20 size-full object-cover object-center"
          src={commonHeroImage}
          alt="Modern engineered building facade"
          fetchPriority="high"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 -z-10 bg-[#061424]/35" />
        <div className="mx-auto mt-3.5 w-[calc(100%-60px)] max-[760px]:mt-3 max-[760px]:w-[calc(100%-24px)]">
          <Navbar />
        </div>
        <motion.div
          className="absolute inset-x-5 top-[52%] -translate-y-1/2 text-center"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[.18em] text-white/85">
            Ideas · Insights · Engineering
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-none tracking-[-.06em]">
            Building Better. Thinking Forward.
          </h1>
          <p className="mt-5 text-[clamp(12px,.95vw,16px)] text-white/90">
            Home&nbsp; - &nbsp;Blog
          </p>
        </motion.div>
      </section>

      <section className="px-[5.6%] pb-8 pt-[70px] max-[700px]:px-4 max-[700px]:pt-12">
        <motion.div
          className="mx-auto grid max-w-[1260px] grid-cols-[1.12fr_.88fr] overflow-hidden rounded-[20px] bg-[#101313] text-white max-[800px]:grid-cols-1"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative min-h-[430px] overflow-hidden max-[600px]:min-h-[300px]">
            <img className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105" src={projectOne} alt="Industrial construction project" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <span className="absolute left-6 top-6 rounded-full bg-[#ff4b2e] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.08em]">
              Featured Insight
            </span>
          </div>
          <div className="flex flex-col justify-center px-[clamp(28px,4vw,62px)] py-12">
            <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#ff5a3d]">
              Industrial Construction&nbsp; · &nbsp;8 min read
            </p>
            <h2 className="mt-5 font-display text-[clamp(34px,3.4vw,52px)] font-medium leading-[1.02] tracking-[-.055em]">
              The Future of Industrial Infrastructure Is Built on Precision
            </h2>
            <p className="mt-6 max-w-[500px] text-[14px] leading-[1.65] text-white/65">
              Modern industrial facilities demand more than strong structures.
              They need integrated planning, efficient execution and the
              flexibility to support tomorrow&apos;s operations.
            </p>
            <a className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:border-[#ff4b2e] hover:bg-[#ff4b2e]" href="#latest-insights">
              Explore insights <ArrowIcon />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="px-[5.6%] pb-[70px] pt-14 max-[700px]:px-4" id="latest-insights">
        <div className="mx-auto max-w-[1260px]">
          <div className="flex items-end justify-between gap-6 max-[650px]:items-start max-[650px]:flex-col">
            <div>
              <span className="inline-flex rounded-full border border-[#d0cec8] px-4 py-2 text-[11px] font-medium text-[#ff4b2e]">
                Our Journal
              </span>
              <h2 className="mt-5 font-display text-[clamp(38px,4.2vw,62px)] font-medium leading-none tracking-[-.06em]">
                Latest Insights
              </h2>
            </div>
            <p className="max-w-[390px] text-[13px] leading-[1.6] text-[#5b5b5b]">
              Practical knowledge, project thinking and construction insights
              from the SME Engineers &amp; Contractors team.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">
            {articles.map((article, index) => (
              <motion.article
                className={`group grid min-h-[270px] overflow-hidden rounded-[18px] border border-[#dedbd5] bg-[#f8f7f4] ${index === 4 ? "col-span-2 grid-cols-[.7fr_1fr] max-[720px]:col-span-1 max-[720px]:grid-cols-1" : "grid-cols-[.88fr_1fr] max-[520px]:grid-cols-1"}`}
                key={article.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: (index % 2) * 0.08 }}
              >
                <div className="min-h-[230px] overflow-hidden">
                  <img className="size-full object-cover transition-transform duration-700 group-hover:scale-105" src={article.image} alt="" loading="lazy" />
                </div>
                <div className="flex flex-col p-[clamp(22px,2.5vw,36px)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#ff4b2e]">{article.category}</p>
                  <h3 className="mt-3 font-display text-[clamp(22px,2vw,30px)] font-medium leading-[1.08] tracking-[-.045em]">{article.title}</h3>
                  <p className="mt-4 text-[12px] leading-[1.55] text-[#5c5c5c]">{article.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-[10px] font-semibold uppercase tracking-[.06em] text-[#777]">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1 text-[#151515]">{article.readTime} <ArrowIcon /></span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
