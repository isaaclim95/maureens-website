import React, { Component } from 'react';
import '../App.css';
import about_img from '../img/about_img.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class About extends Component {



  render() {
    return (
      <div className="about-div" id="about">
        <Container className="about-container" >
          <Row className="about-row">

            <Col>
              <h2 >About</h2>
              <p>
                My name is Maureen and I have been running a Family Day care at my home for 15 years. I aim to provide children with a comfortable and safe environment, where they can learn and play to their heart’s content.
            </p>
            </Col>
            <Col className="about-col"><img className="about-img" src={about_img}></img></Col>
          </Row>
        </ Container>
      </div>


    );
  }
}