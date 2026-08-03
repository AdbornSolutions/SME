import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Career from "./Pages/Career";
import Footer from "./Components/Common/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";
import EstimateBBQ from "./Pages/ServicePage/EstimateBBQ";
import FactoryBuilding from "./Pages/ServicePage/FactoryBuilding";
import IndustrialCons from "./Pages/ServicePage/IndustrialCons";
import IndustryRoads from "./Pages/ServicePage/IndustryRoads";
import LandDev from "./Pages/ServicePage/LandDev";
import MasterPlanning from "./Pages/ServicePage/MasterPlanning";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/estimation-and-boq" element={<EstimateBBQ />} />
        <Route path="/services/land-development" element={<LandDev />} />
        <Route path="/services/industrial-construction" element={<IndustrialCons />} />
        <Route path="/services/factory-buildings" element={<FactoryBuilding />} />
        <Route path="/services/industrial-roads" element={<IndustryRoads />} />
        <Route path="/services/master-planning" element={<MasterPlanning />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  );
}
import { Route, Routes } from "react-router-dom";
