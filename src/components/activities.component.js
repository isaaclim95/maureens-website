import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Activities extends Component {

  render() {
    return (
      <div className="activities" id="activities">
          <h3>Activities</h3>
            <ul>
                <li> Paint & Craft</li>
                <li>Messy play activities</li>
                <li>Sensory activities</li>
                <li>Using their imagination</li>
                <li>Exploring the world around them</li>
                <li>Planting, watering and harvesting in the kid's vegetable patch</li>
                <li>Using fine motor skills in games and activities</li>
                <li>Jumping, climbing, running and building</li>
                <li>Floor Time for Babies</li>
            </ul>
      </div>

    );
  }
}