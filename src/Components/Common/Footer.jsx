import { useState } from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/FooterLogo.png";
import footerBackground from "../../assets/footerbg.png";
import { submitLead } from "../../lib/submitLead";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Blogs", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Career", to: "/career" },
];
const serviceLinks = [
  { label: "Estimation & BOQ", to: "/services/estimation-and-boq" },
  { label: "Land Development", to: "/services/land-development" },
  { label: "Industrial Construction", to: "/services/industrial-construction" },
  { label: "Factory Buildings", to: "/services/factory-buildings" },
  { label: "Industrial Roads", to: "/services/industrial-roads" },
  { label: "Master Planning", to: "/services/master-planning" },
];

function LinkList({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-[clamp(1.25rem,1.8vw,2rem)] font-medium tracking-[-.045em] text-white">
        {title}
      </h3>
      <ul className="mt-6 space-y-2.5">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              className="text-[clamp(11px,.9vw,15px)] uppercase leading-none text-white/55 transition-colors hover:text-[#ff4b2d]"
              to={to}
            >
              <span aria-hidden="true">•&nbsp;</span> {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ label, children, className }) {
  return (
    <span
      className={`grid size-7 place-items-center rounded-full text-[15px] font-bold text-white ${className}`}
      aria-label={label}
    >
      {children}
    </span>
  );
}

export default function Footer() {
  const [submitState, setSubmitState] = useState("idle");

  const subscribe = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const email = new FormData(formElement).get("subscriberEmail");
    setSubmitState("loading");

    try {
      await submitLead("newsletter", { email });
      formElement.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <footer className="relative mx-2 mt-10 overflow-hidden rounded-t-[20px] bg-[#111213] px-[clamp(22px,4.5vw,68px)] pb-7 pt-[clamp(46px,6vw,78px)] text-white">
      <img
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover object-bottom opacity-[.16]"
        src={footerBackground}
        alt=""
      />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_.6fr_1.25fr_.9fr] lg:gap-10">
          <div>
            <Link to="/" aria-label="SME Engineers & Contractors home">
              <img
                className="h-auto w-[clamp(90px,9vw,145px)]"
                src={footerLogo}
                alt="SME Engineers & Contractors"
              />
            </Link>
            <p className="mt-10 max-w-[330px] text-[clamp(15px,1.25vw,21px)] leading-[1.27] text-white">
              Our goal is to exceed expectations and create spaces that are both
              beautiful and practical.
            </p>
            <form
              className="mt-8 flex max-w-[390px]"
              onSubmit={subscribe}
            >
              <label className="flex min-w-0 flex-1 items-center gap-3 bg-[#303131] px-5 text-white/65">
                <svg
                  className="size-5 shrink-0 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <input
                  className="min-w-0 flex-1 bg-transparent py-5 text-[13px] outline-none placeholder:text-white/60"
                  type="email"
                  name="subscriberEmail"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </label>
              <button
                className="bg-[#ff4b2d] px-5 text-[13px] font-medium transition-colors hover:bg-[#e94125]"
                type="submit"
                disabled={submitState === "loading"}
              >
                {submitState === "loading" ? "SAVING..." : "SUBSCRIBE"}
              </button>
            </form>
            <p className={`mt-2 text-[12px] ${submitState === "error" ? "text-red-300" : "text-white/65"}`} role="status">
              {submitState === "success" && "Thank you. You are subscribed."}
              {submitState === "error" && "Could not subscribe. Please try again."}
            </p>
            <p className="mt-8 text-[clamp(13px,1vw,16px)] font-medium text-white/25">
              Follow Us
            </p>
            <div className="mt-3 flex gap-3">
              <SocialIcon label="Facebook" className="bg-[#1877f2]">
                f
              </SocialIcon>
              <SocialIcon
                label="Instagram"
                className="bg-gradient-to-br from-[#fdc468] via-[#df2e7d] to-[#4c5fd7]"
              >
                ◎
              </SocialIcon>
              <SocialIcon label="LinkedIn" className="bg-[#0a66c2] text-[12px]">
                in
              </SocialIcon>
              <SocialIcon label="X" className="bg-black">
                𝕏
              </SocialIcon>
            </div>
          </div>
          <LinkList title="Company" links={companyLinks} />
          <LinkList title="Service" links={serviceLinks} />
          <div>
            <h3 className="font-display text-[clamp(1.25rem,1.8vw,2rem)] font-medium tracking-[-.045em] text-white">
              Inquire
            </h3>
            <div className="mt-6 space-y-5 text-[clamp(11px,.9vw,15px)] leading-[1.08] text-white/55">
              <div>
                <p className="mb-3 text-[clamp(14px,1vw,17px)] normal-case text-white/70">
                  Address
                </p>
                <p>
                  •&nbsp; 3RD FLOOR, ICICI BANK BUILDING,
                  <br />
                  &nbsp;&nbsp;&nbsp; JARIPATKA, NAGPUR – 440014,
                  <br />
                  &nbsp;&nbsp;&nbsp; MAHARASHTRA, INDIA
                </p>
              </div>
              <div>
                <p className="mb-3 text-[clamp(14px,1vw,17px)] normal-case text-white/70">
                  Email
                </p>
                <a
                  className="hover:text-[#ff4b2d]"
                  href="mailto:Info@smeinfra.com"
                >
                  •&nbsp; Info@smeinfra.com
                </a>
              </div>
              <div>
                <p className="mb-3 text-[clamp(14px,1vw,17px)] normal-case text-white/70">
                  Phone
                </p>
                <a className="hover:text-[#ff4b2d]" href="tel:+919970615385">
                  •&nbsp; +91 99706 15385
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[clamp(48px,7vw,100px)] flex flex-col gap-5 border-t border-white/20 pt-5 text-[clamp(11px,.85vw,14px)] text-white/85 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-5">
            <span>
              Privacy Policy
            </span>
            <span>
              Terms &amp; Conditions
            </span>
          </div>
          <p>
            © 2026 SME. All Rights Reserved. Site Design and Maintained by
            AdBorn Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
