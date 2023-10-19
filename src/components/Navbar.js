import { pageLinks } from '../data';

const Navbar = () => {
  return (
    <>
      {/* <!-- nav --> */}
      {/* <!-- nav button --> */}
      <span className="nav-btn">
        <i className="fas fa-bars showNav" id="nav-btn"></i>
      </span>
      {/* <!-- nav bar --> */}
      <nav className="navbar" id="navbar">
        <div className="navbar-header">
          <span className="nav-close" id="nav-close">
            <i className="fas fa-times"></i>
          </span>
        </div>
        <ul className="nav-items">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
