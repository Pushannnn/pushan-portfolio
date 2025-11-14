import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import pushan from '../../assets/img/Hero/Pushan.jpg';


const Hero2 = () => {
    const features = [
        { icon: Shield, text: "React JS" },
        { icon: Zap, text: "Nest Js" },
        { icon: Users, text: "24/7 Support" }
    ];

    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id='hero' className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-white to-blue-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

            <section className="w-full sm:w-[90%] lg:w-[85%] mx-auto py-8 sm:py-12">
                <div className="container mx-auto px-4 sm:px-5">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">

                        {/* Image Section */}
                        <div className="relative group order-2 md:order-1">
                            <div className="absolute -inset-2 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative">
                                <img
                                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:h-90 rounded-xl shadow-xl object-cover transform group-hover:scale-[1.02] transition duration-500"
                                    src={pushan}
                                    alt="Pushan Maharjan - Fullstack Developer"
                                />
                                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 transform hover:scale-105 transition duration-300">
                                    <div className="text-center">
                                        <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1+</p>
                                        <p className="text-[10px] sm:text-xs text-gray-600 font-medium whitespace-nowrap">Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div
                            ref={contentRef}
                            className={`space-y-3 sm:space-y-4 order-1 md:order-2 transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                                }`}
                        >
                            <div className="mb-3 sm:mb-5 text-center md:text-left">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                    Want to 
                                    <span className="block sm:inline sm:ml-4 mt-1 sm:mt-0 bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent">
                                        know me more?
                                    </span>
                                </h2>
                            </div>

                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center md:text-left">
                                Hello, I am a Fullstack Developer with experience in building responsive and scalable
                                web applications. I work with technologies like React, Node.js (Express js and Nest js) and databases
                                such as MySQL and MongoDB. I enjoy solving complex problems and delivering efficient,
                                high-quality solutions.
                            </p>

                            <p className='text-sm sm:text-base text-gray-600 leading-relaxed text-center md:text-left break-all sm:break-normal'>
                                pushanmaharjan20@gmail.com
                            </p>

                            {/* Feature pills */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-md hover:shadow-lg transition duration-300 group cursor-pointer"
                                        >
                                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 group-hover:scale-110 transition duration-300" />
                                            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">{feature.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero2;