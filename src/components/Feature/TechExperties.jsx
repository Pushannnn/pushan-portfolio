import React, { useState } from 'react';

// Inline CSS for bounce animation
const bounceStyle = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}
.bounce {
  animation: bounce 1.5s infinite;
}
`;

const categories = ['Frontend Development', 'Backend Development', 'Database'];

const techImages = {
  'Frontend Development': [
    'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    'https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--programming-language-pack-logos-icons-1174950.png',
  ],
  'Backend Development': [
    'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png',
    'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png',
  ],
  'Database': [
    'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png',
    'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png',
  ],
};

export default function TechExpertise() {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');

  return (
    <>
      <style>{bounceStyle}</style>

      <div id='tech' className="h-[400px] flex items-center justify-center bg-gradient-to-r from-green-100 via-white to-blue-100">
        <div className="w-full max-w-5xl mx-auto px-4 text-center">

          {/* Header */}
          <div className="text-sm text-gray-500 font-medium flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-16 bg-gray-300"></div>
            Mine Expertise
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Technologies <span className="text-green-500">I rely</span>
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-6 text-base pt-2 border-b pb-4 mb-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`cursor-pointer font-semibold pb-4 ${
                  activeCategory === cat
                    ? 'text-green-500 border-b-2 border-green-500'
                    : 'text-gray-800'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Centered Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            {techImages[activeCategory].map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-3 flex items-center justify-center w-20 h-20 shadow-sm"
              >
                <img
                  src={img}
                  alt="tech"
                  className="w-10 h-10 object-contain bounce"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
