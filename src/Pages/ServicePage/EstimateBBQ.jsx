import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import heroImage from "../../assets/Service/SubPagesHEro.png";
import contentImage from "../../assets/optimized/services/1.webp";
import sideBackground from "../../assets/Service/sidebottomBG.png";
import sideOverlay from "../../assets/Service/SideBottomOverLay.png";
import footerLogo from "../../assets/Footer-logo.png";

const ease = [0.16, 1, 0.3, 1];

const services = [
  "Estimation & BOQ",
  "Land Development",
  "Industrial Construction",
  "Factory Buildings",
  "Industrial Roads",
  "Master Planning",
];

const serviceRoutes = [
  "/services/estimation-and-boq",
  "/services/land-development",
  "/services/industrial-construction",
  "/services/factory-buildings",
  "/services/industrial-roads",
  "/services/master-planning",
];

const benefits = [
  {
    icon: "▤",
    title: "Transparent BOQs",
    description:
      "Our Bills of Quantities are comprehensive, easy to understand, and provide complete cost visibility.",
  },
  {
    icon: "♟",
    title: "Industry Expertise",
    description:
      "Extensive experience in industrial manufacturing plants, factory buildings, warehouses, and infrastructure projects.",
  },
];

const faqs = [
  {
    question: "What is a Bill of Quantities (BOQ)?",
    answer:
      "A BOQ is a detailed document listing all materials, quantities, labor, and construction activities required for a project. It forms the foundation for accurate budgeting, tendering, and cost control.",
  },
  {
    question: "Why is cost estimation important before construction?",
    answer:
      "Accurate estimation establishes a realistic budget, identifies financial risks early, and helps project teams make informed decisions before work begins.",
  },
  {
    question: "Do you prepare BOQs for new and existing projects?",
    answer:
      "Yes. We prepare detailed BOQs for new developments, ongoing construction, renovations, and existing facilities requiring cost validation or expansion planning.",
  },
  {
    question: "Can you help optimize project costs?",
    answer:
      "Yes. Our value-engineering approach compares materials, methods, and procurement options to reduce unnecessary costs without compromising safety or quality.",
  },
];

const paragraphs = [
  "Construction projects often face budget overruns due to inaccurate estimates, incomplete scope definitions, and unforeseen costs. Our Cost Estimation & BOQ services are designed to eliminate these uncertainties by delivering detailed engineering calculations, realistic budgets, and comprehensive quantity assessments before execution begins.",
  "Whether you're developing a manufacturing facility, factory building, warehouse, or industrial infrastructure, our experienced engineering team provides reliable estimates that support informed decision-making and efficient project planning.",
];

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease },
  },
};

