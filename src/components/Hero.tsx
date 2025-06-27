import React, { useState, useEffect, useMemo } from 'react';
import profileImg from '../assets/andrew2021.jpg';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = useMemo(() => [
    'Full-Stack Developer',
    'Cybersecurity Enthusiast',
    'Tech Educator',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 relative overflow-hidden">
      {/* Enhanced Profile Image - Mobile Optimized */}
      <div
        className="absolute z-20"
        style={{
          top: '2rem',
          right: '2.5rem',
          // Responsive adjustments
          ...(window.innerWidth >= 640 ? { top: '3rem', right: '3.5rem' } : {}),
          ...(window.innerWidth >= 768 ? { top: '4rem', right: '5rem' } : {}),
          ...(window.innerWidth >= 1024 ? { top: '5rem', right: '7rem' } : {}),
          ...(window.innerWidth >= 1280 ? { top: '6rem', right: '9rem' } : {}),
        }}
      >
        <div className="relative group">
          {/* Main Image with Mobile-Optimized Size */}
          <img
            src={profileImg}
            alt="Andrew Gamal profile"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-cover animate-fade-in hover:scale-105 transition-all duration-500"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.4)) brightness(1.05) contrast(1.05)',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              transform: 'rotate(-8deg)',
              objectPosition: 'top'
            }}
          />
          
          {/* Subtle Glow Effect - Mobile Optimized */}
          <div 
            className="absolute inset-0 animate-pulse opacity-30 sm:opacity-40"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
              transform: 'rotate(-8deg) scale(1.08)',
              filter: 'blur(8px)',
              zIndex: -1
            }}
          />
          
          {/* Floating Elements - Hidden on Mobile */}
          <div className="hidden sm:block absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary-400 rounded-full animate-float opacity-70"></div>
          <div className="hidden sm:block absolute -bottom-2 -right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gold-400 rounded-full animate-float-delay-1 opacity-70"></div>
          <div className="hidden sm:block absolute top-1/2 -right-2 sm:-right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-300 rounded-full animate-float-delay-2 opacity-50"></div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
               style={{
                 background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                 filter: 'blur(15px)'
               }}>
          </div>
        </div>
      </div>

      {/* Animated Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gold-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-primary-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container-custom text-center relative z-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Greeting - Mobile Optimized */}
          <p className="text-primary-400 font-semibold mb-4 sm:mb-6 animate-fade-in text-base sm:text-lg">
            Hi there, I'm
          </p>
          
          {/* Name - Mobile Optimized */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black mb-3 sm:mb-4 animate-slide-up leading-tight">
            <span className="bg-gradient-to-r from-primary-400 via-gold-400 to-primary-600 bg-clip-text text-transparent">
              Andrew Gamal
            </span>
          </h1>
          
          {/* Subtitle - Mobile Optimized */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-slide-up">
            Founder of SilverCodeLine
          </h2>
          
          {/* Animated Typing Title - Mobile Optimized */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-200 mb-6 sm:mb-10 animate-slide-up min-h-[1.5rem] sm:min-h-[2rem]">
            <span className="text-gray-300">I'm a </span>
            <span className="text-primary-400 border-r-2 border-primary-400 animate-pulse">
              {currentText}
            </span>
          </h3>
          
          {/* Description - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up px-2">
            I build scalable web applications using the MERN stack and empower computer science students 
            through structured learning paths and mentorship. Passionate about creating technology that makes a difference.
          </p>
          
          {/* Stats - Mobile Optimized */}
          <div className="flex justify-center mb-12 sm:mb-16 animate-slide-up w-full">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1 sm:mb-2">8+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
            </div>
            <div className="text-center ml-8 sm:ml-12 md:ml-16">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-1 sm:mb-2">1+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
            </div>
          </div>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up w-full">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="flex items-center justify-center sm:justify-start relative z-10">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-outline text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-auto group relative overflow-hidden"
            >
              <span className="flex items-center justify-center sm:justify-start relative z-10">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          {/* Scroll Indicator - Mobile Optimized */}
          <div className="mt-12 sm:mt-16 md:mt-20 animate-bounce-slow">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-gold-400 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-medium group-hover:text-gold-400 transition-colors duration-300">
                  Scroll Down
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 