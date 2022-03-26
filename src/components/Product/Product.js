import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleCart } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="Product image" />
            <div className="product-info">
                <h4>{name}</h4>
                <h4>Price : ${price}</h4>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} ⭐</p>
            </div>
            <button onClick={() => handleCart(product)}>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </span></button>
        </div>
    );
};

export default Product;