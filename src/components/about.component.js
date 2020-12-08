import React, { Component } from 'react';
import '../App.css';
import image1 from '../img/image1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  B1: "about-img",
  B2: "about-col",        
}

export default class About extends Component {

  

  render() {
    return (
      <Container style={{ marginTop: "5%" }} className="about" id="about">
        <Row className="about-row">
          <Col><img src={image1} className={`${styles.B2} ${styles.B1}`}></img></Col>
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

    );
  }
}