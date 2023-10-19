import { contacts } from '../data';

const Contact = () => {
  return (
    <div>
      {' '}
      {/* <!-- contact  --> */}
      <section className="contact">
        <div className="section-center clearfix">
          {/* <!-- contact info --> */}
          <article className="contact-info">
            {contacts.map((contact) => {
              const { id, icon, type, text } = contact;
              return (
                <div className="contact-item" key={id}>
                  <h4 className="contact-title">
                    <span className="contact-icon">
                      <i className={icon}></i>
                    </span>
                    {type}
                  </h4>
                  <h4 className="contact-text">{text}</h4>
                </div>
              );
            })}
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
