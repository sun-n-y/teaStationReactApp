const Services = () => {
  return (
    <div>
      {' '}
      {/* <!-- services --> */}
      <section className="services" id="services">
        {/* <!-- section title --> */}
        <div className="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div className="section-center clearfix">
          {/* <!-- card --> */}
          <article className="service-card">
            {/* <!-- img container --> */}
            <div className="service-img-container">
              {/* <!-- img --> */}
              <img
                src="./images/product-1.jpeg"
                alt="single service"
                className="service-img"
              />
              {/* <!-- service icon --> */}
              <span className="service-icon">
                <i className="fas fa-mortar-pestle fa-fw"></i>
              </span>
            </div>
            {/* <!-- service info --> */}
            <div className="service-info">
              <h4>custom recipes</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt necessitatibus architecto ullam recusandae distinctio
                reprehenderit.
              </p>
              <a href="products.html" className="btn service-btn">
                read more
              </a>
            </div>
          </article>
          {/* <!-- card end --> */}
          {/* <!-- card --> */}
          <article className="service-card">
            {/* <!-- img container --> */}
            <div className="service-img-container">
              {/* <!-- img --> */}
              <img
                src="./images/product-2.jpeg"
                alt="single service"
                className="service-img"
              />
              {/* <!-- service icon --> */}
              <span className="service-icon">
                <i className="fas fa-home fa-fw"></i>
              </span>
            </div>
            {/* <!-- service info --> */}
            <div className="service-info">
              <h4>home delivery</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt necessitatibus architecto ullam recusandae distinctio
                reprehenderit.
              </p>
              <a href="products.html" className="btn service-btn">
                read more
              </a>
            </div>
          </article>
          {/* <!-- card end --> */}
          {/* <!-- card --> */}
          <article className="service-card">
            {/* <!-- img container --> */}
            <div className="service-img-container">
              {/* <!-- img --> */}
              <img
                src="./images/product-3.jpeg"
                alt="single service"
                className="service-img"
              />
              {/* <!-- service icon --> */}
              <span className="service-icon">
                <i className="fas fa-mug-hot fa-fw"></i>
              </span>
            </div>
            {/* <!-- service info --> */}
            <div className="service-info">
              <h4>tea aging</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt necessitatibus architecto ullam recusandae distinctio
                reprehenderit.
              </p>
              <a href="products.html" className="btn service-btn">
                read more
              </a>
            </div>
          </article>
          {/* <!-- card end --> */}
        </div>
        {/* <!-- section title end --> */}
      </section>
      {/* <!-- services end --> */}
    </div>
  );
};
export default Services;
