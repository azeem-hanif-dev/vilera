import React from 'react';
import Logo from './icons/Logo';

const About: React.FC = () => {

  // Smooth scroll function (matches your header scroll speed)
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

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 90; // adjust for header height
      smoothScrollTo(offsetTop, 1500);
    }
  };

  return (
    <div id="about" className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white leading-tight">
            Scale, Quality, and Reliability. Built for Business.
          </h2>
          <p className="mt-6 text-lg text-gray-200 text-justify">
            Vilera Pakistan offers business buyers the distinct advantage of working directly with the country's largest manufacturer of premium cleaning essentials. We eliminate supply chain risk by offering consistent, large-volume availability of sponges, spirals, mops, and wipers, all produced in our state-of-the-art facilities. Our processes are ISO-aligned, guaranteeing every unit meets the highest standards of performance and durability—ensuring customer satisfaction and minimizing returns for our partners.
          </p>
          
          {/* Get Quotation Button */}
          <button
            onClick={scrollToContact}
            className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-vilera-green-light to-vilera-green-dark text-white font-poppins font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Go to Quotation
          </button>
        </div>

        {/* Right Logo Section */}
        <div className="flex justify-center items-center p-2">
          <div className="bg-[#323232] rounded-[50px] p-8 border-8 border-vilera-green-light shadow-2xl w-full max-w-[32rem] h-[20rem] flex justify-center items-center">
            {/* Scaled Logo */}
            <div className="scale-80 sm:scale-80 lg:scale-[1.4] xl:scale-[1.4] transition-transform duration-300">
              <Logo className="w-auto h-auto text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
