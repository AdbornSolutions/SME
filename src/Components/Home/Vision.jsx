const missionPoints = [
  'Strong design base & strong corporate ethics.',
  'Benchmarking the best in the industry for quality standards and implement same.',
  'Be a market leader by 2030.',
  'Attaining success by environmentally adaptable, smart, safe & friendly engineering solution.',
  "Understanding customer's present need, anticipating their future needs & responding with the most innovative & optimized solution & thereby delighting our customers.",
]

export default function Vision() {
  return (
    <section className="bg-[#f4f2ef] px-[clamp(20px,5.5vw,86px)]" id="vision">
      <div className="mx-auto max-w-[1360px]">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#d8d3cd] px-4 py-1.5 text-[clamp(11px,.85vw,14px)] text-[#ff4b2d]">Vision and Mission</span>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,4vw,4rem)] font-medium leading-none tracking-[-.055em] text-[#111214]">Our <span className="text-[#ff4b2d]">Vision</span> and <span className="text-[#ff4b2d]">Mission</span></h2>
        </div>

        <div className="mt-[clamp(42px,6vw,88px)] grid gap-5 lg:grid-cols-2 lg:gap-7">
          <article className="min-h-[300px] rounded-[18px] border border-white bg-[#f7f6f5] p-[clamp(24px,3vw,42px)] shadow-[6px_7px_6px_rgb(0,0,0,.16)]">
            <span className="inline-flex rounded-full border border-[#ff4b2d] px-3 py-0.5 text-[clamp(11px,.8vw,13px)] leading-none text-[#111214]">Our vision</span>
            <h3 className="mt-7 font-display text-[clamp(2rem,3vw,3.3rem)] font-medium leading-none tracking-[-.055em] text-[#101113]">From Good to Great</h3>
            <p className="mt-8 max-w-[570px] text-[clamp(14px,1.25vw,19px)] leading-[1.12] text-[#202023]">Subhash Mandhan Engineers' and Contractors' will emerge from "Good to Great" as a company in the area of Construction and infrastructure development, continue to work on a sustainable basis for a cleaner, smarter &amp; greener tomorrow &amp; create value for all Customers, Stakeholders &amp; Employees.</p>
          </article>

          <article className="min-h-[300px] rounded-[18px] bg-[#ff4b2d] p-[clamp(24px,3vw,42px)] text-white shadow-[6px_7px_6px_rgb(0,0,0,.16)]">
            <span className="inline-flex rounded-full border border-white px-3 py-0.5 text-[clamp(11px,.8vw,13px)] leading-none">Our mission</span>
            <ul className="mt-7 space-y-[clamp(18px,2.2vw,32px)]">
              {missionPoints.map((point) => <li className="grid grid-cols-[13px_1fr] gap-3 text-[clamp(13px,1vw,16px)] leading-[1.1]" key={point}><i className="mt-[.22em] size-[11px] rounded-full bg-white" />{point}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
