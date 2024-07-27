import React from 'react';
import Link from 'next/link';
import YoutubeEmbed from './Youtube';
import Image from 'next/image';

const IdolShowdownDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[853px]">
        <YoutubeEmbed embedId="cTjtLdBLjNU?si=SE1qr1DDmsLqNzdh" />
        <h1 className='text-center text-2xl mt-4'>Idol Showdown is a fighting game created by fans for fans with online mechanics,
          singleplayer options, a training mode, as well as many others.
        </h1>
        <h2 className='text-center mt-10 mb-5 text-xl'>Overview</h2>
        <p>
          This is a passion project born from fans wanting to create something fun and special for fighting game and hololive fans across
          the world. There was a lack of free fighting games, so the team decided to make one themselves.
        </p>
        <div className='flex justify-between mt-5 mb-10'>
          <div className='border rounded p-2 w-[30%] text-center'>Role: SinglePlayer and UI Programmer</div>
          <div className='border rounded p-2 w-[30%] text-center'>Worked from October 2023 to the present</div>
          <div className='border rounded p-2 w-[30%] text-center'>Languages: C# through Unity</div>
        </div>
        <h2 className='text-center text-xl mb-5'>Contributions</h2>
        <div className='flex justify-between mt-5 mb-10'>
          <Image src='/KiaraShop.png' className='w-[48%] rounded' alt='Kiara Shop' width={500} height={300} />
          <Image src='/KiaraAchievement.png' className='w-[48%] rounded' alt='Kiara Achievement' width={500} height={300} />
        </div>
        <ul className='list-disc pl-5 mb-10'>
          <li>Developed new singleplayer mode features, including introducing new equipables and items.</li>
          <li>Designed and implemented an achievements system to enhance player engagement.</li>
          <li>Refactored existing code to improve structure and support future feature additions.</li>
          <li>Analyzed and comprehended existing codebases to effectively integrate new functionalities.</li>
          <li>Acquired and applied knowledge of unfamiliar Unity attributes to meet project requirements.</li>
        </ul>
        <h2 className='text-center text-xl mb-5'>Reflections</h2>
        <p>
          It was my first time ever developing something with a group. For the first time, I had weekly meetings to 
          discuss progress and future goals. I worked alongside programmers, artists, designers, and several others
          while contributing to this amazing project. I learned so much about good coding practices, game development ideas,
          how to effectively communicate with others, and how to step out of my comfort zone, learning everything as I went along.
        </p>
      </div>
    </div>
  );
};

export default IdolShowdownDetails;
