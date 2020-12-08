import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Activities extends Component {

  render() {
    return (
      <Container style={{ marginTop: "5%" }} id="activities">
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>Activities</h2>
            <ul>
              <li> Paint & Craft</li>
              <li>Messy play activities</li>
              <li>Sensory activities</li>
              <li>Using their imagination</li>
              <li>Exploring the world around them</li>
              <li>Planting, watering and harvesting in the kid's vegetable patch</li>
              <li>Using fine motor skills in games and activities</li>
              <li>Jumping, climbing, running and building</li>
              <li>Floor Time for Babies</li>
            </ul></Col>
        </Row>

      </Container>

    );
  }
}