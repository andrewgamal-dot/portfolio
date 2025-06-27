import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "Material UI", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "JWT Authentication", level: "Advanced" },
        { name: "MVC Architecture", level: "Advanced" },
        { name: "API Design", level: "Intermediate" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Database Design", level: "Intermediate" },
        { name: "Data Modeling", level: "Intermediate" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Kali Linux", level: "Intermediate" },
        { name: "Docker", level: "Beginner" },
        { name: "AWS", level: "Beginner" },
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Burp Suite", level: "Intermediate" },
        { name: "Nmap", level: "Intermediate" },
        { name: "Metasploit", level: "Intermediate" },
        { name: "OWASP Top 10", level: "Advanced" },
        { name: "Web Penetration Testing", level: "Intermediate" },
        { name: "Secure Coding", level: "Advanced" },
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Web Application Architecture", level: "Advanced" },
        { name: "Team Collaboration", level: "Advanced" },
        { name: "Agile Workflows", level: "Intermediate" },
        { name: "Project Management", level: "Intermediate" },
        { name: "Technical Writing", level: "Intermediate" },
        { name: "Mentorship", level: "Advanced" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Beginner":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit spans the full development stack, from frontend frameworks to backend architecture, 
            with a strong focus on security and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-gray-100 mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              Development Approach
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Clean, maintainable code with proper documentation and testing
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Security-first development with OWASP guidelines
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Responsive design and cross-browser compatibility
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Performance optimization and scalability considerations
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              Learning Philosophy
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Continuous learning and staying updated with latest technologies
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Hands-on project-based learning approach
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Community-driven knowledge sharing and mentorship
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Practical application of theoretical concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 