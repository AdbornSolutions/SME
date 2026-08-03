import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../Components/Common/Navbar";
import heroImage from "../assets/CommonHero.png";
import contactBackground from "../assets/ContactBg.png";

const ease = [0.16, 1, 0.3, 1];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

function ContactHero({ reduceMotion }) {
  return (
    <section className="relative isolate mx-2 mt-2 min-h-[455px] overflow-hidden rounded-[18px] text-white sm:aspect-[2.25/1] sm:min-h-0">
      <motion.img
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        src={heroImage}
        alt="Modern engineered building facade"
        fetchPriority="high"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.25, ease }}
      />
      <div className="absolute inset-0 -z-10 bg-[#061424]/[.24]" />
      <div className="mx-auto mt-3.5 w-[calc(100%-60px)] max-[760px]:mt-3 max-[760px]:w-[calc(100%-24px)]">
        <Navbar />
      </div>
      <motion.div
        className="absolute inset-x-5 top-[52%] -translate-y-1/2 text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.75, ease }}
      >
        <h1 className="font-display text-[clamp(2rem,4.1vw,4.25rem)] font-medium leading-none tracking-[-.055em]">
          Strong. Reliable. Engineered for Excellence.
        </h1>
        <p className="mt-5 text-[clamp(12px,.95vw,16px)] text-white/90">
          Home&nbsp; - &nbsp;Contact us
        </p>
      </motion.div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg className="size-5 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 17-8-7.5 18-2-7.5L3 11Z" strokeLinejoin="round" />
      <path d="m10.5 13.5 5-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5 10 8 8.2 9.8c1.2 2.6 3.3 4.7 5.9 5.9L16 14l4.5 3c.4.3.6.8.4 1.3-.7 1.8-2.3 2.8-4.2 2.7C9.3 20.3 3.7 14.7 3 7.3c-.1-1.9.9-3.5 2.7-4.2.5-.2 1 0 1.3.4Z" />
    </svg>
  );
}

