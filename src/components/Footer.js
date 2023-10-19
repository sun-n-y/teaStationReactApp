import { socials } from '../data';

const Footer = () => {
  return (
    <div>
      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="section-center">
          <div className="social-icons">
            {socials.map((link) => {
              const { id, href, icon } = link;
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  key={id}
                >
                  <i className={icon}></i>
                </a>
              );
            })}
          </div>
          <h4 className="footer-text">
            &copy; <span>{new Date().getFullYear()} </span>
            <span className="company">tea station</span>. all rights reserved.
          </h4>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
