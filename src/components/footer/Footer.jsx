import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>My</span>Website</h1>
          <p>
            MyWebsite is a place where you can find great content and connect with amazing people.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +1 123 456 789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@mywebsite.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>Privacy Policy</li></a>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; mywebsite.com | Designed by YourName
      </div>
    </footer>
  );
}

export default Footer;
