import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../App.css';

export default class TopNavbar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="top-navbar">
                    <Navbar.Brand href="#home" className="navbar-logo">Maureen's Family Day Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" fixed="bottom">
                        <Nav className="mr-auto" fixed="bottom">
                            <Nav.Link href="#about" className="nav-link" id="about-nav-link" fixed="bottom">About</Nav.Link>
                            <Nav.Link href="#activities" className="nav-link" id="activities-nav-link">Activities</Nav.Link>
                            <Nav.Link href="#learning-framework" className="nav-link" id="learning-framework-nav-link">Learning framework</Nav.Link>
                            <Nav.Link href="#routine" className="nav-link" id="routine-nav-link">Routine</Nav.Link>
                            <Nav.Link href="#contact" className="nav-link" id="contact-nav-link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}