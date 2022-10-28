import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    // e.preventDefault();
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p> {product.title} </p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img
            src="https://w7.pngwing.com/pngs/535/334/png-transparent-computer-icons-add-button-logo-number-add-button-thumbnail.png"
            alt=""
          />
        </figure>
        {/* {cart} */}
      </div>
    </div>
  );
};

export default ProductItem;
