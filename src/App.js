import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
// Import your new page components
import OurPeople from './pages/OurPeople';
import CaseStudies from './pages/CaseStudies';
import Properties from './pages/Properties';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/HyperionWebsite">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
