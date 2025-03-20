// client/src/components/Home/FeaturedProjects.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function FeaturedProjects() {
    const projects = [
        {
          id: 'project1',
          title: 'Free Medical Camps',
          description:
            'Provide healthcare services, check-ups, and medicines to underserved communities.',
          image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742405706/p1_knovhj.png',
          alt: 'Free Medical Camps',
          link: '/projects/medical-camps', // Example link - create routes later
        },
        {
          id: 'project2',
          title: 'Skill Development Programs',
          description:
            'Train underprivileged individuals in vocational skills for better employment opportunities.',
          image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404871/p3_lpj3wj.png',
          alt: 'Skill Development Programs',
          link: '/projects/skill-development', // Example link
        },
        {
          id: 'project3',
          title: 'Environmental Conservation',
          description:
            'Conduct tree plantations, waste management, and awareness campaigns for sustainability.',
          image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404872/p6_nkmgwu.png',
          alt: 'Environmental Conservation',
          link: '/projects/environmental-conservation', // Example link
        },
      ];

  return (
     <section className="featured-projects">
        <div className="container">
            <h2>Our Featured Projects</h2>
            <div className="projects-grid">
            {projects.map((project) => (
                <div className="project-item" key={project.id}>
                <img src={project.image} alt={project.alt} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Add a "Learn More" link */}
                <Link to={project.link} className="project-link">Learn More</Link>
                </div>
            ))}
            </div>
        </div>
        </section>
  );
}

export default FeaturedProjects;