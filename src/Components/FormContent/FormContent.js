import React, { Component } from "react";
import "./FormContent.css";

export default class FormContent extends Component {
  state = {
    step: 1,

    place: "",
    app: "",
    drink: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div className="form">
            <div className="heading2">1. Where do you eat often:</div>
            <label for="radio-1">
              <input
                className="radio"
                type="radio"
                name="place"
                onChange={() =>
                  this.setState({ place: "home" }, () => {
                    setTimeout(() => this.setState({ step: 5 }), 400);
                  })
                }
                id="radio-1"
              />
              <span>Home</span>
            </label>

            <label for="radio-2">
              <input
                className="radio"
                type="radio"
                name="place"
                onChange={() =>
                  this.setState({ place: "dineIn" }, () => {
                    setTimeout(() => this.setState({ step: 5 }), 400);
                  })
                }
                id="radio-2"
              />
              <span>Dine-In</span>
            </label>

            <label for="radio-3">
              <input
                className="radio"
                type="radio"
                name="place"
                onChange={() =>
                  this.setState({ place: "home" }, () => {
                    setTimeout(() => this.setState({ step: 2 }), 400);
                  })
                }
                id="radio-3"
              />
              <span>Delivery</span>
            </label>
          </div>
        );
      case 2:
        return (
          <div className="form">
            <div className="heading2">2. How do you order online:</div>
            <label for="radio-4">
              <input
                className="radio"
                type="radio"
                name="app"
                onChange={() =>
                  this.setState({ app: "zomato" }, () => {
                    setTimeout(() => this.setState({ step: 5 }), 400);
                  })
                }
                id="radio-4"
              />
              <span>Zomato</span>
            </label>

            <label for="radio-5">
              <input
                className="radio"
                type="radio"
                name="app"
                onChange={() =>
                  this.setState({ app: "swiggy" }, () => {
                    setTimeout(() => this.setState({ step: 3 }), 400);
                  })
                }
                id="radio-5"
              />
              <span>Swiggy</span>
            </label>
          </div>
        );
      case 3:
        return (
          <div className="form">
            <div className="heading2">
              3. Which drink do you often order with your food:
            </div>
            <label for="radio-6">
              <input
                className="radio"
                type="radio"
                name="drink"
                onChange={() =>
                  this.setState({ drink: "thumbsUp" }, () => {
                    setTimeout(() => this.setState({ step: 5 }), 400);
                  })
                }
                id="radio-6"
              />
              <span>Thumbs Up</span>
            </label>

            <label for="radio-7">
              <input
                className="radio"
                type="radio"
                name="drink"
                onChange={() =>
                  this.setState({ drink: "cocacola" }, () => {
                    setTimeout(() => this.setState({ step: 5 }), 400);
                  })
                }
                checked={false}
                id="radio-7"
              />
              <span>Coca Cola</span>
            </label>

            <label for="radio-8">
              <input
                className="radio"
                type="radio"
                name="drink"
                onChange={() =>
                  this.setState({ drink: "mirinda" }, () => {
                    setTimeout(() => this.setState({ step: 4 }), 400);
                  })
                }
                id="radio-8"
              />
              <span>Mirinda</span>
            </label>

            <label for="radio-9">
              <input
                className="radio"
                type="radio"
                name="drink"
                onChange={() =>
                  this.setState({ drink: "fanta" }, () => {
                    setTimeout(() => this.setState({ step: 4 }), 400);
                  })
                }
                id="radio-9"
              />
              <span>Fanta</span>
            </label>
          </div>
        );

      case 4:
        return (
          <div className="form">
            <div className="heading2">
              4. What do you like about the drink you selected in the previous
              question?
            </div>
            <div>
              <textarea
                className="text"
                name="description"
                type="text"
                onChange={this.handleChange}
                rows="4"
              />
            </div>
            <div className="buttonContainer">
              <button
                className="button"
                onClick={() => {
                  setTimeout(() => this.setState({ step: 5 }), 400);
                  console.log(this.state);
                }}
              >
                Done!
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="svgContainer">
            <div>
              <svg
                class="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>

            <div className="heading3">Completed!</div>
          </div>
        );

      default:
        return null;
    }
  }
}
