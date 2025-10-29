import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MochikoDetails = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-[853px]">
        <Image src='/MochikoHome.png' className='w-full h-auto rounded' alt='Mochiko Home' width={500} height={300} />
        
        <h1 className='text-center text-2xl mt-4'>
          Mochiko is a desktop task planning application that keeps your tasks visible and accessible,
          with a persistent post-it note view on your desktop and an animated mascot to remind you of upcoming deadlines.
        </h1>
        
        <h2 className='text-center mt-10 mb-5 text-xl'>Overview</h2>
        <p className="text-center px-2">
          This is a personal project built to explore modern full-stack development with TypeScript and AWS.
          Frustrated by task managers that hide away in separate applications, I wanted to create something
          that keeps tasks visible right on your desktop, making it easier to stay on top of your goals.
        </p>
        
        <div className='flex flex-col sm:flex-row justify-between mt-5 mb-10'>
          <div className='border rounded p-2 w-full sm:w-[30%] text-center mb-2 sm:mb-0'>Role: Full-Stack Developer</div>
          <div className='border rounded p-2 w-full sm:w-[30%] text-center mb-2 sm:mb-0'>Worked from September 2024 to present</div>
          <div className='border rounded p-2 w-full sm:w-[30%] text-center'>Languages: TypeScript, SQL</div>
        </div>
        
        <h2 className='text-center text-xl mb-5'>Contributions</h2>
        <div className='flex flex-col sm:flex-row justify-between mt-5 mb-10'>
          <Image src='/MochikoLogin.png' className='w-full sm:w-[48%] rounded mb-2 sm:mb-0' alt='Mochiko Login' width={500} height={300} />
          <Image src='/MochikoTasks.png' className='w-full sm:w-[48%] rounded' alt='Mochiko Tasks' width={500} height={300} />
        </div>
        
        <ul className='list-disc pl-5 mb-10'>
          <li>Architected full-stack Electron application using TypeScript and React, integrating AWS RDS (PostgreSQL) for persistent data storage.</li>
          <li>Implemented complete CRUD operations with RESTful API architecture to handle task management between frontend and cloud database.</li>
          <li>Designed database schema for task relationships and engineered calendar integration with automatic due date synchronization.</li>
          <li>Built responsive UI components for task creation, editing, and viewing with real-time state management.</li>
          <li>Developing desktop-native features including persistent post-it note overlay and animated mascot deadline reminders.</li>
        </ul>
        
        <h2 className='text-center text-xl mb-5'>Reflections</h2>
        <p className="text-center px-2">
          This was my first time building a complete full-stack application from the ground up. I learned how to 
          integrate frontend and backend systems, working with AWS cloud infrastructure to manage databases in a 
          production-like environment. The project taught me TypeScript best practices, database schema design, 
          and the unique challenges of building desktop applications with Electron. Most importantly, I gained 
          hands-on experience with modern web development workflows, cloud database management, and how to architect 
          scalable full-stack systems. Building something end-to-end—from database design to user interface—gave me 
          a deep appreciation for the complexity and craftsmanship involved in creating polished software products.
        </p>
      </div>
    </div>
  );
};

export default MochikoDetails;