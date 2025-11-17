import React from 'react';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '🏥',
      title: 'Emergency Response',
      description: 'Rapid response system with real-time tracking and communication for emergency medical services.'
    },
    {
      icon: '📊',
      title: 'Patient Management',
      description: 'Comprehensive patient data management with secure cloud storage and instant access.'
    },
    {
      icon: '🚑',
      title: 'Fleet Tracking',
      description: 'Advanced GPS tracking and route optimization for ambulance fleet management.'
    },
    {
      icon: '📱',
      title: 'Mobile Access',
      description: 'Access critical information anywhere with our mobile-responsive platform.'
    }
  ];

  return (
    <PageContainer>
      <div className="home">
        {/* Hero Section */}
        <section className="hero-section fade-in">
          <div className="hero-content">
            <h1 className="hero-title">
              Next-Generation Emergency Medical Services
            </h1>
            <p className="hero-description">
              Revolutionizing emergency response with cutting-edge technology, 
              real-time communication, and intelligent dispatch systems.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="large">Get Started</Button>
              <Button variant="secondary" size="large">Learn More</Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="pulse-circle pulse-1"></div>
            <div className="pulse-circle pulse-2"></div>
            <div className="pulse-circle pulse-3"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <SectionHeader 
            subtitle="Our Features"
            title="Comprehensive EMS Solutions"
          />
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} hover className="feature-card slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <Card variant="highlight" className="cta-card">
            <h2 className="cta-title">Ready to Transform Your EMS Operations?</h2>
            <p className="cta-description">
              Join hundreds of emergency medical services using ProMedix EMS for better outcomes.
            </p>
            <Button variant="primary" size="large">Schedule a Demo</Button>
          </Card>
        </section>
      </div>
    </PageContainer>
  );
};

export default Home;
