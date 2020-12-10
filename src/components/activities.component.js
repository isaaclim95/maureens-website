import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import activities_img from '../img/activities-img.jpg';

export default class Activities extends Component {

  render() {
    return (
      <div className="activities-div">
        <Container className="activities-container" id="activities">
          <Row className="activities-row" style={{ marginBottom: "26px" }}>
            <Col><h2 >Activities</h2></Col>
          </Row>
          <Row className="activities-row">
            <Col>
              <ul style={{ listStyleType: "none" }}>
                <li>Paint & Craft</li>
                <li>Messy play activities</li>
                <li>Sensory activities</li>
                <li>Gardening</li>
                <li>Water play</li>
              </ul>

            </Col>
            <Col>
              <ul style={{ listStyleType: "none" }}>
                <li>Imagination play</li>
                <li>Floor time for babies</li>
                <li>Jumping and climbing</li>
                <li>Building blocks</li>
                <li>and many many more!</li>
              </ul>
            </Col>
            <Col><img className="activities-img" src={activities_img}></img></Col>
          </Row>
        </ Container>
      </div>


    );
  }
}