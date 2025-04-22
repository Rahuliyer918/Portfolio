import React from 'react';
import githublogo from '../assets/skills/github.png';
import linkedinlogo from '../assets/linkedin.png';
import instalogo from '../assets/insta.png';
import xlogo from '../assets/x.png';


const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <p className="text-lg">Connect with me</p>
          </div>
          
          <div className="flex space-x-8 mb-6">
            <a 
              href="linkedin.com/in/rahulnarayan-iyer-40b614168" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
                <img
                src={linkedinlogo}
                alt='LinkedIn'
                className="w-8 h-8 mb-2"
                />
            </a>
            <a 
              href="https://www.instagram.com/rahulnarayan_iyer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <img
                src={instalogo}
                alt='Instagram'
                className="w-8 h-8 mb-2"
              />
            </a>
            <a 
              href="https://github.com/Rahuliyer918" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <img
                src={githublogo}
                alt='Github'
                className="w-8 h-8 mb-2"
              />
            </a>
            <a 
              href="https://x.com/RahulNarayan18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <img
                src={xlogo}
                alt='X'
                className="w-8 h-8 mb-2"
              />
            </a>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Rahulnarayan Pasupathi Iyer. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;