import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WordguessrDetails = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-[853px]">
        <Image src='/WordGuessr_Normal.png' className='w-full h-auto rounded' alt='WordGuessr Screen' width={500} height={300} />
        <h1 className='text-center text-2xl mt-4'>
          WordGuessr is a Wordle-like game where you guess the word in a certain number of guesses, and the color of the box corresponds to where
          that letter may be in the word.
        </h1>
        <h2 className='text-center mt-10 mb-5 text-xl'>Overview</h2>
        <p className="text-center px-2">
          This was my final project for CSCI 201: Principles of Software Development course, where I led a team of 6 other programmers to create
          this game using knowledge we gained from the class.
        </p>
        <div className='flex flex-col sm:flex-row justify-between mt-5 mb-10'>
          <div className='border rounded p-2 w-full sm:w-[30%] text-center mb-2 sm:mb-0'>Role: Lead Back-End Developer</div>
          <div className='border rounded p-2 w-full sm:w-[30%] text-center mb-2 sm:mb-0'>Worked from November 2023 to December 2023</div>
          <div className='border rounded p-2 w-full sm:w-[30%] text-center'>Languages: Java, HTML, CSS, JavaScript, SQL</div>
        </div>
        <h2 className='text-center text-xl mb-5'>Contributions</h2>
        <div className='flex flex-col sm:flex-row justify-between mt-5 mb-10'>
          <Image src='/WordGuessr_Leaderboard.png' className='w-full sm:w-[48%] rounded mb-2 sm:mb-0' alt='WordGuessr Leaderboard' width={500} height={300} />
          <Image src='/WordGuessr_Win.png' className='w-full sm:w-[48%] rounded' alt='WordGuessr Win' width={500} height={300} />
        </div>
        <ul className='list-disc pl-5 mb-10'>
          <li>Organized weekly team meetings to ensure project milestones were met and the team stayed on track to complete the project on time.</li>
          <li>Developed the backend of the application and integrated it with an SQL database for storing user login information, current win streaks, and highest win streaks.</li>
          <li>Coded JavaScript to dynamically update HTML and CSS based on user authentication status, enhancing user experience.</li>
          <li>Conducted thorough testing and debugging of the application to ensure functionality and improve user experience, resulting in a more robust final product.</li>
        </ul>
        <h2 className='text-center text-xl mb-5'>Reflections</h2>
        <p className="text-center px-2">
          I think the project went smoothly overall. We were able to begin work on the project early, which helped avoid stress at the end. This was due to
          us organizing a time every week where we could discuss our progress and plans for the upcoming week. Everyone was excited to work on the project, and communication
          was strong throughout.
        </p>
      </div>
    </div>
  );
};

export default WordguessrDetails;
