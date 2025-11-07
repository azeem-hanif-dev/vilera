import React from 'react';
import DownloadIcon from './icons/DownloadIcon';

const Hero: React.FC = () => {
  return (
    <div
      id="top" className="relative rounded-3xl lg:rounded-[50px] shadow-lg overflow-hidden bg-cover bg-center bg-no-repeat mt-16 sm:mt-20 lg:mt-24"
      style={{ backgroundImage: "url('/images/backgroundimage.png')" }}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-visible">
        
        {/* Responsive Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center mt-10">
          
          {/* Left Content (Text Section) */}
          <div className="z-10 text-center lg:text-left order-1 lg:order-1 lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-poppins font-extrabold text-gray-800 leading-snug sm:leading-tight">
              Define Clean. Powered by{" "}
              <span className="text-vilera-text-green">Pakistan's</span> Manufacturing Leader.
            </h1>

            <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-700 font-poppins max-w-2xl mx-auto lg:mx-0">
              Achieve a deeper, lasting shine with products engineered for ultimate performance and efficiency.
            </p>

            <button
            onClick={() => window.open('/pdf/VileraCatalog.pdf', '_blank')}
            className="mt-10 inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-[#2A2A2A] text-white font-poppins font-bold text-lg sm:text-xl rounded-2xl shadow-md hover:bg-black transition-all duration-300 transform hover:scale-105">
              Download Catalog
              <DownloadIcon className="w-6 h-6 sm:w-7 sm:h-7 ml-3" />
            </button>
          </div>

          {/* Right Image (Appears Below Text on Small Screens, Side by Side on LG) */}
          <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 lg:col-span-5 overflow-visible">
            <div
              className="
                relative 
                w-full 
                lg:w-[150%] 
                xl:w-[170%] 
                2xl:w-[190%] 
                flex 
                justify-end 
                translate-x-0 
                lg:translate-x-16 
                xl:translate-x-28 
                2xl:translate-x-40
              "
            >
              <img
                src="/images/heroimage.png"
                alt="Vilera cleaning products"
                className="
                  object-contain 
                  max-w-none 
                  h-auto 
                  w-full 
                  md:w-[120%] 
                  lg:w-[140%] 
                  xl:w-[160%] 
                  2xl:w-[180%]
                  transition-all 
                  duration-500
                "
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
