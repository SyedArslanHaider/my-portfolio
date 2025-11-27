import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
       <a 
  href="mailto:arslanhaider231@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Arslan,%20I%20want%20to%20talk%20about..."
  className="btn btn-primary"
>
  <Mail size={20} style={{ marginRight: '0.5rem' }} />
  Send me an email
</a>
<div className="social-links">
  <a 
    href="https://github.com/SyedArslanHaider" 
    className="social-link" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Github size={24} />
  </a>

  <a 
    href="https://www.linkedin.com/in/syed-arslan-haider-4a9065140/" 
    className="social-link" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Linkedin size={24} />
  </a>

  <a 
    href="mailto:arslanhaider231@gmail.com" 
    className="social-link"
  >
    <Mail size={24} />
  </a>
</div>

      </div>
    </section>
  );
}

export default Contact;