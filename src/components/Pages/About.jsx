import React from 'react';
import './About.css'; // Import your CSS file

export const AboutUs = () => {
  const image = { src: "./p1.jpg", alt: "background" }
  const imagestl={
    backgroundImage: `url(${image.src})`,
  }
  const textStyle={
    color: "white",
  }
  return (
    <div className="about-container">
      <section className="hero" style={imagestl}>
      <div className="about-container">
      <div className="half-image"></div>
      <div className="half-text">
        <h1 style={textStyle} >ABOUT US</h1>
      </div>
    </div>
      </section>
      <div className="scroll-text-container">
  <p className="scroll-text">
  We are dedicated to provide critical support during times of crisis.
  </p>
</div>

      <section className="side-by-side-content">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower rescue agencies to save lives and reduce damage through efficient coordination during natural and man-made disasters.
          </p>
        </div>
        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Commitment to Saving Lives</li>
            <li>Collaboration and Communication</li>
            <li>Resilience and Preparedness</li>
            <li>Transparency and Integrity</li>
          </ul>
        </div>
        <div className="team">
          <h2>Meet Our Team</h2>
          {/* Add team members with their names and roles */}
          <div className="team-member">
            <p>G.Varsha</p>
            <p>Ch.Rashmika</p>
          </div>
          <div className="team-member">
            <p>K.Sai Pragnya</p>
            <p>P.Kameshwari</p>
          </div>
          <div className="team-member">
            <p>K.Abhinav Reddy</p>
            <p>N.Chaitanya</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}

