import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class About extends Component {

  render() {
    return (
      <div className="about" id="about">
          <h2>Welcome to Maureen's Family Day Care</h2>
            <p>
                My name is Maureen and I have been running a family day care at my place for 15 years.
                I have Certificate III in Childcare and Diploma in Children Services, and a current CPR, Asthma and
                Anaphylactics certificate.
                I live with my husband Donny. I know how important it is to find an educator you can trust and someone
                who understands
                the highs and lows of being a mum.
            </p>
      </div>

    );
  }
}