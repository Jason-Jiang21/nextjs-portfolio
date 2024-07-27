import React from 'react';
import Link from 'next/link';
import YoutubeEmbed from './Youtube';

const SpatialStudyDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[853px]">
        <YoutubeEmbed embedId="JcZsFLr5ciw?si=I2XUpScc9vXBbYxK" />
        <h1 className='text-center text-2xl mt-4'>
          Spatial Study is an interactive and immersive way to watch educational youtube videos such as Khan Academy and Crash Course for
          the Apply Vision Pro.
        </h1>
        <h2 className='text-center mt-10 mb-5 text-xl'>Overview</h2>
        <p>
          Spatial Study bridges the gap between static video content and dynamic learning by transforming passive viewing into an active educational
          experience. Students will be able to interact with 3D objects that are related to the video they are watching.
        </p>
        <div className='flex justify-between mt-5 mb-10'>
          <div className='border rounded p-2 w-[30%] text-center'>Role: Programmer</div>
          <div className='border rounded p-2 w-[30%] text-center'>HackSC X Hackathon</div>
          <div className='border rounded p-2 w-[30%] text-center'>Languages: Swift through VisionOS</div>
        </div>
        <h2 className='text-center text-xl mb-5'>Contributions</h2>
        <div className='flex justify-between mt-5 mb-10'>
          <img src='SpatialStudy_Bird.png' className='w-[48%] rounded'/>
          <img src='SpatialStudy_Tree.png' className='w-[48%] rounded'/>
        </div>
        <ul className='list-disc pl-5 mb-10'>
          <li>Integrated multiple APIs, including ChatGPT-4, LumaAI, and Skybox, enhancing the interactive experience of the project.</li>
          <li>Utilized ChatGPT-4 to analyze the YouTube video script and identify optimal moments for interactive elements, generating appropriate prompts for LumaAI.</li>
          <li>Leveraged LumaAI to create interactive content based on prompts provided by ChatGPT-4.</li>
          <li>Determined the best skybox theme using ChatGPT-4, which was subsequently integrated with the Skybox API.</li>
        </ul>
        <h2 className='text-center text-xl mb-5'>Reflections</h2>
        <p>
          It was my first Hackathon that I ever participated in. There were many highs and lows throughout the 24 hours. One 
          challenge was learning in a compressed time frame. For 3 of us, this was our first hackathon, and the curve to bring what 
          we learned in class to real-world implementation was incredibly steep. However, learning was one of the key aspects we approached this hackathon with, and we all 
          learned a lot about visionOS and how to bring code to applications.
        </p>
      </div>
    </div>
  );
};

export default SpatialStudyDetails;