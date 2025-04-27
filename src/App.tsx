import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import ProjectDetails from './components/Portfolio/Projects/ProjectsDetails.tsx';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="portfolio">
                <Portfolio />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
