
import React, { useState } from 'react';
import '../CSS/contact.css';

export default function Contact() {
  const [form, setForm] = useState({ }); // to handle the input change
  // const [status, setStatus] = useState(null);

  const handleChange = (e) => {
      const { name, value} = e.target
      setForm( prev => ({...prev, [name]: value}));
  }


  return (
    <main className="contact-page" aria-labelledby="contact-heading">
      <section className="contact-card">
        <h1 id="contact-heading" className="contact-title">Get in touch</h1>
        <p className="contact-sub">Have a question, feedback or a story to share? Drop a message below.</p>

        <form className="contact-form" noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Short summary"
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Send Message</button>
            {status && <span className="status">{status}</span>}
          </div>
        </form>

        <aside className="contact-info" aria-label="contact information">
          <h2 className="info-title">Other ways to reach us</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@cultivblogs.com">hello@cultivblogs.com</a></li>
            <li><strong>Location:</strong> Remote</li>
            <li><strong>Twitter:</strong> <a href="https://twitter.com/" rel="noopener noreferrer">@cultivblogs</a></li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

