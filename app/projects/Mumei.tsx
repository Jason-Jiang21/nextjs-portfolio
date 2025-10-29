import React from 'react';
import Link from 'next/link';
import YoutubeEmbed from './Youtube';
import Image from 'next/image';

const MumeiDetails = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-[853px]">
        <YoutubeEmbed embedId="U74IoaCFNGc" />
        <h1 className="text-center text-2xl mt-4">
          Mumei: Last Promise is a 3D action-adventure game built in Unity, combining exploration, combat, and storytelling to create a captivating experience that anyone could enjoy.
        </h1>

        <h2 className="text-center mt-10 mb-5 text-xl">Overview</h2>
        <p className="text-center px-2">
          Mumei immerses players in a richly crafted world where narrative and gameplay are deeply intertwined (with a lot of references). The project focused on delivering fluid combat, dynamic movement, and cinematic storytelling through carefully designed cutscenes and in-game events.
        </p>

        <div className="flex flex-col sm:flex-row justify-between mt-5 mb-10">
          <div className="border rounded p-2 w-full sm:w-[30%] text-center mb-2 sm:mb-0">Role: Software Engineer</div>
          <div className="border rounded p-2 w-full sm:w-[30%] text-center mb-2 sm:mb-0">Developed with Unity</div>
          <div className="border rounded p-2 w-full sm:w-[30%] text-center">Languages: C#</div>
        </div>

        <h2 className="text-center text-xl mb-5">Contributions</h2>
        <div className="flex flex-col sm:flex-row justify-between mt-5 mb-10">
          <Image src="/MumeiGame.png" className="w-full sm:w-[48%] rounded mb-2 sm:mb-0" alt="Mumei Gameplay" width={500} height={300} />
          <Image src="/MumeiStart.png" className="w-full sm:w-[48%] rounded" alt="Mumei Cutscene" width={500} height={300} />
        </div>

        <ul className="list-disc pl-5 mb-10">
          <li>Developed and integrated the core event system that managed in-game triggers and story progression.</li>
          <li>Implemented early versions of the combat and movement systems, laying the foundation for fluid player control and interactions.</li>
          <li>Designed and scripted multiple end-game cutscenes to enhance narrative impact and emotional pacing.</li>
          <li>Collaborated closely with designers and artists to ensure gameplay systems aligned seamlessly with story moments and world-building.</li>
        </ul>

        <h2 className="text-center text-xl mb-5">Reflections</h2>
        <p className="text-center px-2">
          Working on Mumei was a rewarding opportunity to deepen my understanding of Unity and collaborative game development. It challenged me to balance
          technical implementation with creative storytelling and reinforced the importance of cohesive design across gameplay and narrative systems.
          Seeing the cutscenes and mechanics come together into a cohesive experience was one of the most fulfilling parts of the project. It was also important
          to me to create a game for one of my favorite hololive talents that was set to graduate.
        </p>
      </div>
    </div>
  );
};


export default MumeiDetails;
