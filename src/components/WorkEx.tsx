import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import workIcon from '../assets/workEx/workEx.png';
import buIcon from '../assets/workEx/BU.png'


const experiences = [
  {
    title: "Research Assistant",
    company: "Binghamton University",
    duration: "Aug 2025 - Present",
    description: [
      "Built and curated an annotated dataset of interview questions to evaluate question quality using ML and NLP.", 
      "Designed annotation guidelines and preprocessing pipelines for data cleaning and normalization.",
      "Performed manual testing of politician faces."
    ],
  },
  {
    title: "Senior Analyst (.NET Backend Engineer)",
    company: "Capgemini Technology Services India Ltd",
    duration: "Feb 2022 – Jul 2023",
    description: [
      "Led payment platform processing $2.3 M monthly for 25 000 + stores via C# .NET APIs, satisfying PCI-DSS controls.", 
      "Coordinated 6-person squad across 12 Scrum sprints, delivering MVP on time and clearing backlog burn-down 18 % ahead plan",
      "Boosted throughput 40 % via tuned SQL, caching layers, and offloading heavy workflows to asynchronous pipelines.",
      "Cut deployment risk 95 % by running 200 + regression tests, static analyzers, and smoke checks prior to live releases.",
      "Created idempotent endpoints with retries on Azure Service Bus, removing duplicate charges and slashing payment disputes.",
      "Built Azure DevOps YAML pipelines for blue-green releases with rollback on failed health checks, upholding 99.9 % uptime.",
      "Raised client NPS 30 points after integrating PayPal payments, cutting failure rate from 5 % to 0.2 % across regions."
    ],
  },
  {
    title: "Analyst (.NET Developer)",
    company: "Capgemini Technology Services India Ltd",
    duration: "Aug 2021 – Jan 2022",
    description: [
      "Optimized SQL and refactored architecture across 17 .NET apps, shrinking average response 3.2 s→2.5 s for 50 000 + users.",
      "Eliminated 8 bottlenecks in checkout flow, delivering 15 % faster responses and supporting 50 000 + daily sessions.",
      "Resolved 45 production defects within 24-hour SLA, sustaining 99.5 % uptime and protecting quarterly revenue commitments.",
      "Completed 40 h advanced C# MVC, Web API, and SQL training, scoring 95 % and sharing insights in weekly engineering guilds."
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
                  src={exp.company === 'Binghamton University' ? buIcon : workIcon}
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