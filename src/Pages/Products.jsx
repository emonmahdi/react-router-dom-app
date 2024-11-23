import { useEffect, useState } from "react";

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
      <section className="product-container">
        <div>
          {products.map((product) => {
            const { id, title } = product;
            return (
              <article key={id}>
                <h3>{title}</h3>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
