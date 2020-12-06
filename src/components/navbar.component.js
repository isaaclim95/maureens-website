import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../App.css';

export default class TopNavbar extends Component {

  render() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navvie">
                <Navbar.Brand href="#home" className="navbar-brand">Maureen's Family Day Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#activities">Activities</Nav.Link>
                        <Nav.Link href="#framework">Learning framework</Nav.Link>
                        <Nav.Link href="#routine">Routine</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }
}