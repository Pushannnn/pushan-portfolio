import React, { useEffect, useRef, useState } from 'react';
import myskills from '../../assets/img/Hero/myskills.png'

const features = [
  { title: "React JS", description: "Build interactive and responsive user interfaces with component-based architecture.", image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
  { title: "Express JS", description: "Create fast and minimalist web applications with powerful Node.js backend framework.", image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" },
  { title: "Nest JS", description: "Develop scalable and maintainable server-side applications with TypeScript-based framework.", image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png" },
  { title: "Java", description: "Build enterprise-grade applications with robust, secure, and high-performance Java technology.", image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
  { title: "MySQL", description: "Manage relational databases with reliable SQL-based data storage and retrieval solutions.", image: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" },
  { title: "NoSQL", description: "Handle unstructured data efficiently with flexible and scalable document-based databases.", image: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png" },
];

const Feature = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -10000, y: -10000 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // particles.js style animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = sectionRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resizeCanvas();

    const particleCount = 250;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 2;
        this.speedY = Math.random() * 3 + 1.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.4;
        this.repulseRadius = 150;
      }

      update(mouseX, mouseY) {
        // Calculate distance to mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repulse effect when mouse is near
        if (distance < this.repulseRadius && distance > 0 && mouseX > -1000) {
          const force = (this.repulseRadius - distance) / this.repulseRadius;
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          const repulseForce = force * 12;
          this.x += forceDirectionX * repulseForce;
          this.y += forceDirectionY * repulseForce;
        }
        
        // Always apply normal falling movement
        this.y += this.speedY;
        this.x += this.speedX;

        // Reset particle when it goes off screen
        if (this.y > canvas.height + this.size) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width + this.size) {
          this.x = -this.size;
        }
        if (this.x < -this.size) {
          this.x = canvas.width + this.size;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -10000;
      mouseRef.current.y = -10000;
    };

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Add particles on click
      for (let i = 0; i < 4; i++) {
        const particle = new Particle();
        particle.x = clickX + (Math.random() - 0.5) * 20;
        particle.y = clickY + (Math.random() - 0.5) * 20;
        particlesRef.current.push(particle);
      }
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Attach events to CONTAINER, not canvas
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderFeature = (feature, index, offset = 0) => (
    <div
      key={index}
      className={`flex flex-col gap-3 cursor-pointer transition-all duration-700 hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index + offset) * 200}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg p-2 bg-white transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
        <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 className="text-white text-lg md:text-xl font-semibold mb-1 transition-colors duration-300 hover:text-blue-400">{feature.title}</h3>
        <p className="text-white  text-sm md:text-sm">{feature.description}</p>
      </div>
    </div>
  );

  return (
    <div className="relative bg-black overflow-hidden min-h-screen" ref={sectionRef}>
      {/* Canvas particles background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          {/* Header */}
          <div className={`mb-12 text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-black text-sm font-semibold px-4 py-2 rounded-full">
                My Skills
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              <span className="bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent">SKILLS</span> I Provide
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Designed to help you focus on what's important and get more done in less time.
            </p>
          </div>

          {/* Features & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
            <div className="flex flex-col gap-8">
              {features.slice(0, 3).map((f, i) => renderFeature(f, i))}
            </div>

            <div className="flex justify-center items-center my-8 lg:my-0">
              <div className={`transition-all duration-1000 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`} style={{ transitionDelay: '600ms' }}>
                <img
                  src={myskills}
                  alt="Services"
                  className="w-full max-w-sm md:max-w-md rounded-3xl shadow-xl transition-transform duration-700 hover:rotate-360 hover:scale-110"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {features.slice(3).map((f, i) => renderFeature(f, i, 3))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;







// import React, { useEffect, useRef, useState } from 'react';
// import myskills from '../../assets/img/Hero/myskills.png'

// const features = [
//     { title: "React JS", description: "Build interactive and responsive user interfaces with component-based architecture.", image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
//     { title: "Express JS", description: "Create fast and minimalist web applications with powerful Node.js backend framework.", image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" },
//     { title: "Nest JS", description: "Develop scalable and maintainable server-side applications with TypeScript-based framework.", image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png" },
//     { title: "Java", description: "Build enterprise-grade applications with robust, secure, and high-performance Java technology.", image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
//     { title: "MySQL", description: "Manage relational databases with reliable SQL-based data storage and retrieval solutions.", image: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png" },
//     { title: "NoSQL", description: "Handle unstructured data efficiently with flexible and scalable document-based databases.", image: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png" },
// ];

// const Feature = () => {
//     const sectionRef = useRef(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         // Trigger animation
//                         setVisible(true);
//                     } else {
//                         // Reset animation when section leaves viewport
//                         setVisible(false);
//                     }
//                 });
//             },
//             { threshold: 0.2 } // trigger when 20% visible
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => observer.disconnect();
//     }, []);

//     const renderFeature = (feature, index, offset = 0) => {
//         return (
//             <div
//                 key={index}
//                 className={`flex flex-col gap-3 cursor-pointer pop-up ${visible ? 'animate' : ''}`}
//                 style={{ animationDelay: `${(index + offset) * 0.2}s` }}
//             >
//                 <div className="w-14 h-14  rounded-2xl flex items-center justify-center shadow-lg p-2">
//                     <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
//                 </div>
//                 <div>
//                     <h3 className="text-slate-900 text-lg md:text-xl font-semibold mb-1">{feature.title}</h3>
//                     <p className="text-slate-500 text-sm md:text-base">{feature.description}</p>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className='bg-white' ref={sectionRef}>
//             <div className="max-w-screen-xl mx-auto py-10 px-4">
//                 {/* Header */}
//                 <div className="mb-12 text-center">
//                     <div className="inline-block mb-4">
//                         <span className="bg-blue-100 text-black-700 text-sm font-semibold px-4 py-2 rounded-full">
//                             My Skills
//                         </span>
//                     </div>
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
//                          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">SKILLS </span>I Provide
//                     </h2>
//                     <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                         Designed to help you focus on what's important and get more done in less time.
//                     </p>
//                 </div>

//                 {/* Features & Image */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

//                     {/* Left Features */}
//                     <div className="flex flex-col gap-8">
//                         {features.slice(0, 3).map((f, i) => renderFeature(f, i))}
//                     </div>

//                     {/* Center Image */}
//                     <div className="flex justify-center items-center my-8 lg:my-0">
//                         <img
//                             src={myskills}
//                             alt="Services"
//                             className={`w-full max-w-sm md:max-w-md rounded-3xl shadow-xl pop-up ${visible ? 'animate' : ''}`}
//                             style={{ animationDelay: `0.6s` }}
//                         />
//                     </div>

//                     {/* Right Features */}
//                     <div className="flex flex-col gap-8">
//                         {features.slice(3).map((f, i) => renderFeature(f, i, 3))}
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Feature;