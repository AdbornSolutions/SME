import { motion } from "framer-motion";

const socialLinks = [
  { label: "Facebook", icon: "facebook" },
  { label: "Youtube", icon: "youtube" },
  { label: "Twitter", icon: "twitter" },
  { label: "Instagram", icon: "instagram" },
  { label: "LinkedIn", icon: "linkedin" },
];

function SocialMark({ type }) {
  if (type === "facebook") {
    return <path d="M9 14V8.8h1.8l.3-2H9V5.5c0-.6.2-1 1.1-1h1.1V2.7c-.5-.1-1-.1-1.6-.1-1.6 0-2.7 1-2.7 2.8v1.4H5v2h1.9V14H9Z" fill="currentColor" />;
  }
  if (type === "youtube") {
    return <><rect x="2" y="4" width="12" height="8" rx="2.4" stroke="currentColor" /><path d="m7 6.5 3.5 1.6L7 10V6.5Z" fill="currentColor" /></>;
  }
  if (type === "twitter") {
    return <path d="m4 3 8 10M12 3 4 13" stroke="currentColor" strokeWidth="1.5" />;
  }
  if (type === "instagram") {
    return <><rect x="3" y="3" width="10" height="10" rx="3" stroke="currentColor" /><circle cx="8" cy="8" r="2.2" stroke="currentColor" /><circle cx="11" cy="5" r=".7" fill="currentColor" /></>;
  }
  return <text x="3.1" y="11.2" fill="currentColor" fontSize="8" fontWeight="700">in</text>;
}

function SocialPill({ label, icon }) {
  return (
    <span
      className="inline-flex h-[25px] items-center gap-[7px] rounded-full border border-[#ff4b2e] px-[8px] text-[12px] font-semibold text-[#181818]"
      aria-label={label}
    >
      <span className="grid size-[16px] place-items-center rounded-full bg-[#ff4b2e] text-white">
        <svg className="size-3 fill-none" viewBox="0 0 16 16" aria-hidden="true">
          <SocialMark type={icon} />
        </svg>
      </span>
      {label}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className="size-3 fill-none stroke-current stroke-[1.5]" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6h7M6 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CTA2() {
  return (
    <section className="bg-[#f4f3f0] px-[5.6%] pb-[30px] pt-1 max-[700px]:px-4 max-[700px]:pb-5">
      <motion.div
        className="mx-auto grid max-w-[1260px] grid-cols-2 gap-[14px] max-[760px]:grid-cols-1"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <article className="min-h-[360px] rounded-[14px] border border-white bg-[#f7f7f7] px-[14px] py-[17px] shadow-[0_7px_7px_rgba(0,0,0,.16)] max-[700px]:min-h-0 max-[700px]:px-5 max-[700px]:py-6">
          <span className="inline-flex h-6 items-center rounded-full border border-[#ff4b2e] px-[10px] text-[11px] font-medium">
            Stay Connected
          </span>
          <div className="mt-[25px] max-w-[420px]">
            <h2 className="font-display text-[clamp(32px,3.25vw,47px)] font-medium leading-[1.08] tracking-[-.055em]">
              Follow us on social to see
              <span className="block">what We&apos;re up to!</span>
            </h2>
            <p className="mt-[13px] max-w-[400px] text-[13px] leading-[1.25] text-[#202020]">
              Stay connected with us for company updates, completed projects,
              industry insights and new developments.
            </p>
            <div className="mt-[32px] flex flex-wrap gap-[10px_14px]">
              {socialLinks.slice(0, 3).map((social) => (
                <SocialPill {...social} key={social.label} />
              ))}
              <div className="flex w-full gap-[14px] pl-10 max-[430px]:pl-0">
                {socialLinks.slice(3).map((social) => (
                  <SocialPill {...social} key={social.label} />
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="min-h-[360px] rounded-[14px] bg-[#ff4328] px-[21px] py-[17px] text-white shadow-[0_7px_7px_rgba(0,0,0,.16)] max-[700px]:min-h-[330px] max-[700px]:px-5 max-[700px]:py-6">
          <span className="inline-flex h-6 items-center rounded-full border border-white px-[10px] text-[11px] font-medium">
            Plan your Project
          </span>
          <div className="mt-[25px]">
            <h2 className="max-w-[430px] font-display text-[clamp(32px,3.25vw,47px)] font-medium leading-[1.08] tracking-[-.05em]">
              Let&apos;s Design Your
              <span className="block">Customized PEB Plan</span>
            </h2>
            <p className="mt-[13px] max-w-[425px] text-[13px] leading-[1.25]">
              Discuss your requirements with our experts and receive a solution
              designed for your business.
            </p>
            <div className="mt-[26px] flex flex-col items-start gap-[9px]">
              <a
                className="inline-flex h-[25px] items-center gap-[6px] rounded-full border border-white px-[9px] text-[12px] font-semibold text-white no-underline transition-colors hover:bg-white hover:text-[#ff4328]"
                href="/contact"
              >
                Request a Quote <ArrowIcon />
              </a>
              <a
                className="inline-flex h-[25px] items-center gap-[6px] rounded-full border border-white px-[9px] text-[12px] font-semibold text-white no-underline transition-colors hover:bg-white hover:text-[#ff4328]"
                href="tel:+919970615385"
              >
                Contact Our Executive <ArrowIcon />
              </a>
            </div>
          </div>
        </article>
      </motion.div>
    </section>
  );
}
