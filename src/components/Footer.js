const Footer = () => {
  return (
    <div>
      {' '}
      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="section-center">
          <div className="social-icons">
            {/* <!-- social icon --> */}
            <a href="www.twitter.com" className="social-icon">
              {' '}
              <i className="fab fa-facebook"></i>
            </a>
            {/* <!-- social icon end --> */}
            {/* <!-- social icon --> */}
            <a href="www.twitter.com" className="social-icon">
              {' '}
              <i className="fab fa-twitter"></i>
            </a>
            {/* <!-- social icon end --> */}
            {/* <!-- social icon --> */}
            <a href="www.twitter.com" className="social-icon">
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
    </div>
  );
};
export default Footer;
