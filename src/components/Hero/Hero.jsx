import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for fade-in effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Initialize particles.js
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'repulse' } },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        retina_detect: true
      });
    }
  }, []);


  return (
    <div ref={heroRef} className="relative pt-10 pb-15 overflow-hidden min-h-[400px]">
      {/* Particles.js container */}
      <div
        id="particles-js"
        ref={particlesRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: '#000000',
          zIndex: 1
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative pointer-events-none" style={{ zIndex: 10 }}>
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
            {/* Badge - Zoom in */}
            <div 
              className={`inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm transform-gpu transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span className="text-indigo-300 text-xs font-semibold">
                pushanmaharjan20@gmail.com
              </span>
            </div>

            {/* Heading - Slide in from left to center */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              <span 
                className={`inline-block bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent transform-gpu transition-all duration-1200 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[200%]'
                }`}
              >
                Pushan Maharjan
              </span>
              <br />
              <span 
                className={`inline-block text-white transform-gpu transition-all duration-1200 delay-300 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[200%]'
                }`}
              >
                FULL STACK DEVELOPER
              </span>
            </h1>

            {/* Description - Slide in from right to center */}
            <p 
              className={`text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto transform-gpu transition-all duration-1200 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[200%]'
              }`}
            >
              Hello mate, Trying to make "Hello World" the new "abc"
            </p>

            {/* Buttons - Slide up with bounce */}
            <div 
              className={`flex flex-wrap justify-center gap-3 transform-gpu transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <button
                className="cursor-pointer group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-500 transform-gpu hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/50 pointer-events-auto overflow-hidden"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pushan_Maharjan_CV.pdf';
                  link.download = 'Pushan_Maharjan_CV.pdf';
                  link.click();
                }}
              >
                {/* Gray overlay that slides from left to right on hover */}
                <span className="absolute inset-0 bg-gray-600 transform-gpu translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;