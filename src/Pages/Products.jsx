import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be Fetched!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2 className="text-center" style={{ textAlign: "center" }}>
        All Products
      </h2>
      <div className="products-container">
        {isLoading && <p>Products Are Loading.........</p>}
        {error && <p>Some Error!</p>}
        {!isLoading && !error && (
          <section className="products">
            {products.map((product) => {
              const { id, title, description, category, price, images } =
                product;
              return (
                <article key={id} className="products-article">
                  <img
                    src={
                      images && images.length > 0
                        ? images[0]
                        : "https://via.placeholder.com/300"
                    }
                    alt={title || "product-image"}
                    style={{
                      width: "100%",
                      height: "10rem",
                      objectFit: "cover",
                    }}
                  />
                  <h3>{title}</h3>
                  <p>Category: {category}</p>
                  <p>{description.substring(0, 150)}......</p>
                  <p>Price: {price}</p>
                  <Link to={`/product/${id}`} state={product}>
                    Show Details
                  </Link>
                </article>
              );
            })}
          </section>
        )}
      </div>
    </>
  );
};
