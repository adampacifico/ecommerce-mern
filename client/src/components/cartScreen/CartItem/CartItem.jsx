import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyHandler, removeFromCart }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        Laptop
      </Link>

      <h4 className="cart__price">${item.price}</h4>

      <select
        className="cartItem__select"
        value={item.qty}
        onChange={(e) => qtyHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button className="cart__delete" onClick={() => removeFromCart(item.product)}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
