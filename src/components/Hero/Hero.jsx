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
          <div
            className={`max-w-3xl transform-gpu transition-all duration-[2500ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'
              }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-semibold">
                pushanmaharjan20@gmail.com
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              <span className="bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent">
                Pushan Maharjan
              </span>
              <br />
              <span className="text-white">FULL STACK DEVELOPER</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Hello mate, Trying to make "Hello World" the new "abc"
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                className="cursor-pointer group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1 pointer-events-auto"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Pushan_Maharjan_CV.pdf';
                  link.download = 'Pushan_Maharjan_CV.pdf';
                  link.click();
                }}
              >
                Download CV
                <ArrowDown className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;