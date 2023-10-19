function App() {
  return (
    <>
      {/* <!-- nav --> */}
      {/* <!-- nav button --> */}
      <span class="nav-btn">
        <i class="fas fa-bars showNav" id="nav-btn"></i>
      </span>
      {/* <!-- nav bar --> */}
      <nav class="navbar" id="navbar">
        <div class="navbar-header">
          <span class="nav-close" id="nav-close">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <ul class="nav-items">
          <li>
            <a href="index.html" class="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="skills.html" class="nav-link">
              skills
            </a>
          </li>
          <li>
            <a href="about.html" class="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="products.html" class="nav-link">
              product
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- header --> */}
      <header class="header">
        <div class="banner">
          <h2>Over one hundred flavors of</h2>
          <h1>
            specially <br />
            crafted tea
          </h1>
          <a href="#services" class="btn banner-btn">
            explore
          </a>
        </div>
      </header>
      {/* <!-- header end --> */}
      <div class="content-divider"></div>
      {/* <!-- skills section --> */}
      <section class="skills clearfix">
        {/* <!-- single skill --> */}
        <article class="skill">
          <span class="skill-icon">
            <i class="fas fa-mug-hot"></i>
          </span>
          <h4 class="skill-title">made in USA</h4>
          <p class="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, accusantium.
          </p>
        </article>
        {/* <!-- single skill end --> */}
        {/* <!-- single skill --> */}
        <article class="skill">
          <span class="skill-icon">
            <i class="fas fa-glass-cheers"></i>
          </span>
          <h4 class="skill-title">relaxation</h4>
          <p class="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, accusantium.
          </p>
        </article>
        {/* <!-- single skill end --> */}
        {/* <!-- single skill --> */}
        <article class="skill">
          <span class="skill-icon">
            <i class="fas fa-bomb"></i>
          </span>
          <h4 class="skill-title">energy</h4>
          <p class="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, accusantium.
          </p>
        </article>
        {/* <!-- single skill end --> */}
        {/* <!-- single skill --> */}
        <article class="skill">
          <span class="skill-icon">
            <i class="fas fa-mortar-pestle"></i>
          </span>
          <h4 class="skill-title">family recipe</h4>
          <p class="skill-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, accusantium.
          </p>
        </article>
        {/* <!-- single skill end --> */}
      </section>
      {/* <!-- skills section end --> */}
      {/* <!-- about  --> */}
      <section>
        <div class="section-center clearfix">
          {/* <!-- about img --> */}
          <article class="about-img">
            <div class="about-picture-container">
              <img
                src="./images/about-bcg.jpeg"
                alt="tea kettle"
                class="about-picture"
              />
            </div>
          </article>
          {/* <!-- about info --> */}
          <article class="about-info">
            {/* <!-- section title --> */}
            <div class="section-title">
              <h3>about our</h3>
              <h2>tea station</h2>
            </div>
            {/* <!-- section title end --> */}
            <p class="about-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quisquam rerum maiores sequi esse temporibus!
            </p>
            <p class="about-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quisquam rerum maiores sequi esse temporibus!
            </p>
            <a href="about.hmtl" class="btn">
              learn more
            </a>
          </article>
        </div>
      </section>
      {/* <!-- about end --> */}
      {/* <!-- products --> */}
      <section class="products">
        <div class="section-center clearfix">
          {/* <!-- product info --> */}
          <article class="product-info">
            {/* <!-- section title --> */}
            <div class="section-title">
              <h3>check out</h3>
              <h2>our products</h2>
            </div>
            {/* <!-- section title end --> */}
            <p class="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nam commodi est, maiores dolore tempore iusto, adipisci animi quo
              amet aspernatur dolores laudantium! Amet, quam!
            </p>
            <a href="products.html" class="btn">
              inventory
            </a>
          </article>
          {/* <!-- product inventory --> */}
          <article class="product-inventory clearfix">
            {/* <!-- single product --> */}
            <div class="product">
              <img
                src="./images/product-1.jpeg"
                alt="single product"
                class="product-img"
              />
              <h4 class="product-title">ginger peach tea</h4>
              <h4 class="product-price">$6.99</h4>
            </div>
            {/* <!-- single product end --> */}
            {/* <!-- single product --> */}
            <div class="product">
              <img
                src="./images/product-2.jpeg"
                alt="single product"
                class="product-img"
              />
              <h4 class="product-title">white tea</h4>
              <h4 class="product-price">$6.99</h4>
            </div>
            {/* <!-- single product end --> */}
            {/* <!-- single product --> */}
            <div class="product">
              <img
                src="./images/product-3.jpeg"
                alt="single product"
                class="product-img"
              />
              <h4 class="product-title">fruit sangria</h4>
              <h4 class="product-price">$6.99</h4>
            </div>
            {/* <!-- single product end --> */}
          </article>
        </div>
      </section>
      {/* <!-- products ends --> */}
      {/* <!-- services --> */}
      <section class="services" id="services">
        {/* <!-- section title --> */}
        <div class="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div class="section-center clearfix">
          {/* <!-- card --> */}
          <article class="service-card">
            {/* <!-- img container --> */}
            <div class="service-img-container">
              {/* <!-- img --> */}
              <img
                src="./images/product-1.jpeg"
                alt="single service"
                class="service-img"
              />
              {/* <!-- service icon --> */}
              <span class="service-icon">
                <i class="fas fa-mortar-pestle fa-fw"></i>
              </span>
            </div>
            {/* <!-- service info --> */}
            <div class="service-info">
              <h4>custom recipes</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt necessitatibus architecto ullam recusandae distinctio
                reprehenderit.
              </p>
              <a href="products.html" class="btn service-btn">
                read more
              </a>
            </div>
          </article>
          {/* <!-- card end --> */}
          {/* <!-- card --> */}
          <article class="service-card">
            {/* <!-- img container --> */}
            <div class="service-img-container">
              {/* <!-- img --> */}
              <img
                src="./images/product-2.jpeg"
                alt="single service"
                class="service-img"
              />
              {/* <!-- service icon --> */}
              <span class="service-icon">
                <i class="fas fa-home fa-fw"></i>
              </span>
            </div>
            {/* <!-- service info --> */}
            <div class="service-info">
              <h4>home delivery</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt necessitatibus architecto ullam recusandae distinctio
                reprehenderit.
              </p>
              <a href="products.html" class="btn service-btn">
                read more
              </a>
            </div>
          </article>
          {/* <!-- card end --> */}
          {/* <!-- card --> */}
          <article class="service-card">
            {/* <!-- img container --> */}
            <div class="service-img-container">
              {/* <!-- img --> */}
              <img
                src="./images/product-3.jpeg"
                alt="single service"
                class="service-img"
              />
              {/* <!-- service icon --> */}
              <span class="service-icon">
                <i class="fas fa-mug-hot fa-fw"></i>
              </span>
            </div>
            {/* <!-- service info --> */}
            <div class="service-info">
              <h4>tea aging</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt necessitatibus architecto ullam recusandae distinctio
                reprehenderit.
              </p>
              <a href="products.html" class="btn service-btn">
                read more
              </a>
            </div>
          </article>
          {/* <!-- card end --> */}
        </div>
        {/* <!-- section title end --> */}
      </section>
      {/* <!-- services end --> */}
      {/* <!-- contact  --> */}
      <section class="contact">
        <div class="section-center clearfix">
          {/* <!-- contact info --> */}
          <article class="contact-info">
            {/* <!-- contact item --> */}
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-location-arrow"></i>
                </span>
                address
              </h4>
              <h4 class="contact-text">
                123 North Pole <br />
                EarthOne, 00001
              </h4>
            </div>
            {/* <!-- contact item end --> */}
            {/* <!-- contact item --> */}
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </span>
                email
              </h4>
              <h4 class="contact-text">email@email.com</h4>
            </div>
            {/* <!-- contact item end --> */}
            {/* <!-- contact item --> */}
            <div class="contact-item">
              <h4 class="contact-title">
                <span class="contact-icon">
                  <i class="fas fa-phone"></i>
                </span>
                telephone
              </h4>
              <h4 class="contact-text">+123456789</h4>
            </div>
            {/* <!-- contact item end --> */}
          </article>
          {/* <!-- contact form --> */}
          <article class="contact-form">
            <h3>contact us</h3>
            <form action="https://formspree.io/f/xvonvoky" method="POST">
              <div class="form-group">
                {/* <!-- inputs --> */}
                <input
                  type="text"
                  name="name"
                  placeholder=" enter name"
                  class="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder=" enter email"
                  class="form-control"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  class="form-control"
                  rows="5"
                ></textarea>
              </div>
              {/* <!-- button --> */}
              <button type="submit" class="submit-btn btn">
                submit here
              </button>
            </form>
          </article>
        </div>
      </section>
      {/* <!-- contact end --> */}
      {/* <!-- footer --> */}
      <footer class="footer">
        <div class="section-center">
          <div class="social-icons">
            {/* <!-- social icon --> */}
            <a href="#" class="social-icon">
              {' '}
              <i class="fab fa-facebook"></i>
            </a>
            {/* <!-- social icon end --> */}
            {/* <!-- social icon --> */}
            <a href="#" class="social-icon">
              {' '}
              <i class="fab fa-twitter"></i>
            </a>
            {/* <!-- social icon end --> */}
            {/* <!-- social icon --> */}
            <a href="#" class="social-icon">
              {' '}
              <i class="fab fa-instagram"></i>
            </a>
            {/* <!-- social icon end --> */}
          </div>
          <h4 class="footer-text">
            &copy; <span>2023 </span>
            <span class="company">tea station</span> all rights reserved
          </h4>
        </div>
      </footer>
      <script src="app.js"></script>
    </>
  );
}

export default App;
