import { ServiceDetailPage } from "./EstimateBBQ";
import factoryBuildingImage from "../../assets/optimized/services/4.webp";

const benefits = [
  {
    icon: "♙",
    title: "Engineering-Led Construction",
    description:
      "Every project is executed with detailed engineering planning, technical expertise, and precision.",
  },
  {
    icon: "♢",
    title: "Safety & Compliance",
    description:
      "All construction activities follow established safety protocols and engineering standards to create secure and reliable workplaces.",
  },
];

const faqs = [
  {
    question: "What types of factory buildings do you construct?",
    answer:
      "We construct manufacturing plants, production facilities, PEB factory sheds, RCC industrial buildings, workshops, warehouses, and utility buildings for various industries.",
  },
  {
    question: "Do you provide complete factory building construction?",
    answer:
      "Yes. We provide end-to-end delivery covering foundations, structural systems, roofing, flooring, utilities, finishing works, quality control, and final handover.",
  },
  {
    question: "Can you customize factory buildings for specific industries?",
    answer:
      "Yes. Every facility is planned around its production workflow, machinery, utilities, storage, safety requirements, and future expansion needs.",
  },
  {
    question: "How do you ensure quality during construction?",
    answer:
      "We use approved materials, documented QA/QC procedures, stage-wise inspections, and continuous engineering supervision throughout construction.",
  },
];

const body = [
  "A factory building is more than just a structure—it's the foundation of your production process. Our team designs and constructs industrial factory buildings that maximize space utilization, enhance workflow efficiency, and meet the unique operational requirements of every industry.",
  "From foundations and structural frameworks to flooring, utilities, and finishing works, we provide complete construction solutions tailored to your manufacturing needs.",
];

export default function FactoryBuilding() {
  return (
    <ServiceDetailPage
      title="Factory Buildings"
      heading="Building Manufacturing Facilities That Power Industrial Success"
      image={factoryBuildingImage}
      imageAlt="Aerial view of a large industrial factory complex"
      body={body}
      benefitItems={benefits}
      faqItems={faqs}
      activeIndex={3}
    />
  );
}
