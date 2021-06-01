import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, close }) => {
  const sideDrawer = ["sidedrawer"];
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  if (show) {
    sideDrawer.push("show");
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div className={sideDrawer.join(" ")}>
      <ul className="sidedrawer__links" onClick={close}>
        <li>
          <Link to="/">SHOP</Link>
        </li>
        <li>
          <Link to="/cart" className="sidedrawer__cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="sidedrawer__cart--badge">{getCartCount()}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
