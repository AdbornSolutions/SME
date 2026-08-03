import { ServiceDetailPage } from "./EstimateBBQ";
import landDevelopmentImage from "../../assets/optimized/services/2.webp";

const benefits = [
  {
    icon: "♙",
    title: "Engineering-Driven Planning",
    description:
      "Every development begins with detailed engineering analysis to ensure efficient land utilization and long-term stability.",
  },
  {
    icon: "◎",
    title: "Quality Assurance",
    description:
      "Strict inspection procedures and engineering supervision ensure every stage meets the highest construction standards.",
  },
];

const faqs = [
  {
    question: "What does land development include?",
    answer:
      "Land development involves site clearing, excavation, grading, compaction, internal road construction, drainage systems, utility infrastructure, and all necessary preparations before building construction begins.",
  },
  {
    question: "Do you undertake large-scale industrial site development?",
    answer:
      "Yes. We plan and execute large industrial sites for manufacturing facilities, logistics parks, warehouses, and integrated industrial townships.",
  },
  {
    question: "Can you construct internal roads and drainage systems?",
    answer:
      "Yes. Our scope includes engineered internal roads, storm-water drainage, utility corridors, grading, and supporting site infrastructure.",
  },
  {
    question: "Why is proper land development important?",
    answer:
      "Proper land development creates stable ground conditions, prevents waterlogging and settlement issues, and supports safe, efficient long-term facility operations.",
  },
];

const body = [
  "Proper land development is the foundation of every industrial facility. Our experienced engineering team carefully plans and executes every stage of site preparation, ensuring stable ground conditions, efficient drainage, seamless access, and well-integrated utility infrastructure.",
  "Whether you're developing a manufacturing plant, warehouse, logistics park, or industrial township, we deliver engineered site development solutions that support long-term operational success.",
];

export default function LandDev() {
  return (
    <ServiceDetailPage
      title="Land Development"
      heading="Complete Site Development Solutions for Industrial Projects"
      image={landDevelopmentImage}
      imageAlt="Aerial view of a large industrial land development project"
      body={body}
      benefitItems={benefits}
      faqItems={faqs}
      activeIndex={1}
    />
  );
}
