import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
