import { services } from '../data';

const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="section-title services-title">
          <h3>explore</h3>
          <h2>our services</h2>
        </div>
        <div className="section-center clearfix">
          {services.map((service) => {
            const { id, image, title, icon, href, text } = service;
            return (
              <article className="service-card" key={id}>
                <div className="service-img-container">
                  <img
                    src={image}
                    alt="single service"
                    className="service-img"
                  />
                  <span className="service-icon">
                    <i className={icon}></i>
                  </span>
                </div>
                <div className="service-info">
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <a href={href} className="btn service-btn">
                    read more
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Services;
