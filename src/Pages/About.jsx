import FeaturedProjects from "../Components/About/FeaturedProjects";
import Hero from "../Components/About/Hero";
import OurJourney from "../Components/About/OurJourney";
import WhyChooseUs from "../Components/About/WhyChooseUs";

export default function About() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <OurJourney />
      <FeaturedProjects />
    </main>
  );
}
