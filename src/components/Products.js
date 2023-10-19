import { products } from '../data';

const Products = () => {
  return (
    <div>
      {' '}
      {/* <!-- products --> */}
      <section className="products">
        <div className="section-center clearfix">
          {/* <!-- product info --> */}
          <article className="product-info">
            {/* <!-- section title --> */}
            <div className="section-title">
              <h3>check out</h3>
              <h2>our products</h2>
            </div>
            {/* <!-- section title end --> */}
            <p className="product-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nam commodi est, maiores dolore tempore iusto, adipisci animi quo
              amet aspernatur dolores laudantium! Amet, quam!
            </p>
            <a href="products.html" className="btn">
              inventory
            </a>
          </article>
          {/* <!-- product inventory --> */}
          <article className="product-inventory clearfix">
            {products.map((product) => {
              const { id, image, title, price } = product;
              return (
                <div className="product" key={id}>
                  <img
                    src={image}
                    alt="single product"
                    className="product-img"
                  />
                  <h4 className="product-title">{title}</h4>
                  <h4 className="product-price">${price}</h4>
                </div>
              );
            })}
          </article>
        </div>
      </section>
      {/* <!-- products ends --> */}
    </div>
  );
};
export default Products;
