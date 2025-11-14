import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000 + 500;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.reset();
          this.z = 1000;
        }
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = this.x * scale;
        const y2d = this.y * scale;
        const size2d = this.size * scale;

        ctx.save();
        ctx.globalAlpha = scale * 0.8;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={heroRef}  className="relative pt-10 pb-15 overflow-hidden min-h-[400px]">
      {/* Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className={`max-w-3xl transform-gpu transition-all duration-[2500ms] ease-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-16'
            }`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-semibold">
                pushanmaharjan20@gmail.com
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              <span className="bg-gradient-to-r from-gray-400  to-blue-400 bg-clip-text text-transparent">
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
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-1">
                Download CV
                <ArrowDown className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-shape {
          position: absolute;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.15), rgba(16, 185, 129, 0.15));
          border-radius: 50%;
          filter: blur(60px);
          animation: float 15s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: -5%;
          left: -5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 250px;
          height: 250px;
          top: 40%;
          right: -5%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          bottom: 10%;
          left: 30%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
