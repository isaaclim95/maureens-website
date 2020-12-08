import React, { Component } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default class ContactButton extends Component {

    render() {
        return (
            <Button variant="primary" style={{
                height: "80px", width: "50%", borderRadius: "35px", backgroundColor: "pink", fontSize: "20px"
            }} className="contact-button">
                Contact
            </Button>
        );
    }
}