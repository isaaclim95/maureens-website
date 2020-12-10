import React, { Component } from 'react';
import '../App.css';
import learning_framework_img from '../img/learning_framework_img.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Contact extends Component {

    render() {
        return (
            <div className="contact-div" id="contact">
                <Container className="contact-container" >
                    <Row className="contact-row">
                        <Col>
                            <h2>Routine</h2>
                            <p>
                                At Maureen's family day care, our daily routine can vary according to the children's
                                needs each day.
                            </p>
                        </Col>
                    </Row>
                </ Container>
            </div>


        );
    }
}