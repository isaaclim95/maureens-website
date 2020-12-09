import React, { Component } from 'react';
import '../App.css';
import image1 from '../img/image1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class About extends Component {



  render() {
    return (
      <div className="about-div">
        <Container className="about-container" id="about">
          <Row className="about-row">
            <Col><img className="about-img" src={image1}></img></Col>
            <Col>
              <h2 style={{ textAlign: "center" }}>About Us</h2>
              <p>
                My name is Maureen and I have been running a family day care at my place for 15 years.
                I have Certificate III in Childcare and Diploma in Children Services, and a current CPR, Asthma and
                Anaphylactics certificate.
                I live with my husband Donny. I know how important it is to find an educator you can trust and someone
                who understands
                the highs and lows of being a mum.
            </p>
            </Col>
          </Row>
        </ Container>
      </div>


    );
  }
}