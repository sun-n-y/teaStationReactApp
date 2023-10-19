const Contact = () => {
  return (
    <div>
      {' '}
      {/* <!-- contact  --> */}
      <section className="contact">
        <div className="section-center clearfix">
          {/* <!-- contact info --> */}
          <article className="contact-info">
            {/* <!-- contact item --> */}
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <i className="fas fa-location-arrow"></i>
                </span>
                address
              </h4>
              <h4 className="contact-text">
                123 North Pole <br />
                EarthOne, 00001
              </h4>
            </div>
            {/* <!-- contact item end --> */}
            {/* <!-- contact item --> */}
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                email
              </h4>
              <h4 className="contact-text">email@email.com</h4>
            </div>
            {/* <!-- contact item end --> */}
            {/* <!-- contact item --> */}
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <i className="fas fa-phone"></i>
                </span>
                telephone
              </h4>
              <h4 className="contact-text">+123456789</h4>
            </div>
            {/* <!-- contact item end --> */}
          </article>
          {/* <!-- contact form --> */}
          <article className="contact-form">
            <h3>contact us</h3>
            <form action="https://formspree.io/f/xvonvoky" method="POST">
              <div className="form-group">
                {/* <!-- inputs --> */}
                <input
                  type="text"
                  name="name"
                  placeholder=" enter name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder=" enter email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              {/* <!-- button --> */}
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </form>
          </article>
        </div>
      </section>
      {/* <!-- contact end --> */}
    </div>
  );
};
export default Contact;
