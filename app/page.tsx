'use client'
import { useTypewriter, Cursor } from 'nextjs-simple-typewriter';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <Intro />
    </main>
  );
}

const Intro = () => {
  const [isIntroDone, setIsIntroDone] = useState(false);

  const handleDone = () => {
    console.log("handleDone called");
    setIsIntroDone(true);
  }

  const [text, helper] = useTypewriter({
    words: ["Jason Jiang"],
    loop: 1,
    typeSpeed: 180,
    onLoopDone: handleDone,
  })

  return (
    <div
      className={`text-white flex items-center justify-center transition-all duration-1000`}
      style={{
        position: 'absolute',
        top: isIntroDone ? '20px' : '50%',
        left: '50%',
        transform: isIntroDone ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
        fontSize: isIntroDone ? '3rem' : '3.75rem'
      }}
    >
      <span id="name" className="flex items-center">
        {text}
        <span 
          id="cursor"
          style={{
            //Looks a little awkward since it disappears while its moving
              display: isIntroDone ? 'none' : 'inline',
          }}>
          <Cursor cursorStyle='_' />
        </span>
        
      </span>
    </div>
  )
}
