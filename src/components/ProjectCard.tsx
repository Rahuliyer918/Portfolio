import { useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import githubLogo from '../assets/projects/github-mark.png';

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string;
  websiteLink?: string;
  githubLink?: string;
  image?: string;
  logo?: string;
  personal: boolean;
  report?: string;
}

export default function ProjectCard({
  name,
  description,
  techStack,
  websiteLink,
  githubLink,
  image,
  logo,
  personal,
  report,
}: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div className="w-full max-w-[400px] h-[500px] perspective">
      <motion.div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          flipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full rounded-xl shadow-md flex flex-col items-center justify-between backface-hidden p-4 bg-[#2e2e3d]">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-md mb-2"
            />
          )}
          <h2 className="text-3xl font-bold text-teal-100 text-center w-full">
            {name}
          </h2>
          <button
            onClick={() => setFlipped(true)}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-lg"
          >
            See Details
          </button>
        </div>

        {/* Back */}
        <div className="absolute text-black w-full h-full bg-gray-100 rounded-xl shadow-md p-4 rotate-y-180 backface-hidden flex flex-col justify-between">
          <div className="overflow-y-auto h-full">
            <h3 className="text-3xl font-semibold">{name}</h3>
            <br />
            <p className="text-xl mt-2 text-left">{description}</p>
            <br />
            <p className="text-lg mt-2 italic">Tech: {techStack}</p>
          </div>

          <div className="flex justify-between items-end mt-4">
            {personal ? (
              <>
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    <div className="w-16 h-16">
                      <img
                        src={logo}
                        alt="Website"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    <div className="w-16 h-16">
                      <img
                        src={githubLogo}
                        alt="GitHub"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                )}
              </>
            ) : (
              <div className="flex flex-col text-left text-sm space-y-1">
                <span className="text-blue-700 font-semibold">📚 Academic Project</span>
                {report ? (
                  <a
                    href={report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    📄 View Report
                  </a>
                ) : (
                  <span className="text-red-600">🔒 Code Private</span>
                )}
              </div>
            )}

            <button
              onClick={() => setFlipped(false)}
              className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
