import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Email, GitHub, Instagram, LinkedIn } from '../assets/svg/exportIcons';
import usePlanStore from '../store/usePlanStore';
import DropDown from '../components/dropDown';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const { selectedPlan, setSelectedPlan } = usePlanStore();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_5me3tyz',
        'template_ra9dcnf',
        form.current,
        {
          publicKey: 'M0reUuZOmaFK8Ti3L',
        }
      )
      .then(
        () => {
          setSubmitStatus('success');
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page" id='contact'>
      <div className="contact-header">
        Let's Connect
      </div>

      <div className="contact-message-form-wrapper">
        <div className="contact-message">
          I'm currently available to take on new projects, so feel free to send me a message about anything you'd like me to work on.
          You can contact me anytime!
        </div>

        {submitStatus === 'success' && (
          <div className="success-message message-wrapper">
            <div className="message-container">
              <div className="messgae">
                Thank you! Your message has been sent successfully.
              </div>
              <button onClick={() => setSubmitStatus(null)}>Okk</button>
            </div>
          </div>
        )}


        {submitStatus === 'error' && (
          <div className="error-message message-wrapper">
            <div className="message-container">
              <div className="messgae">
                Oops! Something went wrong. Please try again later.
              </div>
              <button onClick={() => setSubmitStatus(null)}>Okk</button>
            </div>
          </div>
        )}

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
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


          <DropDown
            values={["Standard", "Premium", "Elite"]}
            placeholder="Select a Plan"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          />

          <button
            type="submit"
            className="form-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/nalvazhuthi-n-a78992347/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedIn />
        </a>
        <a href="https://github.com/Nalvazhuthi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHub />
        </a>
        <a href="mailto:nalvazhuthi2002@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <Email />
        </a>
        <a href="https://www.instagram.com/lyzoo_dev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram />
        </a>
      </div>


    </div>
  );
};

export default Contact;


