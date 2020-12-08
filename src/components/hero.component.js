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
            <Container style={{backgroundColor: "#7acedc", margin: "0px"
            }} className="hero">
                <Row className="hero-row" style={{width: "100%", marginRight: "0"}}>
                    <Col className="hero-col"><CheckAvailability /></Col>
                    <Col className="hero-col"><ContactButton /></Col>
                </Row>
            </ Container >


        );
    }
}