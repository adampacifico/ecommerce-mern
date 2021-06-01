import "./Product.css";
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name}/>

      <div className="product__info">
        <div className="name__price">
          <h3 className="product__name">{product.name}</h3>
          <h4 className="product__price">{product.price}</h4>
        </div>

        <p className="product__description">
         {product.description}
        </p>
        <Link to={`/product/${product._id}`} className="product__view">View 
        <i className="fa fa-eye"></i>
        </Link>
      </div>
    </div>
  );
};

export default Product;
