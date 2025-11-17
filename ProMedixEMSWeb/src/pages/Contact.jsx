import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@promedixems.com',
      link: 'mailto:support@promedixems.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '1-800-PROMEDIX',
      link: 'tel:+18007766334'
    },
    {
      icon: '📍',
      title: 'Address',
      value: '123 Medical Center Dr, Healthcare City, HC 12345',
      link: null
    }
  ];

  return (
    <PageContainer maxWidth="medium">
      <div className="contact fade-in">
        {/* Header */}
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p className="contact-intro">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <section className="contact-info-section">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <Card key={index} hover className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <h3 className="contact-info-title">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-info-value">
                    {info.value}
                  </a>
                ) : (
                  <p className="contact-info-value">{info.value}</p>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <Card variant="highlight">
            <SectionHeader 
              subtitle="Send us a message"
              title="Contact Form"
              align="center"
            />
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="organization" className="form-label">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Organization"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="6"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button type="submit" variant="primary" size="large" fullWidth>
                Send Message
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </PageContainer>
  );
};

export default Contact;
