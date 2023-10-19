import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
