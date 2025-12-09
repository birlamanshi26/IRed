import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Manufacturing from "./pages/Manufacturing";
import DroneSolutions from "./pages/DroneSolutions";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Equipment from "./pages/Equipment";
import Academy from "./pages/Academy";
import Investors from "./pages/Investors";
import Industries from "./pages/Industries";

// Placeholder component for sub-routes
const PlaceholderPage = ({ title, description }) => (
  <div className="max-w-7xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-xl text-gray-600">{description || "This page is under development."}</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/drone-solutions" element={<DroneSolutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* New main routes */}
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/industries" element={<Industries />} />
          
          {/* Equipment sub-routes */}
          <Route path="/equipment/drone-store" element={<PlaceholderPage title="Drone Store" description="Browse our comprehensive selection of professional drones and equipment." />} />
          <Route path="/equipment/platforms" element={<PlaceholderPage title="Platforms" description="Explore our range of drone platforms for various industries." />} />
          <Route path="/equipment/volatus-engineering" element={<PlaceholderPage title="Volatus Engineering" description="Custom engineering solutions and innovative drone technology." />} />
          <Route path="/equipment/aerieport" element={<PlaceholderPage title="Aerieport Drone Nesting Station" description="Revolutionary automated drone nesting and deployment system." />} />
          
          {/* Services sub-routes */}
          <Route path="/services/quote" element={<PlaceholderPage title="Drone Services Quote" description="Request a quote for our professional drone services." />} />
          <Route path="/services/surveillance" element={<PlaceholderPage title="Surveillance as a Service" description="Continuous monitoring and surveillance solutions." />} />
          <Route path="/services/pipeline" element={<PlaceholderPage title="Pipeline Services" description="Specialized pipeline inspection and monitoring services." />} />
          <Route path="/services/lidar-inspections" element={<PlaceholderPage title="Drone Lidar Inspections" description="High-precision Lidar data collection and analysis." />} />
          <Route path="/services/inspections" element={<PlaceholderPage title="Drone Inspection Services" description="Comprehensive inspection services for various industries." />} />
          <Route path="/services/delivery" element={<PlaceholderPage title="Drone Delivery Services" description="Efficient and reliable drone delivery solutions." />} />
          <Route path="/services/wildfire" element={<PlaceholderPage title="Wildfire Services" description="Aerial support for wildfire detection and management." />} />
          <Route path="/services/uk" element={<PlaceholderPage title="UK Services" description="Drone services tailored for UK operations." />} />
          <Route path="/services/crewed-aerial" element={<PlaceholderPage title="Crewed Aerial Services" description="Traditional crewed aircraft services." />} />
          <Route path="/services/geomatics" element={<PlaceholderPage title="Geomatics" description="Advanced geospatial data collection and analysis services." />} />
          <Route path="/services/geomatics/lidar" element={<PlaceholderPage title="LIDAR Services" description="Professional Lidar data collection and processing." />} />
          <Route path="/services/geomatics/photogrammetry" element={<PlaceholderPage title="Photogrammetry" description="3D modeling and mapping through photogrammetry." />} />
          <Route path="/services/geomatics/aerial-imagery" element={<PlaceholderPage title="Aerial Imagery" description="High-resolution aerial photography and imaging." />} />
          <Route path="/services/geomatics/precision-agriculture" element={<PlaceholderPage title="Precision Agriculture" description="Agricultural monitoring and analysis services." />} />
          <Route path="/services/geomatics/change-detection" element={<PlaceholderPage title="Change Detection" description="Identify and analyze changes over time." />} />
          <Route path="/services/geomatics/photointerpretation" element={<PlaceholderPage title="Photointerpretation" description="Expert analysis of aerial imagery." />} />
          <Route path="/services/geomatics/gas-detection" element={<PlaceholderPage title="Gas Detection and Thermography Inspection" description="Advanced gas detection and thermal imaging services." />} />
          
          {/* Academy sub-routes */}
          <Route path="/academy/canada-training" element={<PlaceholderPage title="Canada Training Courses" description="Professional drone training programs in Canada." />} />
          <Route path="/academy/canada-training/level1-complex" element={<PlaceholderPage title="Level 1 Complex Course" description="Advanced training for complex drone operations." />} />
          <Route path="/academy/canada-training/advanced-bundle" element={<PlaceholderPage title="Advanced RPAS Ground School Bundle" description="Comprehensive ground school training package." />} />
          <Route path="/academy/canada-training/advanced-ground-school" element={<PlaceholderPage title="Advanced RPAS Ground School" description="In-depth ground school training program." />} />
          <Route path="/academy/uk-training" element={<PlaceholderPage title="UK Training Courses" description="Drone training programs for UK regulations." />} />
          <Route path="/academy/drones-in-ed" element={<PlaceholderPage title="Drones in Ed" description="Educational programs for schools and institutions." />} />
          <Route path="/academy/drone-mentor" element={<PlaceholderPage title="The Drone Mentor" description="Expert mentorship for drone professionals." />} />
          
          {/* Industries sub-routes */}
          <Route path="/industries/oil-gas" element={<PlaceholderPage title="Oil & Gas" description="Drone solutions for the oil and gas industry." />} />
          <Route path="/industries/energy-utilities" element={<PlaceholderPage title="Energy & Utilities" description="Aerial services for energy and utility companies." />} />
          <Route path="/industries/construction" element={<PlaceholderPage title="Construction & Engineering" description="Surveying and monitoring for construction projects." />} />
          <Route path="/industries/defense" element={<PlaceholderPage title="Defense" description="Specialized services for defense applications." />} />
          <Route path="/industries/forestry" element={<PlaceholderPage title="Forestry & Conservation" description="Environmental monitoring and forest management." />} />
          <Route path="/industries/government" element={<PlaceholderPage title="Government and Public Agencies" description="Supporting government operations with drone services." />} />
          <Route path="/industries/infrastructure" element={<PlaceholderPage title="Infrastructure & Transportation" description="Infrastructure inspection and monitoring." />} />
          <Route path="/industries/mining" element={<PlaceholderPage title="Mining & Aggregates" description="Mining site services and monitoring." />} />
          <Route path="/industries/precision-agriculture" element={<PlaceholderPage title="Precision Agriculture" description="Agricultural drone services and solutions." />} />
          <Route path="/industries/property" element={<PlaceholderPage title="Property Development & Maintenance" description="Property inspection and development services." />} />
          <Route path="/industries/public-safety" element={<PlaceholderPage title="Public Safety" description="Emergency response and public safety support." />} />
          
          {/* About sub-routes */}
          <Route path="/about/news" element={<PlaceholderPage title="Volatus News" description="Latest news and updates from Volatus Aerospace." />} />
          <Route path="/about/drone-network-news" element={<PlaceholderPage title="Drone Network News" description="News from the drone network community." />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
