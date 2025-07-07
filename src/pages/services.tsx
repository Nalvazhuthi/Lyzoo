import React from 'react';

const Services = () => {
    const techSpecs = [
        {
            title: "Custom Website Development",
            description:
                "I build websites designed just for your business — made to match your brand’s style and meet your specific goals. This way, your site truly represents you and works exactly how you need it to.",
        },
        {
            title: "Responsive Web Design",
            description:
                "I create websites that automatically adjust to look great and work perfectly on any device, whether it’s a smartphone, tablet, or desktop computer. This helps you reach customers no matter how they browse.",
        },
        {
            title: "UI/UX Design",
            description:
                "I design easy-to-use and attractive websites focused on your visitors’ experience. By making the site simple and enjoyable to navigate, visitors can find information quickly and stay engaged longer.",
        },
        {
            title: "Modern Front-End Development",
            description:
                "Using the latest technologies like React and Next.js, I build websites that are fast, responsive, and interactive. This means your site runs smoothly and feels modern, keeping visitors interested and coming back.",
        },
        {
            title: "Performance Optimization & SEO",
            description:
                "I improve your website’s speed so pages load quickly, which keeps visitors happy. I also optimize it for search engines like Google, helping more people find your business online through better rankings.",
        },
        {
            title: "CMS & eCommerce Integration",
            description:
                "I connect your website with easy-to-use platforms like WordPress, Sanity, or Shopify. This allows you to update your content or manage products and sales yourself without needing technical help.",
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
