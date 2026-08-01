import industryServiceImage from "../../assets/Industry&Service.png";

const highlights = [
  {
    title: "Who We Are",
    text: "Subhash Mandhan Engineers & Contractors is a Nagpur-based civil construction company specializing in Industrial Construction, Industrial Infrastructure Development, Factory Buildings, Warehouses, Industrial Machine Foundations, Utility Infrastructure, STP & ETP Works, and Residential & Industrial Land Development.",
  },
  {
    title: "How we work",
    text: "With a strong team of engineers, technical professionals, skilled workforce, and modern construction equipment, we deliver high-quality projects with a commitment to safety, quality, transparency, and timely execution.",
  },
  {
    title: "Our expertise",
    text: "Our expertise spans Industrial Buildings, Factory Sheds, Labour Quarters, Admin Buildings, Internal Roads, Drainage Networks, Utility Infrastructure, Machine Foundations, and complete Land Development Works across major industrial regions.",
  },
];

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-[#f4f2ef] px-[clamp(24px,7.8vw,120px)]"
      id="about"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[6%] h-[62%] w-[40%] opacity-[.28] max-[900px]:hidden"
      >
        <span className="absolute inset-[12%_4%_5%_4%] border border-[#cfcac4]" />
        <span className="absolute left-[8%] top-[30%] h-[55%] w-[72%] -skew-y-[13deg] border border-[#cfcac4]" />
        <span className="absolute left-[30%] top-[4%] h-[68%] w-[46%] rotate-[37deg] border border-[#d6d1cb]" />
        <span className="absolute bottom-[14%] left-[12%] h-[44%] w-[34%] border-x border-[#d6d1cb]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-[clamp(42px,7vw,120px)] lg:grid-cols-[.95fr_1fr]">
        <div>
          <span className="inline-flex rounded-full border border-[#dfd9d2] px-4 py-1.5 text-[clamp(11px,.9vw,14px)] text-[#ff4b2d]">
            Industries &amp; Services
          </span>
          <h2 className="mt-5 max-w-[600px] font-display text-[clamp(2.3rem,4vw,4.2rem)] font-medium leading-[1.06] tracking-[-.055em] text-[#101113]">
            The <span className="text-[#ff4b2d]">Industry</span> And
            <br />
            Our <span className="text-[#ff4b2d]">Services</span>
          </h2>

          <div className="mt-7 space-y-5">
            {highlights.map(({ title, text }) => (
              <article key={title}>
                <h3 className="flex items-center gap-2 font-display text-[clamp(15px,1.2vw,18px)] font-semibold text-[#1a1a1a]">
                  <i className="size-3 shrink-0 rounded-full bg-[#ff4b2d]" />
                  {title}
                </h3>
                <p className="mt-3 max-w-[610px] text-[clamp(12px,1vw,15px)] leading-[1.15] text-[#3f3d3b]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[620px] lg:justify-self-end">
          <img
            className="aspect-[1.02/1] w-full rounded-[clamp(18px,2.2vw,32px)] object-cover shadow-[0_18px_50px_rgb(36,29,20,.1)]"
            src={industryServiceImage}
            alt="Industrial facility completed by SME Infra"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
