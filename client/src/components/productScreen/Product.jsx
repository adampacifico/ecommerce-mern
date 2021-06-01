import "./Product.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const Product = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty))
    history.push("/cart")
  }

  return (
    <div className="productScreen">
      {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="product__left">
            <div className="left__img">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__details">
              <h3 className="left__pname">{product.name}</h3>
              <h4 className="left__pname">$ {product.price}</h4>
              <hr />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="product__right">
            <h3>
              Price: <span>$ {product.price}</span>
            </h3>
            <h3>
              Status:{" "}
              <span>
                {product.countInStock > 0 ? "In stock" : "Out of Stock"}
              </span>
            </h3>
            <h3>
              Quantity:
              <select
                className="right__options"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </h3>
            <button className="btn__addtocart" onClick={addToCartHandler}>
              Add to cart <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
