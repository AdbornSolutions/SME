import { motion, useReducedMotion } from 'framer-motion'

const logoModules = import.meta.glob('../../assets/logos-slider/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
})

const logos = Object.entries(logoModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([path, image]) => ({ image, name: path.split('/').pop().replace(/\.[^.]+$/, '') }))

function LogoSet({ duplicate = false }) {
  return (
    <div className="flex shrink-0 items-center gap-[clamp(18px,2.2vw,38px)] pr-[clamp(18px,2.2vw,38px)]" aria-hidden={duplicate}>
      {logos.map(({ image, name }) => <div className="flex h-[clamp(62px,7.8vw,105px)] w-[clamp(164px,20vw,280px)] shrink-0 items-center justify-center overflow-hidden rounded-[clamp(10px,1vw,16px)] bg-white" key={`${name}-${duplicate}`}><img className="size-full object-contain" src={image} alt={duplicate ? '' : `${name} client logo`} loading="lazy" /></div>)}
    </div>
  )
}

export default function ClientsSlider() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-[#f4f2ef]" id="clients">
      <div className="px-5 text-center">
        <span className="inline-flex rounded-full border border-[#d8d3cd] px-4 py-1.5 text-[clamp(11px,.85vw,14px)] text-[#ff4b2d]">Clients and Project</span>
        <h2 className="mt-5 font-display text-[clamp(2.25rem,4vw,4rem)] font-medium leading-none tracking-[-.055em] text-[#111214]">Our <span className="text-[#ff4b2d]">Clients</span> and <span className="text-[#ff4b2d]">Project</span> Sectors</h2>
      </div>

      <div className="mt-[clamp(38px,5vw,72px)] overflow-hidden">
        <motion.div className="flex w-max" animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }} transition={{ duration: 55, ease: 'linear', repeat: Infinity }}>
          <LogoSet /><LogoSet duplicate />
        </motion.div>
      </div>
    </section>
  )
}
