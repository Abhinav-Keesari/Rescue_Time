import React from 'react';
import "./Collaborate.css"

export const Collaborate = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>Request Collaboration</h1>
      </div>
      <div className="location-area">
        <div className="location-and-area">
          <div className="location">
            <h2>Location:</h2>
            <input type="text" placeholder="Enter Location" />
          </div>
          <div className="area">
            <h2>Area:</h2>
            <input type="text" placeholder="Enter Area" />
          </div>
        </div>
      </div>
      <div className="agency">
        {/* Agency 1 Details */}
        <div className="agency-box">
          <h2>Agency 1 Details:</h2>
          <div className="agency-info">
            <label>Name:</label>
            <input type="text" className="text-input" placeholder="Agency 1 Name" />
          </div>
          <div className="agency-info">
            <label>Field:</label>
            <input type="text" className="text-input" placeholder="Agency 1 Field" />
          </div>
          <div className="agency-info">
            <label>Location:</label>
            <input type="text" className="text-input" placeholder="Agency 1 Location" />
          </div>
        </div>
        
        {/* Agency 2 Details */}
        <div className="agency-box">
          <h2>Agency 2 Details:</h2>
          <div className="agency-info">
            <label>Name:</label>
            <input type="text" className="text-input" placeholder="Agency 2 Name" />
          </div>
          <div className="agency-info">
            <label>Field:</label>
            <input type="text" className="text-input" placeholder="Agency 2 Field" />
          </div>
          <div className="agency-info">
            <label>Location:</label>
            <input type="text" className="text-input" placeholder="Agency 2 Location" />
          </div>
        </div>
      </div>
    </div>
  );
}







