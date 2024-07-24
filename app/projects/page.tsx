'use client'
import Link from 'next/link';
import React from 'react';
import{ useState } from 'react';

interface ProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
  }
  
  const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, onClick }) => {
    return (
      <div onClick={onClick} className="relative w-64 aspect-square border-4 border-white rounded-xl bg-gray-900 text-white overflow-hidden group cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="relative z-10 flex justify-center h-full p-4">
          <h2 className="text-2xl text-center">{title}</h2>
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 p-4">
          <p className="text-white text-center">{description}</p>
        </div>
      </div>
    );
  }
  

  const projectsData = [
    {
      title: 'Idol Showdown',
      description: 'A fanmade Hololive Fighting Game with online and singleplayer content',
      link: '/projects/IdolShowdown',
      imageUrl: '/IdolShowdown.jpg', // Replace with actual image URLs
      details: (
        <div>
          <p>Detailed information about Idol Showdown project...</p>
          <img src="/IdolShowdown-details.jpg" alt="Idol Showdown" />
          <Link href="/projects/IdolShowdown" className="text-blue-500 hover:underline">View Project</Link>
        </div>
      ),
    },
    {
      title: 'Twin Shooter',
      description: 'Solo Dev Project with hordes of enemies attacking you, which you must fend off',
      link: '/projects/TwinShooter',
      imageUrl: '/TwinShooter.png', // Replace with actual image URLs
      details: (
        <div>
          <p>Detailed information about Twin Shooter project...</p>
          <img src="/TwinShooter-details.png" alt="Twin Shooter" />
          <Link href="/projects/TwinShooter" className="text-blue-500 hover:underline">View Project</Link>
        </div>
      ),
    },
    {
      title: 'Spatial Study',
      description: 'Hackathon Project that creates a more active, immersive educational experience for users',
      link: '/projects/Study',
      imageUrl: '/SpatialStudy.png', // Replace with actual image URLs
      details: (
        <div>
          <p>Detailed information about Spatial Study project...</p>
          <img src="/SpatialStudy-details.png" alt="Spatial Study" />
          <Link href="/projects/Study" className="text-blue-500 hover:underline">View Project</Link>
        </div>
      ),
    },
    {
      title: 'Wordguessr',
      description: 'Final Project for my Software Engineering class where you guess the word in a certain number of guesses',
      link: '/projects/Wordguessr',
      imageUrl: 'https://via.placeholder.com/400', // Replace with actual image URLs
      details: (
        <div>
          <p>Detailed information about Wordguessr project...</p>
          <img src="https://via.placeholder.com/400" alt="Wordguessr" />
          <Link href="/projects/Wordguessr" className="text-blue-500 hover:underline">View Project</Link>
        </div>
      ),
    },
  ];
  
  export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
    const handleProjectClick = (title: string) => {
      setSelectedProject(selectedProject === title ? null : title);
    };
  
    return (
      <div className="bg-black min-h-screen p-4">
        <header className="bg-black text-white text-4xl font-bold text-center mb-8">
          Projects
        </header>
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
        {selectedProject && (
          <div className="mt-8 p-4 border-4 border-white rounded bg-gray-900 text-white">
            {projectsData.find((project) => project.title === selectedProject)?.details}
          </div>
        )}
      </div>
    );
  }