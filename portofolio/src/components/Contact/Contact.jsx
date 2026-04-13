import React from 'react';
import './Contact.css';
import ShinyText from '../ShinyText/ShinyText';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" data-aos="fade-up" data-aos-duration="1000">
        <div className="contact-header">
          <h2 className="contact-title">
            <ShinyText text="Get In Touch" disabled={false} speed={3} />
          </h2>
          <p className="contact-subtitle">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="contact-card">
          <form 
            action="https://formsubmit.co/nithishkumar1456@gmail.com" 
            method="POST"
            className="contact-form"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.origin + "/portofolio/thankyou"} />

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="email@example.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="How can I help you?" 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <ShinyText text="Send Message" disabled={false} speed={3} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
