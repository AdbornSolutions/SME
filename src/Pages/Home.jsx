import AboutUs from "../Components/Home/AboutUs";
import Associations from "../Components/Home/Associations";
import ClientsSlider from "../Components/Home/ClientsSlider";
import CTA from "../Components/Home/CTA";
import Hero from "../Components/Home/Hero";
import ProjectDeliver from "../Components/Home/ProjectDeliver";
import Textslider from "../Components/Home/Textslider";
import OurWorkingprocess from "../Components/Home/OurWorkingprocess";
import Team from "../Components/Home/Team";
import Vision from "../Components/Home/Vision";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <Hero />
        <Textslider />
      </div>
      <AboutUs />
      <Vision />
      <ClientsSlider />
      <OurWorkingprocess />
      <ProjectDeliver />
      <Team />
      <Associations />
      <CTA />
    </main>
  );
}