function ServiceHero({ reduceMotion, title }) {
  return (
    <section
      className="relative isolate m-[10px] min-h-[calc(100svh-20px)] overflow-hidden rounded-[20px] bg-[#201d1a] text-white max-[900px]:m-2 max-[900px]:min-h-[680px] max-[900px]:rounded-[14px]"
      aria-labelledby="estimate-page-title"
    >
      <motion.img
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center max-[700px]:object-[56%_center]"
        src={heroImage}
        alt="Premium interior prepared for construction cost estimation"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease }}
        fetchPriority="high"
      />
      <motion.div
        className="absolute inset-0 -z-20 bg-black/50"
        initial={reduceMotion ? false : { opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <Navbar />

      <motion.div
        className="absolute right-[4.6%] bottom-[5.8%] left-[4.6%] max-[600px]:right-5 max-[600px]:left-5"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { delayChildren: 0.45, staggerChildren: 0.12 },
          },
        }}
      >
        <motion.nav
          className="mb-5 flex flex-wrap items-center gap-2 text-[13px] text-white/90"
          aria-label="Breadcrumb"
          variants={reveal}
        >
          <Link className="transition-colors hover:text-[#ff4828]" to="/">
            Home
          </Link>
          <span className="h-px w-3 bg-white/70" />
          <Link
            className="transition-colors hover:text-[#ff4828]"
            to="/services"
          >
            Services
          </Link>
          <span className="h-px w-3 bg-white/70" />
          <span aria-current="page">{title}</span>
        </motion.nav>
        <div className="overflow-hidden pb-1">
          <motion.h1
            id="estimate-page-title"
            className="font-[Clash_Display] text-[clamp(3.2rem,5vw,5.8rem)] leading-[.94] font-medium tracking-[-.055em]"
            variants={{
              hidden: { opacity: 0, y: "105%" },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease },
              },
            }}
          >
            {title}
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceMenu({ activeIndex }) {
  return (
    <nav
      className="rounded-[18px] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,.035)]"
      aria-label="Service pages"
    >
      <h2 className="mb-6 font-[Clash_Display] text-xl font-semibold">
        Services
      </h2>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={service}>
            {index === activeIndex ? (
              <span
                className="flex min-h-14 items-center justify-between rounded-full bg-black px-6 text-sm font-medium text-white"
                aria-current="page"
              >
                {service} <span aria-hidden="true">›</span>
              </span>
            ) : (
              <Link
                className="flex min-h-14 items-center justify-between rounded-full border border-black/10 px-6 text-sm font-medium transition-[background-color,color,transform] duration-300 hover:translate-x-1 hover:bg-[#ff4828] hover:text-white"
                to={serviceRoutes[index]}
              >
                {service} <span aria-hidden="true">›</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactCard() {
  return (
    <aside className="relative isolate mt-5 h-[510px] overflow-hidden rounded-[18px] border border-[#3a94d0] bg-[#102b48] text-center text-white">
      <img
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[center_42%] opacity-55"
        src={sideBackground}
        alt=""
        loading="lazy"
      />
      <div className="absolute inset-0 -z-20 bg-[#102b48]/55" />

      <img
        className="absolute top-7 left-1/2 z-10 w-[105px] -translate-x-1/2 object-contain"
        src={footerLogo}
        alt="SM Engineers and Contractors"
        loading="lazy"
      />

      <p className="relative z-10 mx-auto mt-[118px] max-w-[270px] font-[Clash_Display] text-[21px] leading-[1.1] font-medium">
        Let&apos;s Start Work Together
      </p>
      <a
        className="relative z-10 mt-1 block font-[Clash_Display] text-[21px] font-medium"
        href="tel:+919970615385"
      >
        +91 99706 15385
      </a>

      <div className="absolute top-[202px] right-3 bottom-[63px] left-3 z-0 overflow-hidden rounded-[12px]">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
          src={sideOverlay}
          alt="Commercial building project"
          loading="lazy"
        />
      </div>

      <Link
        className="absolute right-3 bottom-3 left-3 z-20 rounded-md bg-[#ff4828] px-5 py-[14px] text-sm font-semibold transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-xl"
        to="/contact"
      >
        Contact us today
      </Link>
    </aside>
  );
}

function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-12" aria-labelledby="faq-title">
      <h2
        id="faq-title"
        className="font-[Clash_Display] text-[clamp(2.5rem,4vw,4rem)] leading-none font-medium tracking-[-.05em]"
      >
        Frequently Asked Questions!
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((faq, index) => {
          const open = openIndex === index;
          return (
            <motion.article
              key={faq.question}
              className="overflow-hidden rounded-[14px] bg-white shadow-[0_4px_20px_rgba(0,0,0,.025)]"
              layout
            >
              <button
                className="flex min-h-16 w-full cursor-pointer items-center gap-4 border-0 bg-transparent px-6 text-left"
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className="font-semibold tabular-nums">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1 font-[Clash_Display] text-base font-medium">
                  {faq.question}
                </span>
                <span
                  className={`grid size-7 place-items-center rounded-full border text-lg transition-[background-color,color,transform] ${open ? "rotate-180 border-[#ff4828] bg-[#ff4828] text-white" : "border-black/50"}`}
                  aria-hidden="true"
                >
                  {open ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <p className="max-w-[760px] px-6 pb-7 pl-[76px] text-sm leading-relaxed text-black/65 max-[600px]:pl-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function ServiceDetailPage({
  title = "Estimation & BOQ",
  heading = "Accurate Estimation. Smarter Decisions. Better Project Outcomes.",
  image = contentImage,
  imageAlt = "Cost estimation documents, construction plans and calculator",
  body = paragraphs,
  benefitItems = benefits,
  faqItems = faqs,
  activeIndex = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      className="overflow-clip bg-[#F2F1EE] text-black"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ServiceHero reduceMotion={reduceMotion} title={title} />

      <motion.section
        className="px-[clamp(20px,5vw,80px)] py-[clamp(70px,8vw,125px)]"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.06 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-[330px_minmax(0,1fr)] items-start gap-6 max-[950px]:grid-cols-1">
          <motion.div
            className="sticky top-6 max-[950px]:static"
            variants={reveal}
          >
            <ServiceMenu activeIndex={activeIndex} />
            <ContactCard />
          </motion.div>

          <motion.article variants={reveal}>
            <h2 className="font-[Clash_Display] text-[clamp(2.7rem,4.2vw,4.6rem)] leading-[1.02] font-medium tracking-[-.055em]">
              {heading}
            </h2>
            <div className="group mt-8 h-[440px] overflow-hidden rounded-[18px] max-[600px]:h-[300px]">
              <img
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.045]"
                src={image}
                alt={imageAlt}
                loading="lazy"
              />
            </div>

            <div className="mt-8 space-y-6 text-[15px] leading-[1.45] text-black/70">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <section className="mt-12" aria-labelledby="why-sme-title">
              <h2
                id="why-sme-title"
                className="font-[Clash_Display] text-[clamp(2.6rem,4vw,4rem)] leading-none font-medium tracking-[-.05em]"
              >
                Why Choose SME
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-5 max-[650px]:grid-cols-1">
                {benefitItems.map((benefit) => (
                  <motion.article
                    key={benefit.title}
                    className="group flex gap-5 border border-black/15 bg-transparent p-6 transition-[background-color,border-color,transform] hover:-translate-y-1 hover:border-[#ff4828]/40 hover:bg-white"
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#ff4828] text-xl text-white">
                      {benefit.icon}
                    </span>
                    <div>
                      <h3 className="font-[Clash_Display] text-lg font-medium">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.35] text-black/65">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            <FAQ items={faqItems} />
          </motion.article>
        </div>
      </motion.section>
    </motion.main>
  );
}

export default function EstimateBBQ() {
  return <ServiceDetailPage />;
}
