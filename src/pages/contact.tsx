import React from 'react';


const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        Let's Connect
      </div>

      <div className="contact-message-form-wrapper">
        <div className="contact-message">
          I'm currently available to take on new projects, so feel free to send me a message about anything you'd like me to work on.
          You can contact me anytime!
        </div>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="form-textarea"
          />
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="social-links">
        <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      
    </div>
  );
};

export default Contact;
