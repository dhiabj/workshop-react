import React, { Component } from 'react';
import Product from './Product';
import data from '../data/products.json';
import '../css/Products.css';

export class Products extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = { data: data, message: '', show: false };
  }
  componentDidMount() {
    console.log(this.state.data);
    setTimeout(() => {
      this.setState({ show: true });
    }, '3000');
  }

  buyProduct = () => {
    this.setState({ message: 'You bought an item' });
    console.log(this.state.message);
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
          <div
            className='alert alert-warning alert-dismissible fade show'
            role='alert'>
            <strong>Success!</strong> {this.state.message}
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'></button>
          </div>
        )}
      </div>
    );
  }
}

export default Products;
