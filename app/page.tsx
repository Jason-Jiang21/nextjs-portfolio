'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Intro />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}

const Intro = () => {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Jason Jiang';
  const typeSpeed = 100;

  // Typewriter effect
  useEffect(() => {
    if (displayedText.length < fullName.length && !isIntroDone) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timer);
    } else if (displayedText.length === fullName.length && !isIntroDone) {
      setIsIntroDone(true);
    }
  }, [displayedText, isIntroDone]);

  useEffect(() => {
    if (isIntroDone) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isIntroDone]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 px-4">
      <div
        className="transition-all duration-1000"
        style={{
          transform: isIntroDone ? 'translateY(0)' : 'translateY(20vh)',
        }}
      >
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {displayedText}
              <span className={`inline-block ml-1 ${isIntroDone ? 'hidden' : 'animate-blink'}`}>_</span>
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Subtitle */}
        {showContent && (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl text-purple-200 text-center mb-2 font-light">
              Software Developer & Game Programmer
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
              Building innovative experiences at USC Viterbi
            </p>
          </div>
        )}
      </div>

      {/* Content sections */}
      {showContent && (
        <div className="w-full max-w-4xl animate-fade-in-up">
          <Description />
          <Stats />
          <CTA />
          <Footer />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
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
    <div className="text-white text-center mb-16 mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-10">
        <p className="text-lg text-gray-100 leading-relaxed">
          I'm a {age}-year-old developer majoring in <span className="text-cyan-400 font-semibold">Computer Science</span> and minoring in <span className="text-purple-400 font-semibold">Video Game Programming</span> at USC Viterbi School of Engineering.
        </p>
        <p className="text-gray-300 mt-4">
          Passionate about creating elegant solutions and immersive experiences that make a real impact.
        </p>
      </div>
    </div>
  );
}

const Stats = () => {
  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Skills", value: "15+" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      {stats.map((stat, i) => (
        <div key={i} className="bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-xl border border-purple-500/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/20">
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-1">
            {stat.value}
          </div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-8 py-4 font-semibold rounded-lg overflow-hidden transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-100 group-hover:opacity-110 transition-opacity"></div>
        <div className="relative flex items-center justify-center gap-2 text-white">
          View Resume
        </div>
      </a>
      <a
        href="/projects"
        className="group relative px-8 py-4 font-semibold rounded-lg overflow-hidden transition-all duration-300 border border-purple-400/50 hover:border-purple-400"
      >
        <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors"></div>
        <div className="relative flex items-center justify-center gap-2 text-purple-300 group-hover:text-purple-100">
          View All Projects
        </div>
      </a>
    </div>
  );
}

const Footer = () => {
  const links = [
    { href: "https://github.com/Jason-Jiang21", label: "GitHub", icon: "★" },
    { href: "https://www.linkedin.com/in/jason-jiang-647ba7245/", label: "LinkedIn", icon: "◆" },
    { href: "mailto:jnjiang@usc.edu", label: "Email", icon: "✉" },
  ];

  return (
    <footer className="flex justify-center gap-8 pt-12 border-t border-purple-500/20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      {links.map((link) => {
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300 p-3 rounded-lg hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30"
            title={link.label}
          >
            <span className="text-2xl">{link.icon}</span>
          </a>
        );
      })}
    </footer>
  );
}