import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);

  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be Fetched!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading && <p>Products Are Loading.........</p>}
      {error && <p>Some Error!</p>}
      {!isLoading && !error && (
        <article className="single-product">
          <img
            src={
              product.images && product.images.length > 0
                ? product.images[0]
                : "https://via.placeholder.com/300"
            }
            alt={product.title || "product-image"}
          />
          <div className="single-product-content">
            <h3>{product.title}</h3>
            <p>
              <b>Category:</b> {product.category}
            </p>
            <p>
              <b>Rating:</b> {product.rating}
            </p>
            <p>
              <b>Brand:</b> {product.brand}
            </p>
            <p>{product.description}</p>
            <p>
              <b>Price: </b>
              {product.price}
            </p>
            <p>
              <b>Stock:</b> {product.stock}
            </p>
            <Link to={`/product`}>Go To Shopping</Link>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
