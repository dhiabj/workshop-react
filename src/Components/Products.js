import React, { Component } from 'react';
import Product from './Product';
import data from '../data/products.json';
import '../css/Products.css';

export class Products extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = { data: data, message: false, show: false };
  }
  componentDidMount() {
    console.log(this.state.data);
    setTimeout(() => {
      this.setState({ show: true });
    }, '3000');
  }

  buyProduct = () => {
    this.setState({ message: true });
    console.log(this.state.message);
    setTimeout(() => {
      this.setState({ message: false });
    }, '3000');
  };

  render() {
    return (
      <div className='container mt-5 '>
        {this.state.show && (
          <div className='alert alert-success' role='alert'>
            <h4 className='alert-heading'>Welcome!</h4>
            <p>
              Thank you for choosing our store, we hope you enjoy your shopping
              experience !
            </p>
          </div>
        )}
        <div className='wrap mb-3'>
          {this.state.data.map((product, index) => (
            <Product
              product={product}
              key={index}
              buyProduct={this.buyProduct}
            />
          ))}
        </div>
        {this.state.message && (
          <div className='alert alert-warning' role='alert'>
            <strong>Success!</strong> You bought an item
          </div>
        )}
      </div>
    );
  }
}

export default Products;
