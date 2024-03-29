import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActionButton from './action_button.component';

export default class Hero extends Component {

    render() {
        return (
            <Container className="hero">
                <Row className="hero-row">
                    <Col className="hero-col"><h3>Check for vacancies</h3></Col>
                    <Col className="hero-col"><h3>Contact me here</h3></Col>
                </Row>
                <Row className="hero-row">
                    <Col className="hero-col"><ActionButton title="Vacancies" backgroundColor="orange" color="black" /></Col>
                    <Col className="hero-col"><ActionButton title="Contact" backgroundColor="pink" color="black" /></Col>
                </Row>
            </ Container >


        );
    }
}