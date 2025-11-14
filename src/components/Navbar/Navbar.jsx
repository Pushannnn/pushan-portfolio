import React, { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const dropdownData = {
        about: {
            title: 'About',
            icon: '👋',
            items: [
                { label: 'Introduction', href: '#hero', icon: '📖', desc: 'Learn about our story' },
                { label: 'Techhnology I use', href: '#tech', icon: '🧑‍💻', desc: 'Learn about our story' },
                { label: 'Project', href: '#project', icon: '📝', desc: 'Our process & methodology' },
                { label: 'How I Work', href: '#how-i-work', icon: '⚙️', desc: 'Our process & methodology' },
            ]
        },
        service: {
            title: 'Service',
            icon: '🚀',
            items: [
                { label: 'FrontEnd', href: '#web-design', icon: '🎨', desc: 'Beautiful & functional' },
                { label: 'Backend', href: '#web-development', icon: '💻', desc: 'Custom solutions' },
                { label: 'UI/UX Design', href: '#uiux-design', icon: '✨', desc: 'User-centered design' },
                { label: 'DSA', href: '#app-development', icon: '📱', desc: 'Data-Structure and Alogrithm' },
            ]
        }
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className="sticky top-0 shadow-lg bg-white/95 backdrop-blur-md z-50 bg-gradient-to-r from-gray-100 via-white to-blue-100">
            <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto py-4 px-4 sm:px-6">

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex gap-x-1 items-center">
                        {/* About Dropdown */}
                        <li className="relative group px-3">
                            <button className="hover:text-blue-600 text-slate-700 font-semibold text-base flex items-center gap-1.5 transition-all py-2 group">
                                About
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-3">
                                <div className="relative">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                                    <div className="relative bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 pt-1">
                                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-white font-semibold text-sm flex items-center gap-2">
                                            <span className="text-xl">{dropdownData.about.icon}</span>
                                            Discover Us
                                        </div>
                                        {dropdownData.about.items.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className="group/item flex items-start gap-3 px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                                            >
                                                <span className="text-2xl group-hover/item:scale-110 transition-transform">{item.icon}</span>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors">{item.label}</div>
                                                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                                                </div>
                                                <svg className="w-4 h-4 text-slate-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Service Dropdown */}
                        <li className="relative group px-3">
                            <button className="hover:text-blue-600 text-slate-700 font-semibold text-base flex items-center gap-1.5 transition-all py-2 group">
                                My Service
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-3">
                                <div className="relative">
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                                    <div className="relative bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-white font-semibold text-sm flex items-center gap-2">
                                            <span className="text-xl">{dropdownData.service.icon}</span>
                                            Mine Services
                                        </div>
                                        <div className="grid grid-cols-2 gap-0">
                                            {dropdownData.service.items.map((item, index) => (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    className="group/item flex flex-col items-center text-center gap-2 px-4 py-4 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border-r border-b border-gray-50 last:border-r-0 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0"
                                                >
                                                    <span className="text-3xl group-hover/item:scale-125 transition-transform duration-300">{item.icon}</span>
                                                    <div>
                                                        <div className="font-semibold text-sm text-slate-800 group-hover/item:text-blue-600 transition-colors">{item.label}</div>
                                                        <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="px-3">
                            <a href="#project" className="relative group hover:text-blue-600 text-slate-700 font-semibold block text-base transition-colors py-2">
                                Project
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="https://www.linkedin.com/in/pushan-maharjan-b007b637b/" target="_blank" rel="noopener noreferrer" className="relative group hover:text-blue-600 text-slate-700 font-semibold block text-base transition-colors py-2">
                                Linkedin
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>

                        <li className="px-3">
                            <a href="https://github.com/Pushannnn" target="_blank" rel="noopener noreferrer" className="relative group hover:text-blue-600 text-slate-700 font-semibold block text-base transition-colors py-2">
                                Github
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="https://wa.me/9823248793" target="_blank" rel="noopener noreferrer" className="relative group hover:text-blue-600 text-slate-700 font-semibold block text-base transition-colors py-2">
                                Whatsapp
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                        <li className="px-3">
                            <a href="https://www.instagram.com/pushannnnnnn/" target="_blank" rel="noopener noreferrer" className="relative group hover:text-blue-600 text-slate-700 font-semibold block text-base transition-colors py-2">
                                Instagram
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center max-lg:ml-auto space-x-3">
                    <h1 className="text-base sm:text-xl font-bold text-center bg-gradient-to-r from-gray-500 via-blue-500 to-red-500 text-transparent bg-clip-text tracking-wide">
                        9823248793 <span className="mx-1 sm:mx-3">||</span> 9765023296
                    </h1>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden bg-blue-50 hover:bg-blue-100 rounded-xl p-2 transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Push Down Style */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-gray-200 ${mobileMenuOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                <div className="w-full bg-gradient-to-br from-white to-blue-50/30">
                    <div className="p-6 max-w-screen-xl mx-auto">
                        <div className="mb-6 pb-4 border-b-2 border-blue-100">
                            <h2 className="text-xl text-slate-800">pushanmaharjan20@gmail.com</h2>
                            <p className="text-sm text-slate-600 mt-1">Your Digital Partner</p>
                        </div>

                        <ul className="space-y-2">
                            {/* Mobile About Dropdown */}
                            <li>
                                <button onClick={() => toggleDropdown('about')} className="w-full flex items-center justify-between text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="flex items-center gap-3">
                                        <span className="text-xl">{dropdownData.about.icon}</span>
                                        About
                                    </span>
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'about' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 space-y-1 bg-white rounded-xl p-2 shadow-inner">
                                        {dropdownData.about.items.map((item, index) => (
                                            <a key={index} href={item.href} onClick={closeMobileMenu} className="flex items-start gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-3 px-3 text-sm rounded-lg transition-all group">
                                                <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                                <div>
                                                    <div className="font-semibold">{item.label}</div>
                                                    <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            {/* Mobile Service Dropdown */}
                            <li>
                                <button onClick={() => toggleDropdown('service')} className="w-full flex items-center justify-between text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="flex items-center gap-3">
                                        <span className="text-xl">{dropdownData.service.icon}</span>
                                        My Service
                                    </span>
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'service' ? 'rotate-180 text-blue-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'service' ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <div className="ml-4 grid grid-cols-2 gap-2 bg-white rounded-xl p-2 shadow-inner">
                                        {dropdownData.service.items.map((item, index) => (
                                            <a key={index} href={item.href} onClick={closeMobileMenu} className="flex flex-col items-center text-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 py-3 px-2 text-xs rounded-lg transition-all group">
                                                <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                                                <div>
                                                    <div className="font-semibold text-xs leading-tight">{item.label}</div>
                                                    <div className="text-[10px] text-slate-400 mt-1">{item.desc}</div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#project" onClick={closeMobileMenu} className="flex items-center gap-3 text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="text-xl">📝</span>
                                    Project
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/pushan-maharjan-b007b637b/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="flex items-center gap-3 text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="text-xl">💼</span>
                                    Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Pushannnn" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="flex items-center gap-3 text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="text-xl">💻</span>
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/9823248793" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="flex items-center gap-3 text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="text-xl">💬</span>
                                    Whatsapp
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/pushannnnnnn/" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="flex items-center gap-3 text-slate-700 font-semibold text-base py-3 px-4 rounded-xl hover:bg-white transition-all">
                                    <span className="text-xl">📸</span>
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;