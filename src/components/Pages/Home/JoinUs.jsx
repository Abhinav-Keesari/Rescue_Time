// src/components/JoinUsButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Joinus.css"

const JoinUsButton = () => {
  return (
    <div className='glowing-button-container'>
    <Link to="/registration">
      <button className="glowing-button">Join Us</button>
    </Link>
    </div>
  );
};

export default JoinUsButton;
