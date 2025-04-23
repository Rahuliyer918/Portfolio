import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDownload = (label: string) => {
    toast.success(`${label} downloaded successfully!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const links = [
    { name: 'About', to: 'intro' },
    { name: 'Work Experience', to: 'workex' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
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

          {/* Resume Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="text-white hover:text-cyan-200 transition">
              Resume ▾
            </span>
            <div className="absolute right-0 hidden group-hover:flex flex-col bg-[#1a1a2e] text-white shadow-md mt-2 py-2 px-4 rounded z-50 min-w-[180px] max-w-[220px] whitespace-nowrap overflow-hidden">
              <a
                href="/Rahulnarayan_Resume_Developer.pdf"
                download
                onClick={() => handleDownload('Developer Resume')}
                className="hover:text-cyan-300 transition py-1 whitespace-nowrap flex items-center gap-2"
              >
                📄 Developer Resume
              </a>
              <a
                href="/Rahulnarayan_Resume_Fullstack.pdf"
                download
                onClick={() => handleDownload('Fullstack Resume')}
                className="hover:text-cyan-300 transition py-1 whitespace-nowrap flex items-center gap-2"
              >
                📄 Fullstack Resume
              </a>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
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

          <p className="text-white font-semibold mt-4">Resumes</p>
          <a
            href="/Rahulnarayan_Resume_Developer.pdf"
            download
            onClick={() => handleDownload('Developer Resume')}
            className="py-2 text-white hover:text-cyan-400 flex items-center gap-2"
          >
            📄 Developer Resume
          </a>
          <a
            href="/Rahulnarayan_Resume_Fullstack.pdf"
            download
            onClick={() => handleDownload('Fullstack Resume')}
            className="py-2 text-white hover:text-cyan-400 flex items-center gap-2"
          >
            📄 Fullstack Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
