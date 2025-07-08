import React, { useState } from 'react';
import usePlanStore from '../store/usePlanStore';

const Pricing = () => {
    const { selectedPlan, setSelectedPlan } = usePlanStore();

    const plans = [
        {
            name: 'Standard',
            price: '₹6,999',
            includes: [
                '1 Page Website',
                'Unlimited Product Listing',
                'Instagram Feed / Gallery',
                'Custom Design',
            ],
            excludes: [
                'WhatsApp / UPI Checkout',
                'SEO Optimization',
                'Online Payments',
                'Payment Gateway',
                'Order Tracking'
            ],
            recommended: false
        },
        {
            name: 'Premium',
            price: '₹12,999',
            includes: [
                '3-5 Page Website',
                'Unlimited Product Listing',
                'Instagram Feed / Gallery',
                'Custom Design',
                'WhatsApp / UPI Checkout',
                'SEO Optimization'
            ],
            excludes: [
                'Online Payments',
                'Payment Gateway',
                'Order Tracking'
            ],
            recommended: true
        },
        {
            name: 'Elite',
            price: '₹19,999',
            includes: [
                '5-8 Page Website',
                'Unlimited Product Listing',
                'Instagram Feed / Gallery',
                'Custom Design',
                'WhatsApp / UPI Checkout',
                'SEO Optimization',
                'Online Payments',
                'Payment Gateway',
                'Order Tracking'
            ],
            excludes: [],
            recommended: false
        }
    ];


    const handleSelectPlan = (name: string) => {
        setSelectedPlan(name);

        // Smooth scroll to the contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="pricing-container" id='pricing'>
            <div className="services-header">
                <h2>Transparent Pricing</h2>
                <p>Choose the perfect plan for your business</p>
            </div>

            <div className="pricing-wrapper">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`plan-wrapper ${plan.recommended ? 'recommended' : ''}`}
                    >
                      

                        <div className="plan-header">
                            <h3>{plan.name}</h3>
                            <div className="plan-price">{plan.price}</div>
                        </div>

                        <div className="plan-features">
                            <ul>
                                {plan.includes.map((feature, i) => (
                                    <li key={`inc-${i}`}>
                                        <span className="feature-icon">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {plan.excludes.length > 0 && (
                                <>
                                    <ul className="excluded-features">
                                        {plan.excludes.map((feature, i) => (
                                            <li key={`exc-${i}`}>
                                                <span className="feature-icon">✗</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                        <button className="plan-cta"
                            onClick={() => handleSelectPlan(plan.name)}
                        >
                            Get {plan.name}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;