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
          <li>
            <a href="index.html" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="skills.html" className="nav-link">
              skills
            </a>
          </li>
          <li>
            <a href="about.html" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="products.html" className="nav-link">
              product
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
