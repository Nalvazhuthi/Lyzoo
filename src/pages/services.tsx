import React from 'react';

const Services = () => {
    const techSpecs = [
        {
            title: "Responsive Web Design",
            description: "I design websites that look and function great across all devices, ensuring a seamless user experience.",
        },
        {
            title: "Modern Front-End Development",
            description: "I build high-performance interfaces using React, Next.js, and JavaScript (ES6+).",
        },
        {
            title: "UI/UX Design",
            description: "I design clean, user-centered layouts using Figma, focusing on clarity, accessibility, and conversion.",
        },
        {
            title: "3D Web Experiences",
            description: "I create immersive 3D interfaces using Three.js and React Three Fiber to make your brand stand out.",
        },
        {
            title: "Component-Based Design",
            description: "I write scalable code using reusable components and design systems for maintainability and speed.",
        },
        {
            title: "SCSS & Tailwind CSS",
            description: "I use SCSS for structured styles and Tailwind CSS for rapid prototyping and consistent UI.",
        },
    ];

    return (
        <section className="services-page">
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
