import { ServiceDetailPage } from "./EstimateBBQ";
import industrialConstructionImage from "../../assets/optimized/services/3.webp";

const benefits = [
  {
    icon: "♙",
    title: "Engineering-Led Construction",
    description:
      "Every project is executed with detailed engineering planning, technical expertise, and precision.",
  },
  {
    icon: "⚙",
    title: "Modern Equipment",
    description:
      "A fleet of advanced construction machinery enables faster execution, improved efficiency, and reliable performance.",
  },
];

const faqs = [
  {
    question: "What types of industrial projects do you undertake?",
    answer:
      "We specialize in manufacturing plants, factory sheds, warehouses, pharmaceutical facilities, industrial infrastructure, and turnkey industrial construction projects.",
  },
  {
    question: "Do you provide turnkey construction services?",
    answer:
      "Yes. We manage complete turnkey delivery, including planning, estimation, procurement, construction, quality control, coordination, and final handover.",
  },
  {
    question: "How do you ensure construction quality?",
    answer:
      "Our engineers follow documented QA/QC procedures, conduct stage-wise inspections, verify materials, and supervise execution against approved drawings and specifications.",
  },
  {
    question: "Can you manage large-scale industrial developments?",
    answer:
      "Yes. Our engineering team, project controls, skilled workforce, and construction equipment are structured to deliver complex large-scale industrial developments.",
  },
];

const body = [
  "Industrial construction requires more than building structures—it demands careful planning, technical precision, and seamless execution. At SM Engineers & Contractors, we manage every stage of the construction process, from project planning and cost estimation to procurement, construction, quality assurance, and final handover.",
  "Our integrated approach ensures every project is completed on schedule, within budget, and in accordance with the highest engineering and safety standards.",
];

export default function IndustrialCons() {
  return (
    <ServiceDetailPage
      title="Industrial Construction"
      heading="End-to-End Industrial Construction Solutions"
      image={industrialConstructionImage}
      imageAlt="Large industrial construction project under development"
      body={body}
      benefitItems={benefits}
      faqItems={faqs}
      activeIndex={2}
    />
  );
}
