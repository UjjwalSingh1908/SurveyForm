import React, { Component } from "react";
import orderonline from "../../assets/orderonline.svg";
import { Col, Container } from "react-bootstrap";
import "./Form.css";
import FormContent from "../FormContent/FormContent";

class Form extends Component {
  render() {
    return (
      <Container fluid className="container">
        <div className="formContainer">
          <div className="imgsize">
            <img
              src={orderonline}
              alt="orderonline"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="questionContainer">
            <span className="heading1">Tell us what you think!</span>
            <FormContent />
          </div>
        </div>
      </Container>
    );
  }
}

export default Form;
