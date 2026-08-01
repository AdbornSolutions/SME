import leaderImage from '../../assets/LeaderIMG.webp'
import leadershipBackground from '../../assets/LeadershipBg.webp'
import ethanImage from '../../assets/demo2.png'
import kashishImage from '../../assets/demo3.png'

const expertise = ['Industrial Project Planning', 'Cost Estimation & Budget Engineering', 'Quantity Surveying & BOQ Preparation', 'Project Scheduling & Resource Planning', 'Value Engineering & Cost Optimization', 'Contract Management', 'Quality Assurance & Site Execution', 'Client Coordination & Technical Support']

function CheckItem({ children }) {
  return <li className="flex items-center gap-2 text-[clamp(8px,.65vw,11px)]"><i className="flex size-[14px] shrink-0 items-center justify-center rounded-full bg-[#00294f] text-[9px] text-white">✓</i>{children}</li>
}

function MemberCard({ image, name, role }) {
  return <article><img className="aspect-[.93/1] w-full object-cover" src={image} alt={name} loading="lazy" /><div className="mt-2 flex items-start justify-between gap-2"><div><h3 className="font-display text-[clamp(14px,1.25vw,20px)] font-medium leading-none text-[#141416]">{name}</h3><p className="mt-1 text-[clamp(11px,.85vw,14px)] leading-none text-[#606066]">{role}</p></div><span className="flex shrink-0 items-center gap-1 rounded-full border border-[#ded9d3] px-2 py-1 text-[7px] uppercase text-[#151516]"><i className="text-[10px] leading-none">×</i>Twitter</span></div></article>
}

export default function Team() {
  return (
    <section className="bg-[#f4f2ef] px-[clamp(20px,5.5vw,86px)]" id="team">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-6"><div><span className="inline-flex rounded-full border border-[#d8d3cd] px-4 py-1.5 text-[clamp(11px,.85vw,14px)] text-[#ff4b2d]">SME Team</span><h2 className="mt-5 max-w-[560px] font-display text-[clamp(2.35rem,4.2vw,4.6rem)] font-medium leading-[.98] tracking-[-.06em] text-[#101113]">Through a<br />unique combination.</h2></div><a className="mb-1 hidden items-center gap-2 rounded bg-white px-3 py-2 text-[10px] uppercase text-[#161618] shadow-sm sm:flex" href="#team-members">All member <i className="grid size-[18px] place-items-center rounded bg-[#ff4b2d] text-sm text-white">↗</i></a></div>

        <div className="relative mt-[clamp(34px,5vw,68px)] overflow-hidden rounded-[clamp(18px,2vw,30px)]"><img className="aspect-[1.83/1] w-full object-cover" src={leadershipBackground} alt="SME leadership office" loading="lazy" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.04),transparent_55%)]" />
          <div className="absolute bottom-0 left-[20%] z-10 w-[28%] overflow-hidden rounded-t-[clamp(14px,1.5vw,23px)] bg-[#00294f] text-center text-white max-[700px]:left-[7%] max-[700px]:w-[38%]"><img className="aspect-[.97/1] w-full object-cover object-top" src={leaderImage} alt="Subhash Mandhan" /><div className="px-2 py-[clamp(10px,1.2vw,18px)]"><h3 className="font-display text-[clamp(10px,1.15vw,18px)] font-medium">Subhash Mandhan</h3><p className="mt-2 text-[clamp(6px,.55vw,9px)]">Founder &amp; Managing Director</p><p className="mt-3 text-[clamp(6px,.5vw,8px)]">10+ Years · Civil Construction · Maharashtra</p></div></div>
          <div className="absolute bottom-0 right-0 z-10 w-[52.7%] rounded-tl-[clamp(16px,1.7vw,26px)] bg-[#ff4b2d] p-[clamp(16px,3vw,43px)] text-white max-[700px]:w-[59%] max-[700px]:p-3"><span className="inline-flex rounded-full border border-white px-3 py-1 text-[clamp(6px,.58vw,9px)] uppercase">Leadership profile</span><h3 className="mt-[clamp(10px,1.5vw,22px)] font-display text-[clamp(16px,2.35vw,35px)] font-medium leading-none tracking-[-.04em]">Mr. Subhash Mandhan</h3><div className="my-[clamp(10px,1.7vw,25px)] border-t border-white/20" /><p className="text-[clamp(7px,.72vw,11px)] leading-[1.12]">Founder &amp; Managing Director of SM Engineers &amp; Contractors, leading the organization with a clear vision of delivering high-quality industrial, commercial, and infrastructure projects through engineering excellence, disciplined execution, and client-focused solutions.</p><p className="mt-[clamp(9px,1.4vw,18px)] text-[clamp(7px,.72vw,11px)] leading-[1.12] max-[700px]:hidden">With over a decade of hands-on experience in civil construction, project planning, estimation, and execution management successfully leading delivery of industrial facilities, factory buildings, residential, commercial, roads, utility infrastructure, and large-scale site development works.</p><h4 className="mt-[clamp(12px,1.8vw,26px)] font-display text-[clamp(10px,1vw,15px)] font-medium">Engineering &amp; Project Leadership — Core Expertise</h4><ul className="mt-[clamp(9px,1.5vw,20px)] grid grid-cols-2 gap-x-3 gap-y-[clamp(7px,.9vw,12px)] max-[700px]:hidden">{expertise.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul></div>
        </div>

        <div className="mt-[clamp(28px,4vw,58px)] grid gap-[clamp(16px,2vw,28px)] md:grid-cols-3" id="team-members"><article className="flex min-h-[clamp(260px,32vw,430px)] flex-col justify-center rounded-[clamp(14px,1.5vw,22px)] bg-[#ff4b2d] p-[clamp(22px,2.4vw,38px)] text-white"><h3 className="max-w-[250px] font-display text-[clamp(1.7rem,2.7vw,3.4rem)] font-medium leading-[1.05] tracking-[-.05em]">People Are Our Greatest Strength</h3><p className="mt-8 max-w-[270px] text-[clamp(11px,.85vw,14px)] leading-[1.15]">We believe exceptional projects begin with exceptional people. That's why we invest in talent, encourage continuous learning, and create opportunities for every team member to grow.</p></article><MemberCard image={ethanImage} name="Ethan Roberts" role="Marketing Leader" /><MemberCard image={kashishImage} name="Ms. Kashish Mulchandani" role="Senior Accountant Officer" /></div>
      </div>
    </section>
  )
}
