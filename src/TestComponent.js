import React, { Component } from "react";

export class TestComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = { counter: 0 };
    console.log("Hello");
  }

  componentDidMount() {
    console.log("Hello did mount");
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  }
  render() {
    return (
      <>
        <div>TestComponent</div>
        <h1>{this.state.counter}</h1>
        <button
          type="button"
          onClick={() => {
            this.handleClick();
          }}>
          increment
        </button>
      </>
    );
  }
}

export default TestComponent;
