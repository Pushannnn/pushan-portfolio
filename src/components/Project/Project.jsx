import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import cosmetic from '../../assets/ProjectImg/cosmetic.png'
import persian from '../../assets/ProjectImg/persian.png'
import ecommerce from '../../assets/ProjectImg/e-commerce.png'

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl h-[600px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full Card Background with Project Preview */}
      <div className="absolute inset-0 bg-gray-100 overflow-hidden">
        <div 
          className="w-full transition-transform duration-[10000ms] ease-linear"
          style={{
            transform: isHovered ? 'translateY(calc(-100% + 600px))' : 'translateY(0)',
          }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto object-cover object-top min-h-[1200px]"
          />
        </div>
      </div>

      {/* Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Project Info - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-200 mb-6 text-lg">{project.description}</p>
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {/* {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              Code
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default function PortfolioProjects() {
  const projects = [
    {
      title: "E-Commerce Cosmetic",
      description: "A e-commerce solution with beauty product.",
      image: cosmetic,
      liveUrl: "https://cosmetic-e-commerce-pushan.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Perisan Cat Nepal",
      description: "A website for selling persian cat in Nepal.",
      image: persian,
      liveUrl: "https://persian-cat-nepal-website.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Electronic",
      description: "Real-time weather app with forecasts, maps, and location search.",
      image: ecommerce,
      liveUrl: "https://e-commerce-pushan.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "COMMING SOON...",
      description: "WAIT FOR NEW PROJECTS...",
      image: "",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <div id='project' className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hover over each card to preview the project
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}