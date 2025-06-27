import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  Hi, I'm Andrew Gamal
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A passionate Full-Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
                  I'm also the founder of SilverCodeLine, a platform committed to empowering computer science students with 
                  free, structured tech learning paths, gamified motivation, and mentorship.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I build scalable, user-friendly web 
                  applications that solve real-world problems. From crafting sleek React interfaces to designing RESTful APIs 
                  and implementing secure authentication systems, I aim to deliver clean, maintainable code and exceptional user experiences.
                </p>
              </div>

              {/* What I Do Section */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary-400 font-medium mb-2">Full-Stack Development (MERN Stack)</h4>
                    <p className="text-gray-300 text-sm">
                      I build robust and responsive full-stack applications using MongoDB, Express.js, React.js, and Node.js. 
                      I follow modern best practices, including MVC architecture, REST APIs, and reusable components.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-medium mb-2">Project Architecture & Team Leadership</h4>
                    <p className="text-gray-300 text-sm">
                      I've led and collaborated with teams to design systems from scratch — including role-based dashboards, 
                      scalable backend structures, and intuitive UI experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-medium mb-2">Cybersecurity Awareness</h4>
                    <p className="text-gray-300 text-sm">
                      With hands-on training in web penetration testing and bug bounty methodologies, I actively focus on 
                      secure coding and vulnerability prevention (including SQL Injection, XSS, and IDOR).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary-400 font-medium mb-2">Mentorship & Community Building</h4>
                    <p className="text-gray-300 text-sm">
                      I'm building SilverCodeLine to offer learning roadmaps, project-based tracks, and peer mentorship. 
                      Our mission is to make tech education more accessible and accountable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - SilverCodeLine Highlight */}
            <div className="space-y-6">
              <div className="card bg-gradient-to-br from-primary-900/20 to-primary-800/20 border-primary-500/30">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    SilverCodeLine
                  </h3>
                  <p className="text-primary-300 font-medium">
                    Empowering Computer Science Students
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <h4 className="text-primary-400 font-medium mb-2">🎯 Mission</h4>
                    <p className="text-gray-300 text-sm">
                      Making tech education accessible, structured, and accountable for computer science students worldwide.
                    </p>
                  </div>
                  
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <h4 className="text-primary-400 font-medium mb-2">🚀 What We Offer</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Free, structured learning paths</li>
                      <li>• Gamified motivation system</li>
                      <li>• Peer mentorship programs</li>
                      <li>• Project-based learning tracks</li>
                      <li>• Community-driven support</li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <h4 className="text-primary-400 font-medium mb-2">💡 Vision</h4>
                    <p className="text-gray-300 text-sm">
                      Creating a world where every computer science student has access to quality education, 
                      mentorship, and the tools they need to succeed in tech.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Work With Me */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  Why Work With Me?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      I understand the full development lifecycle, from planning and backend setup to frontend design and deployment.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      I'm constantly learning and improving, especially in areas like security, scalability, and UX.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      I bring structure, communication, and passion to every project I join.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      I care deeply about making technology accessible and using it for good.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 