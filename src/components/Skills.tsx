import React from 'react';
import aspnetlogo from '../assets/skills/aspnet.png'
import dotnetmvclogo from '../assets/skills/dotnetmvc.png'
import eflogo from '../assets/skills/ef.png'
import vbnetlogo from '../assets/skills/vbnet.png'
import sqllogo from '../assets/skills/sql.png'
import githublogo from '../assets/skills/github.png'
import { motion } from 'framer-motion'; 

const skills = [
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'VB .NET', icon: vbnetlogo },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', icon: sqllogo },
  { name: 'ASP.NET', icon: aspnetlogo },
  { name: '.NET MVC', icon: dotnetmvclogo },
  { name: 'Entity Framework', icon: eflogo },
  { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: githublogo }
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#181829] to-[#0f0f1a] text-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
            >
            <div className="w-16 h-16 mb-2">
                <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain"
                />
            </div>
            <span className="text-sm text-gray-300 mt-1">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
