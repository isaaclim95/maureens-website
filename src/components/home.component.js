import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';

export default class Home extends Component {

  render() {
    return (
      // <img src={image1}></img>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5}></img>
        </Carousel.Item>
      </Carousel>
    );
  }
}