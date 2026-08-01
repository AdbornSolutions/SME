import AboutUs from '../Components/Home/AboutUs'
import Associations from '../Components/Home/Associations'
import ClientsSlider from '../Components/Home/ClientsSlider'
import CTA from '../Components/Home/CTA'
import Hero from '../Components/Home/Hero'
import Textslider from '../Components/Home/Textslider'
import Team from '../Components/Home/Team'
import Vision from '../Components/Home/Vision'

export default function Home() {
  return <main className="flex flex-col gap-20">
  <Hero />
  <Textslider />
  <AboutUs />
  <Vision />
  <ClientsSlider />
  <Team />
  <Associations />
  <CTA />
  </main>
}
