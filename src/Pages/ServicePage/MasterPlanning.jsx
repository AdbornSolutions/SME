import { ServiceDetailPage } from "./EstimateBBQ";
import masterPlanningImage from "../../assets/optimized/services/6.webp";

const benefits = [
  {
    icon: "♙",
    title: "Engineering-Driven Design",
    description:
      "Every master plan is developed using engineering principles to ensure practical, efficient, and sustainable industrial development.",
  },
  {
    icon: "▥",
    title: "Integrated Planning",
    description:
      "Buildings, roads, utilities, drainage, and support infrastructure are planned together for seamless execution.",
  },
];

const faqs = [
  {
    question: "What is industrial master planning?",
    answer:
      "Industrial master planning is the process of creating a comprehensive development layout that includes buildings, roads, utilities, drainage, logistics areas, and future expansion zones for an industrial site.",
  },
  {
    question: "Why is master planning important?",
    answer:
      "It aligns land use, production flow, infrastructure, safety, logistics, and future growth before construction begins, reducing conflicts and costly redesigns.",
  },
  {
    question: "Do you provide master planning for new industrial developments?",
    answer:
      "Yes. We create coordinated master plans for new manufacturing plants, industrial estates, logistics parks, warehouses, and mixed industrial developments.",
  },
  {
    question: "Can master planning support future expansion?",
    answer:
      "Yes. Our layouts reserve strategic expansion zones and infrastructure capacity so facilities can grow without disrupting ongoing operations.",
  },
];

const body = [
  "A well-planned industrial development is the foundation of a successful project. Our master planning approach focuses on creating efficient site layouts that integrate production facilities, warehouses, internal roads, utilities, drainage systems, green spaces, and future expansion areas into a single, cohesive plan.",
  "From concept development to construction-ready layouts, we ensure every element is strategically positioned to enhance productivity, safety, and operational efficiency.",
];

export default function MasterPlanning() {
  return (
    <ServiceDetailPage
      title="Master Planning"
      heading="Planning Today for Tomorrow's Industrial Success"
      image={masterPlanningImage}
      imageAlt="Industrial infrastructure prepared through coordinated master planning"
      body={body}
      benefitItems={benefits}
      faqItems={faqs}
      activeIndex={5}
    />
  );
}
