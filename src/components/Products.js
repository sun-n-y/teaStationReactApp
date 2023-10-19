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
            {/* <!-- single product --> */}
            <div className="product">
              <img
                src="./images/product-1.jpeg"
                alt="single product"
                className="product-img"
              />
              <h4 className="product-title">ginger peach tea</h4>
              <h4 className="product-price">$6.99</h4>
            </div>
            {/* <!-- single product end --> */}
            {/* <!-- single product --> */}
            <div className="product">
              <img
                src="./images/product-2.jpeg"
                alt="single product"
                className="product-img"
              />
              <h4 className="product-title">white tea</h4>
              <h4 className="product-price">$6.99</h4>
            </div>
            {/* <!-- single product end --> */}
            {/* <!-- single product --> */}
            <div className="product">
              <img
                src="./images/product-3.jpeg"
                alt="single product"
                className="product-img"
              />
              <h4 className="product-title">fruit sangria</h4>
              <h4 className="product-price">$6.99</h4>
            </div>
            {/* <!-- single product end --> */}
          </article>
        </div>
      </section>
      {/* <!-- products ends --> */}
    </div>
  );
};
export default Products;
