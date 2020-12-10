import React, { Component } from 'react';
import '../App.css';
import learning_framework_img from '../img/learning_framework_img.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'

export default class Routine extends Component {

    render() {
        return (
            <div className="routine-div" id="routine">
                <Container className="routine-container" >
                    <Row className="routine-row">
                        <Col>
                            <h2>Routine</h2>
                            <p>
                                At Maureen's family day care, our daily routine can vary according to the children's
                                needs each day.
                            </p>
                        </Col>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Activities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7:30am-9:00am</td>
                                        <td>Arrival, settling, free play, music</td>
                                    </tr>
                                    <tr>
                                        <td>9:00am-9:30am</td>
                                        <td>Inside activities and inivitations to play set up for
                            children to explore and investigate, If there are babies, cuddle time, feed and sleep</td>
                                    </tr>
                                    <tr>
                                        <td>10:00am-11:00am</td>
                                        <td>Outside play and learning if we are not on excursion - incorporating messy art and craft
                            activities</td>
                                    </tr>
                                    <tr>
                                        <td>11:00am-11:30am</td>
                                        <td>Learning Circle - Different experiences planned for each day and will include some of the
                            following: Stories, dance, music, stretching, feltboard fun, activities as a group, singing</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </ Container>
            </div>


        );
    }
}