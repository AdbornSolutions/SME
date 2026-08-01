import ind1 from '../../assets/ind1.png'
import ind2 from '../../assets/ind2.png'
import ind3 from '../../assets/ind3.png'
import ind4 from '../../assets/ind4.png'

const associations = [
  { image: ind1, name: 'Vidarbha Economic Development Council' },
  { image: ind2, name: 'Young Indians' },
  { image: ind3, name: 'BNI Andesite' },
  { image: ind4, name: 'RBU Ramdeobaba University' },
]

export default function Associations() {
  return (
    <section className="bg-[#f4f2ef] px-[clamp(20px,5.5vw,86px)]" id="associations">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center font-display text-[clamp(1.8rem,3vw,3.35rem)] font-medium leading-[1.02] tracking-[-.055em] text-[#101113]">Industry Associations &amp;<br />Professional Networks</h2>
        <div className="mt-[clamp(24px,3vw,48px)] grid grid-cols-2 items-center gap-x-[clamp(20px,4vw,72px)] gap-y-7 sm:grid-cols-4">
          {associations.map(({ image, name }) => <div className="flex h-[clamp(72px,8vw,125px)] items-center justify-center" key={name}><img className="max-h-full max-w-full object-contain" src={image} alt={name} loading="lazy" /></div>)}
        </div>
      </div>
    </section>
  )
}
