import React, { useState } from "react";
import "../CSS/contact.css";
import facebookIcon from"../Images/facebook.png";
import instagramIcon from "../Images/instagram.png";
import twitterIcon from"../Images/twitter.png";
import threadsIcon from"../Images/threads.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-desc">
        Your Voice Mattters. Connect with us and let's build something great together.
      </p>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Hers's how you can reach us!
          </p>

          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h4>Address</h4>
              <p>Mile 6 Nkwen, Bamenda, Cameroon</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h4>Phone Number</h4>
              <p>+237 678-967-802</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h4>E-Mail</h4>
              <p>cultivreads@gmail.com</p>
            </div>
          </div>

          <div className="socials">
            <h4>Follow Us:</h4>
            <div className="icons">
              <div className="icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>

                <a href="https://threads.com" target="_blank" rel="noopener noreferrer">
                  <img src={threadsIcon} alt="YouTube" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <p className="form-note">
              By submitting, you agree to the processing of your personal data
              as described in our Privacy Statement.
            </p>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
