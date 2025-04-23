import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import workIcon from '../assets/workEx/workEx.png';


const experiences = [
  {
    title: "Developer",
    company: "Capgemini Technology Services India Ltd",
    duration: "Feb 2022 – Jul 2023",
    description: [
      "Led the development of Subway's Gift Card Payment system utilizing C# .NET and VB .NET technologies, revolutionizing customer transactions across more than 25,000 locations throughout the US and Canada.", 
      "Partnered with Subway's Payments division to design and implement advanced security protocols for gift card processing, ensuring comprehensive protection of customer financial data.",
      "Conducted extensive quality assurance through 200+ test scenarios, guaranteeing system reliability and performance before market implementation.",
      "Embraced Agile methodologies across six development cycles, driving a 30% boost in client satisfaction scores while achieving a 40% improvement in transaction processing efficiency"
    ],
  },
  {
    title: "Application Support",
    company: "Capgemini Technology Services India Ltd",
    duration: "Aug 2021 – Jan 2022",
    description: [
      "Managed and optimized a diverse portfolio of 17 applications (3 major systems and 14 supporting platforms) critical to Entergy's core energy business operations.",
      "Engineered strategic system enhancements that boosted overall performance by 20% while simultaneously reducing system downtime by 40%.",
      "Delivered exceptional customer service through skilled technical troubleshooting and rapid issue resolution, ensuring client satisfaction",
      "Spearheaded cross-functional team initiatives to identify and eliminate application bottlenecks, resulting in 15% faster response times and enhanced user experience."
    ],
  },
  {
    title: "Trainee",
    company: "Capgemini Technology Services India Ltd",
    duration: "Feb 2021 – Jul 2021",
    description: [
      "Trained in C#.NET Model-View Controller (MVC), Web API, and SQL.", 
      "Developed foundational skills in .NET-based web development."
    ],
  },
];

const WorkEx = () => {
  return (
    <section id='workex' className="py-16 px-6 bg-gradient-to-b from-[#0c0c18] to-[#181829] text-white">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-cyan-400 text-center teko-font">
        Work Experience
      </h2>

      <VerticalTimeline lineColor="#06b6d4">
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            contentStyle={{ background: '#1f1f2e', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date={exp.duration}
            position={idx % 2 === 0 ? 'left' : 'right'}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={workIcon}
                  alt={exp.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            iconStyle={{ background: 'white', color: '#fff' }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{exp.title}</h3>
            </div>
            <h4 className="text-md text-left text-cyan-300">{exp.company}</h4>
            <p className="mt-2 text-gray-200 text-left">
              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {exp.description.map((desc, index) => (
                  <li
                  key={`exp-desc-${index}`}
                  className='text-white-100 text-[15px] pl-1 tracking-wider'
                >
                  {desc}
                </li>
                ))}
              </ul>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default WorkEx;