function ContactDetails() {
  return (
    <motion.div className="mx-auto mt-[29px] grid min-h-[70px] w-full max-w-[646px] grid-cols-2 border border-[#d5d2cc] px-[21px] py-[14px] max-[650px]:grid-cols-1 max-[650px]:gap-4" variants={reveal}>
      <div className="flex items-center gap-[14px] text-left">
        <span className="grid size-[30px] shrink-0 place-items-center rounded-full bg-[#ff4b2e] text-white"><SendIcon /></span>
        <div className="font-display text-[14px] font-medium leading-[1.5] tracking-[-.025em]">
          <a className="block hover:text-[#ff4b2e]" href="mailto:smecontractors1@gmail.com">smecontractors1@gmail.com</a>
          <a className="block hover:text-[#ff4b2e]" href="mailto:subhash.mandhan@gmail.com">subhash.mandhan@gmail.com</a>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[14px] text-left max-[650px]:justify-start">
        <span className="grid size-[30px] shrink-0 place-items-center rounded-full bg-[#ff4b2e] text-white"><PhoneIcon /></span>
        <div className="font-display text-[14px] font-medium leading-[1.5] tracking-[-.025em]">
          <a className="block hover:text-[#ff4b2e]" href="tel:+919970615385">+91 99706 15385</a>
          <a className="block hover:text-[#ff4b2e]" href="tel:+919226301104">+91 92263 01104</a>
        </div>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry - ${form.get("service") || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nCompany: ${form.get("company")}\nPhone: ${form.get("phone")}\nService: ${form.get("service")}\n\nProject details:\n${form.get("details")}`,
    );
    window.location.href = `mailto:smecontractors1@gmail.com?subject=${subject}&body=${body}`;
  };
  const fieldClass = "mt-[9px] h-[42px] w-full border-0 bg-white/75 px-[18px] text-[13px] outline-none placeholder:text-[#9c9c9c] focus:ring-1 focus:ring-[#ff4b2e]";

  return (
    <motion.form
      className="relative isolate mx-auto mt-[28px] min-h-[712px] w-full max-w-[654px] overflow-hidden px-[88px] pb-[55px] pt-[102px] text-left max-[700px]:min-h-0 max-[700px]:px-5 max-[700px]:py-12"
      onSubmit={handleSubmit}
      variants={reveal}
    >
      <img className="absolute inset-0 -z-20 size-full object-cover object-center" src={contactBackground} alt="" loading="lazy" />
      <div className="grid grid-cols-2 gap-x-[18px] gap-y-[19px] max-[600px]:grid-cols-1">
        <label className="text-[12px] font-medium">Full Name*<input className={fieldClass} type="text" name="name" placeholder="John Doe" autoComplete="name" required /></label>
        <label className="text-[12px] font-medium">Email Address*<input className={fieldClass} type="email" name="email" placeholder="aleric@mail.com" autoComplete="email" required /></label>
        <label className="text-[12px] font-medium">Company<input className={fieldClass} type="text" name="company" placeholder="Ex. Microsoft" autoComplete="organization" /></label>
        <label className="text-[12px] font-medium">Phone <span className="text-black/40">( Optional)</span><input className={fieldClass} type="tel" name="phone" placeholder="+92 854 453 ***" autoComplete="tel" /></label>
      </div>
      <label className="mt-[20px] block text-[12px] font-medium">
        Choose Needed Service
        <select className={`${fieldClass} appearance-none text-[#777]`} name="service" defaultValue="">
          <option value="" disabled>Choose a service</option>
          <option>Cost Estimation &amp; BOQ</option>
          <option>Industrial Construction</option>
          <option>Project Planning &amp; Scheduling</option>
          <option>Infrastructure Development</option>
          <option>Quality Assurance</option>
        </select>
      </label>
      <label className="mt-[20px] block text-[12px] font-medium">
        Project Details
        <textarea className="mt-[9px] min-h-[132px] w-full resize-y border-0 bg-white/80 px-[18px] py-[15px] text-[13px] outline-none placeholder:text-[#9c9c9c] focus:ring-1 focus:ring-[#ff4b2e]" name="details" placeholder="Write to brief about project" required />
      </label>
      <label className="mt-[13px] flex cursor-pointer items-start gap-[7px] text-[10px] font-semibold leading-[1.35]">
        <input className="mt-px size-3 accent-[#ff4b2e]" type="checkbox" required />
        <span>I agree to receive follow-up emails about my request and related services.</span>
      </label>
      <motion.button className="mt-[24px] inline-flex h-[43px] items-center gap-[9px] rounded-full border-0 bg-[#ff4b2e] px-[24px] text-[10px] font-semibold text-white" type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        SUBMIT INQUIRY
        <svg className="size-3 fill-none stroke-current" viewBox="0 0 12 12" aria-hidden="true"><path d="m3 9 6-6M4 3h5v5" /></svg>
      </motion.button>
    </motion.form>
  );
}

export default function Contactus() {
  const reduceMotion = useReducedMotion();
  return (
    <main className="overflow-clip bg-[#f4f3f0]">
      <ContactHero reduceMotion={reduceMotion} />
      <motion.section
        className="px-4 pb-[52px] pt-[50px] text-center text-black"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.04 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.span className="inline-flex h-[26px] items-center rounded-full border border-[#d4d1cb] px-[14px] text-[11px] font-medium text-[#ff4b2e]" variants={reveal}>Contact Us</motion.span>
        <motion.h2 className="mx-auto mt-[19px] max-w-[550px] font-display text-[clamp(34px,4vw,50px)] font-medium leading-[1.08] tracking-[-.055em]" variants={reveal}>
          Let&apos;s Build Your Next
          <span className="block">Industrial Project Together</span>
        </motion.h2>
        <motion.p className="mx-auto mt-[21px] max-w-[530px] text-[12px] leading-[1.18] text-[#555]" variants={reveal}>
          Whether you&apos;re planning a new manufacturing facility, expanding an existing plant, or
          <span className="block">looking for accurate project estimation, our engineering team is ready to help. Connect with</span>
          <span className="block">us to discuss your project requirements and receive expert guidance from concept to</span>
          completion.
        </motion.p>
        <ContactDetails />
        <ContactForm />
      </motion.section>
    </main>
  );
}
