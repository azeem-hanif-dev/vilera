import React, { useState, useEffect } from 'react';
import Logo from './icons/Logo';
import PhoneIcon from './icons/PhoneIcon';
import Logocoloured from './icons/Logocoloured';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active section dynamically
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Smooth scroll function (slower & elegant)
  const smoothScrollTo = (targetY: number, duration = 1500) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Ease-in-out cubic motion
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * easeInOutCubic);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (link: string) => {
    const section = document.querySelector(link);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - 90; // offset for header
      smoothScrollTo(sectionTop, 1500);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-md ${
        isScrolled ? 'bg-white' : 'bg-vilera-blue'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-24 md:h-32 transition-all duration-700 ease-in-out">
          {/* Logo */}
          <div className="flex-shrink-0 transform transition-transform duration-700 hover:scale-105">
            <a href="#" className="flex items-center">
              {isScrolled ? (
                <Logocoloured className="h-12 w-auto transition-all duration-500" />
              ) : (
                <Logo className="h-12 w-auto text-white transition-all duration-500" />
              )}
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-xl font-poppins cursor-pointer transition-all duration-500 
                ${
                  isScrolled
                    ? 'text-[#253672] hover:text-vilera-green'
                    : 'text-white hover:text-vilera-green-light'
                } 
                ${
                  activeSection === link.href
                    ? 'scale-105 text-vilera-green'
                    : 'hover:scale-105'
                }`}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-vilera-green transform scale-x-0 origin-left transition-transform duration-500 ${
                    activeSection === link.href ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center space-x-3">
            <PhoneIcon
              className={`w-7 h-7 transition-colors duration-500 ${
                isScrolled ? 'text-[#253672]' : 'text-white'
              }`}
            />
            <a
              href="tel:0324-1143720"
              className={`text-xl font-poppins font-bold transition-colors duration-500 ${
                isScrolled ? 'text-[#253672]' : 'text-white'
              }`}
            >
              0324-1143720
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors duration-500 ${
                isScrolled ? 'text-[#253672]' : 'text-white'
              }`}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden backdrop-blur-md pb-6 transition-all duration-700 ${
            isScrolled ? 'bg-white/95' : 'bg-vilera-blue/95'
          }`}
        >
          <div className="px-4 pt-4 flex flex-col items-center space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-lg font-poppins transition-all duration-500 ${
                  isScrolled
                    ? 'text-[#253672] hover:text-vilera-green'
                    : 'text-white hover:text-vilera-green-light'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center pt-3 space-x-2">
              <PhoneIcon
                className={`w-6 h-6 transition-colors duration-500 ${
                  isScrolled ? 'text-[#253672]' : 'text-white'
                }`}
              />
              <a
                href="tel:0324-1143720"
                className={`text-lg font-poppins font-bold transition-colors duration-500 ${
                  isScrolled ? 'text-[#253672]' : 'text-white'
                }`}
              >
                0324-1143720
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
