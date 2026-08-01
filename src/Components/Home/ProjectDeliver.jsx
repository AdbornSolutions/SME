const deliveryPoints = [
  {
    title: (
      <>
        Timely Project
        <br />
        Delivery
      </>
    ),
    icon: "stopwatch",
  },
  { title: <>Faster ROI</>, icon: "chart" },
  {
    title: (
      <>
        Early
        <br />
        Production
      </>
    ),
    icon: "rocket",
  },
];

function DeliveryIcon({ type }) {
  const icons = {
    stopwatch: (
      <>
        <circle cx="12" cy="13" r="7" />
        <path d="M12 9v4l2.5 2.5M9 3h6M12 3v3" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16M8 15l3-3 3 2 5-6" />
        <path d="M16 8h3v3" />
      </>
    ),
    rocket: (
      <>
        <path d="M14 5c2.6-2 5-2 5-2s0 2.4-2 5l-4 4-4-4 5-3Z" />
        <path d="m9 9-3 1-2 3 4 1M13 13l-1 4-3 2-1-4M8 16l-3 3" />
        <circle cx="15" cy="6" r="1" />
      </>
    ),
  };
  return (
    <svg
      className="size-6 fill-none stroke-[#131417] stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

export default function ProjectDeliver() {
  return (
    <section className="bg-[#f4f2ef] px-5 text-center" id="projects">
      <span className="inline-flex rounded-full border border-[#d8d3cd] px-4 py-1.5 text-[clamp(11px,.85vw,14px)] text-[#ff4b2d]">
        Project Delivering
      </span>
      <h2 className="mt-5 font-display text-[clamp(2.2rem,3.6vw,3.8rem)] font-medium leading-[1.05] tracking-[-.055em] text-[#111214]">
        Delivery of
        <br />
        <span className="text-[#ff4b2d]">Project on Time</span>
      </h2>
      <div className="mx-auto mt-[clamp(36px,5vw,66px)] grid max-w-[920px] gap-5 sm:grid-cols-3 sm:gap-[clamp(22px,4vw,62px)]">
        {deliveryPoints.map(({ title, icon }) => (
          <article
            className="min-h-[clamp(150px,14vw,210px)] rounded-[clamp(14px,1.5vw,22px)] bg-[#ff4b2d] p-[clamp(20px,2vw,30px)] text-left shadow-[0_10px_22px_rgb(255,75,45,.12)]"
            key={icon}
          >
            <i className="grid size-[clamp(40px,3.5vw,56px)] place-items-center rounded-full bg-white">
              <DeliveryIcon type={icon} />
            </i>
            <h3 className="mt-[clamp(18px,2vw,30px)] font-display text-[clamp(1rem,1.35vw,1.5rem)] font-medium leading-[1.08] tracking-[-.035em] text-[#121315]">
              {title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
