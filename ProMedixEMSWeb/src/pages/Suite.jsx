import React from 'react';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Suite.css';

const Suite = () => {
  const suiteModules = [
    {
      title: 'Dispatch Management',
      description: 'Intelligent dispatch system with AI-powered routing and resource allocation.',
      features: ['Real-time dispatch', 'Auto-assignment', 'Priority queuing', 'Multi-unit coordination']
    },
    {
      title: 'Patient Records',
      description: 'Comprehensive electronic patient care reporting with HIPAA compliance.',
      features: ['Digital PCR forms', 'Medical history', 'Treatment protocols', 'Secure cloud storage']
    },
    {
      title: 'Fleet Management',
      description: 'Complete vehicle tracking and maintenance management system.',
      features: ['GPS tracking', 'Maintenance alerts', 'Fuel monitoring', 'Route optimization']
    },
    {
      title: 'Billing & Insurance',
      description: 'Automated billing and insurance claim processing for seamless operations.',
      features: ['Auto-billing', 'Insurance verification', 'Claims tracking', 'Revenue analytics']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance metrics for data-driven decisions.',
      features: ['Response times', 'Call volume analysis', 'Performance metrics', 'Custom reports']
    },
    {
      title: 'Mobile App',
      description: 'Native mobile applications for iOS and Android field operations.',
      features: ['Offline mode', 'Push notifications', 'Digital signatures', 'Photo capture']
    }
  ];

  return (
    <PageContainer>
      <div className="suite fade-in">
        {/* Header */}
        <div className="suite-header">
          <h1>ProMedix EMS Suite</h1>
          <p className="suite-intro">
            A complete, integrated platform for emergency medical services. 
            Every module works seamlessly together to provide the most comprehensive EMS solution available.
          </p>
        </div>

        {/* Modules Grid */}
        <section className="modules-section">
          <SectionHeader 
            subtitle="Full Suite"
            title="Integrated Modules"
          />
          <div className="modules-grid">
            {suiteModules.map((module, index) => (
              <Card key={index} hover className="module-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="module-title">{module.title}</h3>
                <p className="module-description">{module.description}</p>
                <ul className="module-features">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="module-feature">
                      <span className="feature-checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="integration-section">
          <Card variant="highlight" className="integration-card">
            <SectionHeader 
              subtitle="Seamless Integration"
              title="All Modules Work Together"
              align="center"
            />
            <p className="integration-description">
              Our suite is designed with integration in mind. Data flows seamlessly between modules, 
              eliminating duplicate entry and ensuring consistency across your entire operation.
            </p>
            <Button variant="primary" size="large">Request a Demo</Button>
          </Card>
        </section>
      </div>
    </PageContainer>
  );
};

export default Suite;
