import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Contact extends Component {

    render() {
        return (
            <div className="contact-div" id="contact">
                <Container className="contact-container" >
                    <Row className="contact-row1">
                        <Col>
                            <h2>Contact</h2>
                        </Col>
                    </Row>
                    <Row className="contact-row2">
                        <Col>
                            <h4>Phone number: 0421 401 896</h4>
                        </Col>
                        <Col><h4>Address: 8 Mikado Way, Robina, Gold Coast, 4226, QLD</h4></Col>
                    </Row>
                </ Container>
            </div>


        );
    }
}