'use client'
import React, { useState, useEffect } from 'react';

import IdolShowdownDetails from './IdolShowdown';
import SpatialStudyDetails from './SpatialStudy';
import TwinShooterDetails from './TwinShooter';
import WordguessrDetails from './WordGuessr';
import MochikoDetails from './Mochiko';
import MumeiDetails from './Mumei';
import { Analytics } from '@vercel/analytics/react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-40 sm:w-64 aspect-square border-4 border-white rounded-xl bg-gray-900 text-white overflow-hidden group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="relative z-10 flex justify-center h-full p-4">
        <h2 className="text-2xl text-center">{title}</h2>
      </div>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 sm:group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 p-4">
        <p className="text-white text-center">{description}</p>
      </div>
    </div>
  );
};

const projectsData = [
  {
    title: 'Idol Showdown',
    description: 'A fanmade Hololive Fighting Game with online and singleplayer content',
    link: '/projects/IdolShowdown',
    imageUrl: '/IdolShowdown.jpg',
    details: IdolShowdownDetails,
  },
  {
    title: 'Twin Shooter',
    description: 'Solo Dev Project with hordes of enemies attacking you, which you must fend off',
    link: '/projects/TwinShooter',
    imageUrl: '/TwinShooter.png',
    details: TwinShooterDetails,
  },
  {
    title: 'Spatial Study',
    description: 'Hackathon Project that creates a more active, immersive educational experience for users',
    link: '/projects/Study',
    imageUrl: '/SpatialStudy.png',
    details: SpatialStudyDetails,
  },
  {
    title: 'Wordguessr',
    description: 'Final Project for my Software Engineering class where you guess the word in a certain number of guesses',
    link: '/projects/Wordguessr',
    imageUrl: '/WordGuessr.png',
    details: WordguessrDetails,
  },
  {
    title: 'Mochiko',
    description: 'Electron made Personal Project to study modern-day tech stacks using typescript and AWS',
    link: '/projects/Mochiko',
    imageUrl: '/MochikoSlime.png',
    details: MochikoDetails,
  },
  {
    title: 'Mumei: Last Promise',
    description: 'A 3D game in tribute of Nanashi Mumei of Hololive',
    link: '/projects/Mumei',
    imageUrl: '/MumeiTitle.png',
    details: MumeiDetails
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [fadeClass, setFadeClass] = useState<string | null>(null);

  const handleProjectClick = (title: string) => {
    if (selectedProject) {
      setFadeClass('fade-out');
      setTimeout(() => {
        setSelectedProject(selectedProject === title ? null : title);
        setFadeClass('fade-in');
      }, 500);
    } else {
      setSelectedProject(title);
      setFadeClass('fade-in');
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setFadeClass('fade-in');
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900">
      <div className="p-4">
        <div className="text-white text-2xl font-bold mb-12 pt-2">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Jason Jiang
          </a>
        </div>
        <div className="text-white text-4xl font-bold text-center mb-12">
          Projects
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              onClick={() => handleProjectClick(project.title)}
            />
          ))}
        </div>
        <Analytics />
        {selectedProject && (
          <div className={`mt-8 p-4 border-4 border-white rounded bg-gray-900 text-white max-w-4xl mx-auto ${fadeClass}`}>
            <div>
              {React.createElement(
                projectsData.find((project) => project.title === selectedProject)?.details || (() => null)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}