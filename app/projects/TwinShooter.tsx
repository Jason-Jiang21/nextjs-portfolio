import React from 'react';
import Link from 'next/link';

const TwinShooterDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[50%]">
        <img src='TwinShooter_Screen.png' className='w-full h-auto rounded' alt='Twin Shooter Screen'/>
        <h1 className='text-center text-2xl mt-4'>
          Twin Shooter is a game where you control a ship and defeat the hordes of enemies that spawn in to kill you. It has
          shooting, pickup, and health mechanics.
        </h1>
        <h2 className='text-center mt-10 mb-5 text-xl'>Overview</h2>
        <p>
          This was my first game I ever made on Unity, learning the basics of movement, common coding practices, and game development
          specifics like health, collision detection, and others.
        </p>
        <div className='flex justify-between mt-5 mb-10'>
          <div className='border rounded p-2 w-[30%] text-center'>Role: Solo Developer</div>
          <div className='border rounded p-2 w-[30%] text-center'>Worked from September 2023 to the October 2023</div>
          <div className='border rounded p-2 w-[30%] text-center'>Languages: C# through Unity</div>
        </div>
        <h2 className='text-center text-xl mb-5'>Contributions</h2>
        <div className='flex justify-between mt-5 mb-10'>
          <img src='TwinShooter_Game.png' className='w-[48%] rounded'/>
          <img src='TwinShooter_Hurt.png' className='w-[48%] rounded'/>
        </div>
        <ul className='list-disc pl-5 mb-10'>
          <li>Created all game assets using Aseprite, gaining proficiency with the application through hands-on experience.</li>
          <li>Implemented collision detection with Unity’s built-in system, coding appropriate responses for various scenarios.</li>
          <li>Developed a strategic mindset for problem-solving in game development.</li>
          <li>Learned to code user interfaces in Unity, ensuring compatibility across different aspect ratios.</li>
        </ul>
        <h2 className='text-center text-xl mb-5'>Reflections</h2>
        <p>
          It was my first time ever developing something in Unity without using any tutorials. I was often confused on how to
          approach a certain problem and sometimes I became frustrated that I didn't know more. However, I managed to perservere and
          code a beginner game that I am proud of.
        </p>
      </div>
    </div>
  );
};

export default TwinShooterDetails;
