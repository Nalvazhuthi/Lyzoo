import React from 'react'
import beautyProduct from "../assets/images/works/beauty-product.png"
import freelanceAgency from "../assets/images/works/freelance-agency.png"
import petCare from "../assets/images/works/pet-care.png"
import englishlearning from "../assets/images/works/english-learning.png"
// import cafeStreet from "../assets/images/works/cafe-streeet.png"
const Works = () => {
  const works = [
    {
      image: beautyProduct,
      title: "Beauty Product Landing Page",
      description: "A modern and elegant landing page for a skincare brand, featuring smooth animations, responsive layout, and product-focused design using React and SCSS.",
      url: "https://skincare-showcase.netlify.app/"
    },
    {
      image: freelanceAgency,
      title: "Freelance Agency Website",
      description: "A professional website for a freelance agency to connect local clients with developers and designers. Built with full-stack scalability in mind using Next.js and Tailwind CSS.",
      url: 'https://the-creator-site.netlify.app/'
    },
    {
      image: petCare,
      title: "Pet Care Landing Page",
      description: "An adorable, trust-building landing page for a pet care service. Designed with user-friendly booking flow and calm, friendly aesthetics using React and Tailwind CSS.",
      url: "https://vet-clinic.netlify.app/"
    },
    {
      image: englishlearning,
      title: "English Learning Website",
      description: "A clean and engaging site built for an online English learning platform, including interactive course previews and student testimonials.",
      url: "https://english-learning-agency.netlify.app/"
    },
    // {
    //   image: cafeStreet,
    //   title: "Cafe Street Website",
    //   description: "A vibrant and modern landing page for a street cafe. Built with Next.js and Tailwind CSS, showcasing the menu, location, and social presence with theme toggle support."
    // }
  ]

  return (
    <div className="works-section" id='works'>
      <div className="works-grid">
        {works.slice().reverse().map((work, index) => (
          <a
            href={work.url}
            key={index}
            className="work-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            {work.image && (
              <div className="image-wrapper">
                <img src={work.image} alt={work.title} className="work-image" />
              </div>
            )}
            <div className="work-details">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}

export default Works
