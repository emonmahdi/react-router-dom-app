import { Link, useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <article className="single-product">
        <img
          src={
            state.images && state.images.length > 0
              ? state.images[0]
              : "https://via.placeholder.com/300"
          }
          alt={state.title || "product-image"}
        />
        <div className="single-product-content">
          <h3>{state.title}</h3>
          <p>
            <b>Category:</b> {state.category}
          </p>
          <p>
            <b>Rating:</b> {state.rating}
          </p>
          <p>
            <b>Brand:</b> {state.brand}
          </p>
          <p>{state.description}</p>
          <p>
            <b>Price: </b>
            {state.price}
          </p>
          <p>
            <b>Stock:</b> {state.stock}
          </p>
          <Link to={`/product`}>Go To Shopping</Link>
        </div>
      </article>
    </div>
  );
};

export default ProductDetails;
