import "./Home.css";
import Product from "./Products/Product";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../../redux/actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="homescreen">
      <h4 className="homescreen__title">Latest Products</h4>

      <div className="homescreen__products">
        {loading ? (
          <h2>Loading....</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => <Product key={product._id}
           product={product}/>)
        )}
      </div>
    </div>
  );
};

export default Home;
