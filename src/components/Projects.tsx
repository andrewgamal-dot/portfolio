import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "SilverCodeLine",
      description: "A full-stack educational platform with learning tracks, mentor matching, and gamified learning progress tracking. Empowering computer science students with structured, accessible tech education.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true,
      status: "In Development"
    },
    {
      id: 2,
      title: "Hospital Management System",
      description: "A comprehensive Java-based hospital management system with patient records, appointment scheduling, and administrative dashboard. Features role-based access control and data management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Java", "Swing/AWT", "MySQL", "JDBC", "Object-Oriented Design"],
      category: "backend",
      github: "https://github.com/andrewgamal-dot/hospital-system-",
      live: "#",
      featured: true,
      status: "Completed"
    },
    {
      id: 3,
      title: "Startup Project",
      description: "A JavaScript-based startup project showcasing modern web development practices. Features responsive design, interactive elements, and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Modern Web APIs"],
      category: "frontend",
      github: "https://github.com/andrewgamal-dot/startup",
      live: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 4,
      title: "Field Training Management System",
      description: "A comprehensive dashboard system for students, mentors, and admins with grading, reports, and analytics. Features role-based access control and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 5,
      title: "Secure Book Review App",
      description: "A MERN stack project with role-based login, review submission, and MongoDB integration. Implements security best practices including JWT authentication and input validation.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 6,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with scalability and security in mind.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe API", "Redux"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
      status: "In Development"
    },
    {
      id: 7,
      title: "Task Management Dashboard",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop functionality and notifications.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
      status: "Completed"
    },
    {
      id: 8,
      title: "Weather Application",
      description: "A responsive weather app with location-based forecasts, interactive maps, and detailed weather analytics. Integrates with multiple weather APIs for comprehensive data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      technologies: ["React.js", "Weather API", "Chart.js", "Geolocation API"],
      category: "frontend",
      github: "#",
      live: "#",
      featured: false,
      status: "Completed"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            security implementation, and user experience design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-primary-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`card group hover:shadow-glow-accent transform hover:scale-105 transition-all duration-500 ${project.featured ? 'ring-2 ring-primary-500' : ''}`}>
              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-dark-800/90 text-gray-300 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-dark-600">
                  {project.status}
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-gold-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    ⭐ Featured
                  </div>
                )}
                
                {/* Hover Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-100 group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="skill-tag text-xs hover:scale-105 transition-transform duration-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Project Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    className="btn-secondary text-sm py-2 px-4 flex-1 text-center group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 inline mr-2 group-hover/link:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="btn-primary text-sm py-2 px-4 flex-1 text-center group/link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 inline mr-2 group-hover/link:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 