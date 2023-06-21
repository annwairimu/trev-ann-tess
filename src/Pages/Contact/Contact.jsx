import React, { useState } from 'react';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform additional logic like sending the form data to a server

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Display a success message or perform any other actions
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h1>Get in touch</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <a href="tel:1234567890">
          <FiPhone />
          <span>123-456-7890</span>
        </a>
        <a href="mailto:example@example.com">
          <FiMail />
          <span>example@example.com</span>
        </a>
        <a href="https://www.linkedin.com/your-profile-link" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
}

export default ContactPage;

