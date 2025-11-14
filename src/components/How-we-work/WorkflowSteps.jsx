import React, { useState, useEffect, useRef } from "react";
import { ClipboardList, Map, Palette, TestTube, Rocket, Wrench } from "lucide-react";

const WorkflowSteps = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Requirement Gathering",
      description:
        "We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.",
      icon: ClipboardList,
      gradient: "bg-gradient-to-br from-violet-400 via-purple-400 to-fuchsia-400",
    },
    {
      number: "02",
      title: "Plan & Resources",
      description:
        "After gathering requirements, we devise a strategic path and select resources. As the best IT company in Nepal, we offer clients a roadmap, laying the groundwork for a successful project.",
      icon: Map,
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400",
    },
    {
      number: "03",
      title: "Design & Develop",
      description:
        "In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality.",
      icon: Palette,
      gradient: "bg-gradient-to-br from-emerald-400 via-teal-400 to-green-400",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description:
        "In this phase, we rigorously test and validate to ensure all elements work correctly and meet standards, delivering the desired user experience. Our team tests each aspect for reliability.",
      icon: TestTube,
      gradient: "bg-gradient-to-br from-amber-400 via-orange-400 to-red-400",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "Once the product meets standards, we deploy it, releasing product or updates on servers. This ensures our products are delivered seamlessly and efficiently.",
      icon: Rocket,
      gradient: "bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description:
        "In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Optimization keeps performance high and client satisfaction focused on operational excellence.",
      icon: Wrench,
      gradient: "bg-gradient-to-br from-indigo-400 via-purple-400 to-violet-400",
    },
  ];

  // 👇 Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="how-i-work" ref={sectionRef} className="min-h-screen py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Enjoy{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              seamless service
            </span>{" "}
            with our easy steps!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Efficient workflow from requirements gathering to support and
            maintenance
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`relative group p-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer 
                ${
                  hoverIndex !== null && hoverIndex !== index
                    ? "blur-[1px] opacity-50"
                    : "opacity-100"
                }
                ${
                  isVisible
                    ? "animate-slideDown opacity-100"
                    : "opacity-0 -translate-y-10"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: "1s", // ⏱ adjust slide speed here
                }}
              >
                {/* Circle */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`relative w-32 h-32 ${step.gradient} rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300`}
                  >
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <Icon className="w-12 h-12 text-gray-800" strokeWidth={1.5} />
                    </div>

                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg font-bold text-lg group-hover:bg-green-500 transition-colors duration-300">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-3 mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔽 Add CSS animation */}
      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation-name: slideDown;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default WorkflowSteps;
