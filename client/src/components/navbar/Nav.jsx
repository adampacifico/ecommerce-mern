import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = ({ show }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <div className="navbar">
      <h3 className="nav__logo">MERN-SHOPPINGCART</h3>

      <ul className="nav__links">
        <li>
          <Link to="/">SHOP</Link>
        </li>
        <li>
          <Link to="/cart" className="nav__cart">
            <i className="fa fa-shopping-cart"></i>
            <span>{getCartCount()}</span>
          </Link>
        </li>
      </ul>
      <div className="nav__hamburger" onClick={show}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
