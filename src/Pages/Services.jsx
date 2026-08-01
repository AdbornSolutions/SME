import Hero from "../Components/Services/Hero";
import SMEServices from "../Components/Services/SMEServices";
import CounterNum from "../Components/Services/CounterNum";
import IndustriesWeServe from "../Components/Services/IndustriesWeServe";
import Testimonials from "../Components/Services/Testimonials";
import OurWorking from "../Components/Services/OurWorking";

export default function Services() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <SMEServices />
      <CounterNum />
      <Testimonials />
      <OurWorking />
      <IndustriesWeServe />
    </main>
  );
}
