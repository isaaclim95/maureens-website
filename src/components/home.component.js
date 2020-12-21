import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";

export default class Home extends Component {
  render() {
    return (
      <Carousel
        className="carousel"
        fade="true"
        touch="true"
        pause="true"
        nextIcon=""
        nextLabel=""
        prevIcon=""
        prevLabel=""
      >
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={image1}
            alt="Kids on a boat"
          ></img>
          <div class="carousel-caption">
            Welcome to Maureen's Family Day Care
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={image2}
            alt="Kids on a boat"
          ></img>
          <div class="carousel-caption">
            Welcome to Maureen's Family Day Care
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={image3}
            alt="Kids on a boat"
          ></img>
          <div class="carousel-caption">
            Welcome to Maureen's Family Day Care
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
