import About from "./Pages/About";
import Footer from "./Components/Common/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
import { Route, Routes } from "react-router-dom";
