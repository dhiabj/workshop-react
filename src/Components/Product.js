import React, { Component } from "react";

export class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require(`../assets/images/${product.img}`)}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} DT</p>
            <p className="card-text">Quantity: {product.quantity}</p>
            <p className="card-text">Likes: {product.like}</p>
            <a href="#" className="btn btn-primary">
              Like
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
