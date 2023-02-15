import React, { useState } from 'react';
import '../css/Product.css';

const Product = ({ product, buyProduct }) => {
  const [likes, setlikes] = useState(product.like);
  const handleLikes = () => {
    setlikes(likes + 1);
    console.log(likes);
    //console.log(product.like);
  };

  return (
    <div
      className={likes > 5 ? 'card me-5 bestProduct' : 'card me-5'}
      style={{ width: '18rem' }}>
      <img
        src={require(`../assets/images/${product.img}`)}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <p className='card-text'>{product.description}</p>
        <p className='card-text'>{product.price} DT</p>
        <p className='card-text'>Quantity: {product.quantity}</p>
        <p className='card-text'>Likes: {likes}</p>
        <div className='d-flex justify-content-between'>
          <button
            className='btn btn-primary'
            onClick={() => {
              handleLikes();
            }}>
            Like
          </button>
          <button
            className='btn btn-warning'
            disabled={product.quantity === 0}
            onClick={buyProduct}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
