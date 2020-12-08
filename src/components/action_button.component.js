import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'

export default class ActionButton extends Component {

    render() {
        return (
            <Button variant="primary" style={{
                height: "80px", width: "80%", borderRadius: "35px", backgroundColor: this.props.backgroundColor, fontSize: "4vw"
            }} className="contact-button">
                {this.props.title}
            </Button>
        );
    }
}