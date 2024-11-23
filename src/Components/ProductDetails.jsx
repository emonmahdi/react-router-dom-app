import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <article className="products-article m-4 p-2">
        <h3>{state.title}</h3>
        <p>{state.description}</p>
        <p>Price: {state.price}</p>
      </article>
    </div>
  );
};

export default ProductDetails;
