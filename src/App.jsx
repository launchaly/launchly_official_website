import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Navbar/Header";
import HomepageSlider from "./components/Home/HomepageSlider";
import About from "./components/about/About";
import Services from "./components/services/Services";
import ChooseUs from "./components/chooseUs/ChooseUs";
import Team from "./components/Our Team/Team";
import OurWork from "./components/Our Work/OurWork";
import OurClients from "./components/Our Clients/OurClients";
import Footer from "./components/Footer/Footer";
import AboutBanner from "./components/about/AboutBanner";
import ServicesBanner from "./components/services/ServicesBanner";
import OurWorkBanner from "./components/Our Work/OurWorkBanner";
import Gallery from "./components/Gallery/Gallery";
import GalleryBanner from "./components/Gallery/GalleryBanner";
import ContactBanner from "./components/Contact/ContactBanner";
import Contact from "./components/Contact/Contact";
import Web_DeveloperBanner from "./components/services/Web_Developer/Web_DeveloperBanner";
import App_Development_Banner from "./components/services/App_Development/App_Development_Banner";
import Content_Writing_Banner from "./components/services/Content_Writhing/Content_Writing_Banner";
import Our_Working_Team from "./components/Our_Working_Team/Our_Working_Team";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>    
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomepageSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-banner" element={<AboutBanner />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-banner" element={<ServicesBanner />} />
        <Route path="/choose-us" element={<ChooseUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-work-banner" element={<OurWorkBanner />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-banner" element={<GalleryBanner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-banner" element={<ContactBanner />} />
        <Route path="/our-working-team" element={<Our_Working_Team />} />
        <Route path="/web-decvelopment-banner/1" element={<Web_DeveloperBanner />} />
        <Route path="/app-development-banner/2" element={<App_Development_Banner />} />
        <Route path="/content-writer-banner/3" element={<Content_Writing_Banner />} />
        <Route
          path="*"
          element={
            <div className="text-center py-10 text-xl font-semibold text-red-500">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
