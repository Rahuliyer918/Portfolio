import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import onlineShopImage from '../assets/projects/Online Shop.png';
import yelpCampImage from '../assets/projects/Yelp Camp.png';
import socialMediaImage from '../assets/projects/Social Media.png';
import libraryImage from '../assets/projects/Library.png';
import trafficImage from '../assets/projects/traffic.png';

const projects = [
    {
      title: 'E-commerce Web Application',
      description:
        'A full-stack online shopping platform built with ASP.NET Core 8 MVC, featuring secure role-based authentication and complete e-commerce functionality including product management and payment processing.The application combines C#, Entity Framework Core, and SQL Server for the backend with responsive frontend design using HTML, CSS, Bootstrap, and Razor syntax',
      techStack: 'ASP.NET Core, C#, Entity Framework, SQL Server, HTML, CSS, Bootstrap',
      link: 'https://www.example.com',
      image: onlineShopImage
    },
    {
      title: 'Yelp Camp',
      description:
        'A MERN stack application with RESTful architecture featuring secure authentication, responsive Bootstrap UI, and Maptiler API integration for location services.The project follows MVC design patterns and is deployed on Render with MongoDB Atlas using CI/CD pipeline for seamless updates',
      techStack: 'MongoDB, Express, React, Node.js, Bootstrap, Maptiler',
      link: 'https://yelpcamp-trjd.onrender.com/',
      image: yelpCampImage
    },
    {
      title: 'Social Media End-to-End Data Analysis Pipeline',
      description:
        'A Python/MongoDB pipeline that processed over 5.8M US election posts through custom API integrations, optimized with Docker containerization and multi-threading for 65% faster processing.The system includes efficient database querying with caching strategies and a Plotly/Flask dashboard for real-time sentiment analysis visualization.',
      techStack: 'Python, MongoDB, Flask, Plotly, Docker',
      link: 'https://www.example.com',
      image: socialMediaImage
    },
    {
      title: 'Library Management System',
      description:
        'A React/TypeScript application for library management with swift CRUD operations that reduced manual errors by 40% and improved retrieval speed by 50% through MongoDB DAO implementation.The system features asynchronous microservices for real-time book categorization and maintains high quality standards with Chai/Mocha unit testing ensuring over 90% code coverage.',
      techStack: 'Python, MongoDB, Flask, Plotly, Docker',
      link: 'https://www.example.com',
      image: libraryImage
    },
    {
      title: 'Dynamic Traffic Light Control System',
      description:
        'A real-time traffic signal control system that improved peak hour flow by 25% and reduced emergency vehicle wait times by 70% through synchronized light control.The system achieved 90% car detection accuracy using PyTorch object detection models with OpenCV, developed collaboratively with a team of 3 for embedded systems integration.',
      techStack: 'PyTorch, OpenCV, Python, Embedded Systems',
      link: 'https://www.example.com',
      image: trafficImage
    }
  ];

  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-8 bg-gradient-to-b from-[#13131f] to-[#1f1f2e] text-white">
        <h2 className="text-4xl font-semibold text-center text-[#e8e2e0] mb-12 monsieur-la-doulaise-regular">
          My Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              image={project.image}
            />
          ))}
        </motion.div>
      </section>
    );
  };
  
  export default Projects;