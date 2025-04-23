import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import onlineShopImage from '../assets/projects/Online Shop.png';
import yelpCampImage from '../assets/projects/Yelp Camp.png';
import socialMediaImage from '../assets/projects/Social Media.png';
import libraryImage from '../assets/projects/Library.png';
import trafficImage from '../assets/projects/traffic.png';
import yelpCampLogo from '../assets/projects/Yelp Camp Logo.png';
import ecomLogo from '../assets/projects/ecom.png';

const projects = [
    {
      title: 'E-commerce Web Application',
      description:
        'A full-stack online shopping platform built with ASP.NET Core 8 MVC, featuring secure role-based authentication and complete e-commerce functionality including product management and payment processing.The application combines C#, Entity Framework Core, and SQL Server for the backend with responsive frontend design using HTML, CSS, Bootstrap, and Razor syntax',
      techStack: 'ASP.NET Core, C#, Entity Framework, SQL Server, HTML, CSS, Bootstrap',
      githubLink: 'https://github.com/Rahuliyer918/OnlineShop',
      websiteLink: 'https://www.example.com',
      logo: ecomLogo,
      image: onlineShopImage,
      personal: true
    },
    {
      title: 'Yelp Camp',
      description:
        'A MERN stack application with RESTful architecture featuring secure authentication, responsive Bootstrap UI, and Maptiler API integration for location services.The project follows MVC design patterns and is deployed on Render with MongoDB Atlas using CI/CD pipeline for seamless updates',
      techStack: 'MongoDB, Express, React, Node.js, Bootstrap, Maptiler',
      githubLink: 'https://github.com/Rahuliyer918/YelpCamp/tree/master',
      websiteLink: 'https://yelpcamp-trjd.onrender.com/',
      logo: yelpCampLogo,
      image: yelpCampImage,
      personal: true
    },
    {
      title: 'Social Media End-to-End Data Analysis Pipeline',
      description:
        'A Python/MongoDB pipeline that processed over 5.8M US election posts through custom API integrations, optimized with Docker containerization and multi-threading for 65% faster processing.The system includes efficient database querying with caching strategies and a Plotly/Flask dashboard for real-time sentiment analysis visualization.',
      techStack: 'Python, MongoDB, Flask, Plotly, Docker',
      image: socialMediaImage,
      personal: false,
      report: require('../assets/projects/Social_Media_Project_Report.pdf'),
    },
    {
      title: 'Library Management System',
      description:
        'A React/TypeScript application for library management with swift CRUD operations that reduced manual errors by 40% and improved retrieval speed by 50% through MongoDB DAO implementation.The system features asynchronous microservices for real-time book categorization and maintains high quality standards with Chai/Mocha unit testing ensuring over 90% code coverage.',
      techStack: 'Python, MongoDB, Flask, Plotly, Docker',
      image: libraryImage,
      personal: false
    },
    {
      title: 'Dynamic Traffic Light Control System',
      description:
        'A real-time traffic signal control system that improved peak hour flow by 25% and reduced emergency vehicle wait times by 70% through synchronized light control.The system achieved 90% car detection accuracy using PyTorch object detection models with OpenCV, developed collaboratively with a team of 3 for embedded systems integration.',
      techStack: 'PyTorch, OpenCV, Python, Embedded Systems',
      image: trafficImage,
      personal: false,
      report: require('../assets/projects/dtlsc.pdf')
    }
  ];
//
  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-8 bg-gradient-to-b from-[#13131f] to-[#1f1f2e] text-white">
        <h2 className="text-5xl font-bold text-left text-cyan-400 mb-12 teko-font">
          My Projects
        </h2>
        <p className="mt-3 text-left text-lg max-w-3xl leading-[30px]" >The following projects highlight my technical expertise and practical experience across various domains. 
          Each project is accompanied by a brief description, showcasing the technologies used and the challenges addressed, along with links to 
          live demos and code repositories. These examples demonstrate my proficiency in developing robust solutions, my adaptability to different 
          tech stacks, and my commitment to delivering high-quality results in collaborative environments.</p>
          <br></br>
          <br></br>
          <br></br>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[60px] justify-items-center"
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
              websiteLink={project.websiteLink}
              githubLink={project.githubLink}
              image={project.image}
              logo={project.logo}
              report={project.report}
              personal={project.personal}
            />
          ))}
        </motion.div>
      </section>
    );
  };
  
  export default Projects;