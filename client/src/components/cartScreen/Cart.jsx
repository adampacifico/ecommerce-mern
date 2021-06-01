import "./Cart.css";
import CartItem from "./CartItem/CartItem";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
      return  cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }
  const getCartSubtotal = () => {
    return  cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
}
  return (
    <div className="cartScreen">
      <div className="cart__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your Cart is Empty. <Link to="/">Go Shopping!</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyHandler={qtyHandler}
              removeFromCart={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cart__right">
        <div className="cart__info">
          <h3>Subtotal ({getCartCount()}) items</h3>
          <h3>To Pay : $ {getCartSubtotal().toFixed(2)}</h3>
        </div>
        <hr />
        <button className="cart__button__checkout">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
