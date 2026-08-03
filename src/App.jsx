import About from "./Pages/About";
import Career from "./Pages/Career";
import Footer from "./Components/Common/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  );
}
import { Route, Routes } from "react-router-dom";