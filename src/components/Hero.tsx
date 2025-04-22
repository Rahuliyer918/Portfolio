import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-teal-100 h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hi, I'm Rahulnarayan Pasupathi Iyer</h1>
      <p className="text-xl sm:text-2xl mb-6">Detail-oriented Software Developer with 2.5+ years of specialized experience in C# and VB .NET technologies. Strong foundation in software development practices with exposure to Agile methodologies and basic full-stack development concepts. Skilled at collaborating with cross-functional teams to deliver reliable software solutions while maintaining focus on system stability and user experience.</p>
      <a 
        href="#projects" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
      >
        Check out my work
      </a>
    </section>
  );
}

export default Hero;
