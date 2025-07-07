import React from 'react';

const Services = () => {
    const techSpecs = [
        {
            title: "Custom Website Development",
            description:
                "I build tailor-made websites that align with your brand, business goals, and functionality requirements.",
        },
        {
            title: "Responsive Web Design",
            description:
                "I design and develop mobile-friendly websites that work seamlessly across devices and screen sizes.",
        },
        {
            title: "UI/UX Design",
            description:
                "I create intuitive, user-centered designs using Figma — ensuring a great user experience and clear layout.",
        },
        {
            title: "Modern Front-End Development",
            description:
                "I use modern frameworks like React, Next.js, and JavaScript (ES6+) to build high-performance, interactive websites.",
        },
        {
            title: "Performance Optimization & SEO",
            description:
                "I optimize websites for speed and search engines — improving load times, accessibility, and organic visibility.",
        },
        {
            title: "CMS & eCommerce Integration",
            description:
                "I integrate platforms like WordPress, Sanity, or Shopify, allowing you to manage content or sell products easily.",
        },
    ];


    return (
        <section className="services-page" id='services'>
            <header className="services-header">
                <h2>My Specializations</h2>
                <p className="services-subHeader">Here’s how I can help elevate your digital product</p>
            </header>

            <div className="services-list">
                {techSpecs.map((spec, index) => (
                    <div className="service-card" key={index}>
                        <h3>{spec.title}</h3>
                        <p>{spec.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
