import { ServiceDetailPage } from "./EstimateBBQ";
import industrialRoadImage from "../../assets/optimized/services/5.webp";

const benefits = [
  {
    icon: "♙",
    title: "Engineering-Led Construction",
    description:
      "Every project is executed with detailed engineering planning, technical expertise, and precision.",
  },
  {
    icon: "◎",
    title: "Quality Assurance",
    description:
      "Every stage of construction is monitored through rigorous inspections and engineering quality standards.",
  },
];

const faqs = [
  {
    question: "What types of industrial roads do you construct?",
    answer:
      "We construct RCC roads, asphalt roads, heavy-duty access roads, internal factory roads, parking areas, and complete industrial road networks.",
  },
  {
    question: "Are your roads suitable for heavy industrial vehicles?",
    answer:
      "Yes. Pavement layers, materials, thicknesses, and subgrade preparation are engineered for the expected axle loads and continuous industrial traffic.",
  },
  {
    question: "Do you provide drainage along with road construction?",
    answer:
      "Yes. We integrate storm-water drainage, culverts, shoulders, gradients, and water-management systems with the road network.",
  },
  {
    question: "Can you upgrade existing industrial roads?",
    answer:
      "Yes. We assess existing pavement conditions and provide strengthening, resurfacing, widening, drainage correction, and complete rehabilitation solutions.",
  },
];

const body = [
  "Industrial roads are critical to the efficient operation of manufacturing plants, warehouses, logistics parks, and industrial estates. Poorly designed roads can lead to traffic congestion, equipment damage, and increased maintenance costs.",
  "Our team delivers complete industrial road construction solutions from site preparation and subgrade development to pavement construction, drainage, and finishing—ensuring reliable infrastructure that supports uninterrupted industrial operations.",
];

export default function IndustryRoads() {
  return (
    <ServiceDetailPage
      title="Industrial Roads"
      heading="Reliable Road Infrastructure for Industrial Facilities"
      image={industrialRoadImage}
      imageAlt="Industrial road construction crew laying asphalt"
      body={body}
      benefitItems={benefits}
      faqItems={faqs}
      activeIndex={4}
    />
  );
}
