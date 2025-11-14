import React, { useEffect, useRef, useState } from 'react';
import myskills from '../../assets/img/Hero/myskills.png'
import './Feature.css';

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Trigger animation
                        setVisible(true);
                    } else {
                        // Reset animation when section leaves viewport
                        setVisible(false);
                    }
                });
            },
            { threshold: 0.2 } // trigger when 20% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const renderFeature = (feature, index, offset = 0) => {
        return (
            <div
                key={index}
                className={`flex flex-col gap-3 cursor-pointer pop-up ${visible ? 'animate' : ''}`}
                style={{ animationDelay: `${(index + offset) * 0.2}s` }}
            >
                <div className="w-14 h-14  rounded-2xl flex items-center justify-center shadow-lg p-2">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <div>
                    <h3 className="text-slate-900 text-lg md:text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base">{feature.description}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='bg-white' ref={sectionRef}>
            <div className="max-w-screen-xl mx-auto py-10 px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="inline-block mb-4">
                        <span className="bg-blue-100 text-black-700 text-sm font-semibold px-4 py-2 rounded-full">
                            My Skills
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                         <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">SKILLS </span>I Provide
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Designed to help you focus on what's important and get more done in less time.
                    </p>
                </div>

                {/* Features & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">

                    {/* Left Features */}
                    <div className="flex flex-col gap-8">
                        {features.slice(0, 3).map((f, i) => renderFeature(f, i))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center items-center my-8 lg:my-0">
                        <img
                            src={myskills}
                            alt="Services"
                            className={`w-full max-w-sm md:max-w-md rounded-3xl shadow-xl pop-up ${visible ? 'animate' : ''}`}
                            style={{ animationDelay: `0.6s` }}
                        />
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col gap-8">
                        {features.slice(3).map((f, i) => renderFeature(f, i, 3))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Feature;