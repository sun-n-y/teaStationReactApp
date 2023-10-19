import About from './components/About';
import Contact from './components/Contact';
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

      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="section-center">
          <div className="social-icons">
            {/* <!-- social icon --> */}
            <a href="#" className="social-icon">
              {' '}
              <i className="fab fa-facebook"></i>
            </a>
            {/* <!-- social icon end --> */}
            {/* <!-- social icon --> */}
            <a href="#" className="social-icon">
              {' '}
              <i className="fab fa-twitter"></i>
            </a>
            {/* <!-- social icon end --> */}
            {/* <!-- social icon --> */}
            <a href="#" className="social-icon">
              {' '}
              <i className="fab fa-instagram"></i>
            </a>
            {/* <!-- social icon end --> */}
          </div>
          <h4 className="footer-text">
            &copy; <span>2023 </span>
            <span className="company">tea station</span> all rights reserved
          </h4>
        </div>
      </footer>
    </>
  );
}

export default App;
