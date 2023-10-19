const About = () => {
  return (
    <div>
      {' '}
      {/* <!-- about  --> */}
      <section>
        <div className="section-center clearfix">
          {/* <!-- about img --> */}
          <article className="about-img">
            <div className="about-picture-container">
              <img
                src="./images/about-bcg.jpeg"
                alt="tea kettle"
                className="about-picture"
              />
            </div>
          </article>
          {/* <!-- about info --> */}
          <article className="about-info">
            {/* <!-- section title --> */}
            <div className="section-title">
              <h3>about our</h3>
              <h2>tea station</h2>
            </div>
            {/* <!-- section title end --> */}
            <p className="about-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quisquam rerum maiores sequi esse temporibus!
            </p>
            <p className="about-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              quisquam rerum maiores sequi esse temporibus!
            </p>
            <a href="about.hmtl" className="btn">
              learn more
            </a>
          </article>
        </div>
      </section>
      {/* <!-- about end --> */}
    </div>
  );
};
export default About;
