'use client'
import { useTypewriter, Cursor } from 'nextjs-simple-typewriter';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'; // Import Link

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <Intro />
    </main>
  );
}

const Intro = () => {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleDone = () => {
    console.log("handleDone called");
    setIsIntroDone(true);
  }

  const [text, helper] = useTypewriter({
    words: ["Jason Jiang"],
    loop: 1,
    typeSpeed: 180,
    onLoopDone: handleDone,
  });

  useEffect(() => {
    if (isIntroDone) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isIntroDone]);

  return (
    <div
      className={`text-white flex flex-col items-center justify-center transition-all duration-1000`}
      style={{
        position: 'absolute',
        top: isIntroDone ? '20px' : '50%',
        left: '50%',
        transform: isIntroDone ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
        fontSize: isIntroDone ? '3rem' : '3.75rem',
        textAlign: 'center',
      }}
    >
      <span id="name" className="flex items-center">
        {text}
        <span
          id="cursor"
          style={{
            display: isIntroDone ? 'none' : 'inline',
          }}>
          <Cursor cursorStyle='_' />
        </span>
      </span>
      {showContent && <Description />}
      {showContent && <Footer />}
    </div>
  );
}

const Description = () => {
  var birthDate = new Date("2004-09-10");
  var today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="text-white text-lg mt-2 fade-in">
      <h2>
        Welcome to my Portfolio! I am a {age} year old developer, currently majoring in computer science and minoring in video
        game programming at Viterbi School of Engineering at the University of Southern California. I am always looking to apply 
        my skills to create a better experience for everyone.
      </h2>
      <div className="flex space-x-4 m-8 justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Resume
        </a>
        <Link href="/projects" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          View All Projects
        </Link>
      </div>
    </div>
  );
}


const Footer = () => {
  return (
    <footer className="footer fade-in">
      <a href="https://github.com/Jason-Jiang21" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/jason-jiang-647ba7245/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:jnjiang@usc.edu" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} />
      </a>
    </footer>
  );
}


