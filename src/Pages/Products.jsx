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
    <div>
      <h1>Welcome to Products Page</h1>
      {isLoading && <p>Products Are Loading.........</p>}
      {error && <p> Some Error! </p>}
      {!isLoading && !error && (
        <section className="product-container">
          <div>
            {products.map((product) => {
              const { id, title, description, price } = product;
              return (
                <article key={id} className="products-article">
                  <h3>{title}</h3>
                  <p>{description.substring(0, 150)}......</p>
                  <p>Price: {price}</p>
                  <Link to={`/product/${id}`} state={product}>
                    {" "}
                    Show Details
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
