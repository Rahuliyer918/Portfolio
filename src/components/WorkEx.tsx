import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import workIcon from '../assets/workEx/workEx.png'

const experiences = [
  {
    title: "Developer",
    company: "Capgemini Technology Services India Ltd",
    duration: "Feb 2022 – Jul 2023",
    description: [
      "Led development for Subway's Gift Card Payment system using C# .NET and VB .NET.", 
      "Enhanced customer transactions across 25,000+ US/Canada locations, applied Agile methodology across 6 sprints, and boosted transaction speed by 40%."
    ],
  },
  {
    title: "Application Support",
    company: "Capgemini Technology Services India Ltd",
    duration: "Aug 2021 – Jan 2022",
    description: [
      "Maintained and improved 17 applications for Entergy's energy business.",
      "Implemented system improvements, improved performance by 20%, and resolved customer issues through effective troubleshooting."
    ],
  },
  {
    title: "Trainee",
    company: "Capgemini Technology Services India Ltd",
    duration: "Feb 2021 – Jul 2021",
    description: [
      "Trained in C# .NET MVC, Web API, and SQL.", 
      "Developed foundational skills in .NET-based web development."
    ],
  },
];

const WorkEx = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0c0c18] to-[#181829] text-white">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-cyan-400 text-center quintessential-regular">
        Work Experience
      </h2>

      <VerticalTimeline lineColor="#06b6d4">
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            contentStyle={{ background: '#1f1f2e', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date={exp.duration}
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
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <h4 className="text-md text-cyan-300">{exp.company}</h4>
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