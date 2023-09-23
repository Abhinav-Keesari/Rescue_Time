import React from 'react';
import './Login.css'; // Import the CSS file

export const Login = () => {
  return (
    <div className='main'>
    <div className="whole">
      <div className="container">
        <form action="#" method="post">
          <h1 className="login">Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Sign In</button>
          </div>
        </form>
      </div>

      {/* <div className="container-2">
        <img className="imgdiv" src="./Logo.jpeg" alt="Logo.img" height="402" />
      </div> */}
    </div>
    </div>
  );
}


