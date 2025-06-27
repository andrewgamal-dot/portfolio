import React from 'react';
// import profileImg from '../assets/profile.jpg'; // Uncomment if you want to use a profile image

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 relative overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Profile Image (optional) */}
          {/* <img
            src={profileImg}
            alt="Andrew Gamal profile"
            className="w-40 h-40 rounded-full border-4 border-primary-500 shadow-xl object-cover mb-8 animate-fade-in"
            style={{ background: '#222' }}
          /> */}
          {/* Greeting */}
          <p className="text-primary-400 font-semibold mb-6 animate-fade-in text-lg">
            Hi there, I'm
          </p>
          {/* Name - Single line, full gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-400 via-gold-400 to-primary-600 bg-clip-text text-transparent">
              Andrew Gamal
            </span>
          </h1>
          {/* Subtitle - Founder of SilverCodeLine */}
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-10 animate-slide-up">
            Founder of SilverCodeLine
          </h2>
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-primary-200 mb-10 animate-slide-up">
            Full-Stack Developer (MERN) | Cybersecurity Enthusiast
          </h3>
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            I build scalable web applications using the MERN stack and empower computer science students 
            through structured learning paths and mentorship. Passionate about creating technology that makes a difference.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary text-xl px-10 py-4"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View My Work
              </span>
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-outline text-xl px-10 py-4"
            >
              <span className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
              </span>
            </button>
          </div>
          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce-slow">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-gold-400 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
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
                <span className="text-sm font-medium group-hover:text-gold-400 transition-colors duration-300">
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