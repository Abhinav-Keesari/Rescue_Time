import React from 'react';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="col-md-6">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
