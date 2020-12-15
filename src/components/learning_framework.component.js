import React, { Component } from 'react';
import '../App.css';
import learning_framework_img from '../img/learning_framework_img.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class LearningFramework extends Component {

    render() {
        return (
            <div className="learning-framework-div" id="learning-framework">
                <Container className="learning-framework-container" >
                    <Row className="learning-framework-row">

                        <Col>
                            <h2 >Early Years Learning Framework</h2>
                            <p>
                                Maureen's Family Day Care adheres to Australia's Early Years Learning Framework for early childhood educators.
                                The aim of this framework is to extend and enrich children's learning from birth to five years, and through the transition to school.
            </p>
                        </Col>
                        <Col className="learning-framework-col"><img className="learning-framework-img" src={learning_framework_img}></img></Col>
                    </Row>
                </ Container>
            </div>


        );
    }
}