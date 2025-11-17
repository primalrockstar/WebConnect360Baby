import React from 'react';
import PageContainer from '../components/PageContainer';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '499',
      period: 'month',
      description: 'Perfect for small EMS operations',
      features: [
        'Up to 5 users',
        'Basic dispatch system',
        'Patient records',
        'Mobile app access',
        'Email support',
        '5GB storage'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: '999',
      period: 'month',
      description: 'Ideal for growing services',
      features: [
        'Up to 25 users',
        'Advanced dispatch',
        'Full suite access',
        'Fleet management',
        'Priority support',
        '50GB storage',
        'Custom reporting',
        'API access'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited users',
        'All features included',
        'Dedicated support',
        'Custom integrations',
        'On-premise option',
        'Unlimited storage',
        'Advanced analytics',
        'SLA guarantee'
      ],
      recommended: false
    }
  ];

  return (
    <PageContainer>
      <div className="pricing fade-in">
        {/* Header */}
        <div className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p className="pricing-intro">
            Choose the plan that fits your needs. All plans include our core EMS features.
            No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <section className="pricing-section">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                variant={plan.recommended ? 'highlight' : 'default'}
                hover
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.recommended && (
                  <div className="recommended-badge">Most Popular</div>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price !== 'Custom' ? (
                    <>
                      <span className="price-currency">$</span>
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="price-custom">Custom Pricing</span>
                  )}
                </div>
                <p className="plan-description">{plan.description}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="plan-feature">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.recommended ? 'primary' : 'secondary'} 
                  fullWidth
                  size="large"
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <SectionHeader 
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="faq-grid">
            <Card className="faq-card">
              <h3 className="faq-question">Can I change plans later?</h3>
              <p className="faq-answer">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </Card>
            <Card className="faq-card">
              <h3 className="faq-question">Is there a free trial?</h3>
              <p className="faq-answer">
                We offer a 14-day free trial on all plans. No credit card required.
              </p>
            </Card>
            <Card className="faq-card">
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">
                We accept all major credit cards, ACH transfers, and can arrange invoicing for enterprise clients.
              </p>
            </Card>
            <Card className="faq-card">
              <h3 className="faq-question">Is my data secure?</h3>
              <p className="faq-answer">
                Absolutely. We use bank-level encryption and are fully HIPAA compliant.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default Pricing;
