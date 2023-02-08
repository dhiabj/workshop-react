import React, { Component } from "react";
import Product from "./Product";
import data from "../data/products.json";

export class Products extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = { data: data };
  }
  componentDidMount() {
    console.log(this.state.data);
  }
  render() {
    return (
      <div>
        {this.state.data.map((product) => (
          <Product product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
