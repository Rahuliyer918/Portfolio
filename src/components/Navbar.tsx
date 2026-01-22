import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'About', to: 'intro' },
    { name: 'Work Experience', to: 'workex' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f1a] z-50 shadow-md">
      <div className="max-w-8xl px-4 py-4 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="text-cyan-100 text-2xl font-bold">Rahulnarayan</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-cyan-200 transition"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Rahulnarayan_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-200 transition flex items-center gap-1"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f1a] px-4 pb-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:text-cyan-400 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Rahulnarayan_Iyer.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-white hover:text-cyan-400"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
