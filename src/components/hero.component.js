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
                    <Col className="hero-col"><ActionButton title="Vacancies" backgroundColor="orange"/></Col>
                    <Col className="hero-col"><ActionButton title="Contact" backgroundColor="pink"/></Col>
                </Row>
            </ Container >


        );
    }
}