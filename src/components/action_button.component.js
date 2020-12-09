import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'

export default class ActionButton extends Component {

    render() {
        return (
            <Button variant="primary"
                style={{
                    backgroundColor: this.props.backgroundColor, color: this.props.color
                }}
                className="action-button">
                {this.props.title}
            </Button>
        );
    }
}