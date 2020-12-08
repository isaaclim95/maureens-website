import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckAvailability from './check_availability.component';
import ContactButton from './contact_button.component';

export default class Hero extends Component {

    render() {
        return (
            <Container style={{
            }} className="hero">
                <Row className="hero-row">
                    <Col className="hero-col"><CheckAvailability /></Col>
                    <Col className="hero-col"><ContactButton /></Col>
                </Row>
            </ Container >


        );
    }
}