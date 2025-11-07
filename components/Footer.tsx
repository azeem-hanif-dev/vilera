import React from 'react';
import Logofooter from './icons/Logofooter';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import PhoneIcon from './icons/PhoneIcon';
import MailIcon from './icons/MailIcon';
import DownloadIcon from './icons/DownloadIcon';
import AddressIcon from './icons/LocationIcon'; // ✅ New import

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-t-[50px]">
      <div className="max-w-screen-xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Social */}
          <div className="lg:col-span-1">
            <Logofooter className="h-14 w-auto text-vilera-blue"/>
            <p className="mt-4 text-gray-600 text-sm">
              “Smarter Cleaning, Better Living." | Pakistan's Leading Cleaning Essentials Manufacturer
            </p>
            <h3 className="font-poppins font-bold text-xl text-gray-800 mt-8">Stay Connected & Explore</h3>
            <div className="mt-4 space-y-3">
              <a href="https://www.facebook.com/vilerapakistan" target="_blank" className="flex items-center text-gray-700 hover:text-vilera-blue group">
                <FacebookIcon className="w-6 h-6 text-vilera-blue" />
                <span className="ml-3 font-poppins group-hover:underline">Vilerapakistan</span>
              </a>
              <a href="https://www.instagram.com/vilerapakistan" target="_blank" className="flex items-center text-gray-700 hover:text-vilera-blue group">
                <InstagramIcon className="w-6 h-6 text-vilera-blue" />
                <span className="ml-3 font-poppins group-hover:underline">Vilerapakistan</span>
              </a>
              <a href="https://www.youtube.com/@vilerapakistan" target="_blank" className="flex items-center text-gray-700 hover:text-vilera-blue group">
                <YoutubeIcon className="w-6 h-6 text-vilera-blue" />
                <span className="ml-3 font-poppins group-hover:underline">Vilerapakistan</span>
              </a>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden lg:flex justify-center">
            <div className="w-px bg-vilera-blue h-full"></div>
          </div>
          
          {/* Column 2: Get in Touch */}
          <div className="lg:col-span-1">
             <h3 className="font-poppins font-bold text-2xl text-gray-800">Get in Touch</h3>
             <p className="mt-4 text-gray-600">
               Ready to optimize your inventory? Contact our dedicated wholesale team for personalized service, custom quotations, and to build a reliable partnership.
             </p>
             <div className="mt-6 space-y-3">
                <a href="tel:0324-1143720" className="flex items-center text-gray-700 hover:text-vilera-blue group">
                    <PhoneIcon className="w-5 h-5 text-vilera-blue" />
                    <span className="ml-3 font-poppins group-hover:underline">0324-1143720</span>
                </a>

                {/* ✅ Address with icon */}
                <a href="#" className="flex items-center text-gray-700 hover:text-vilera-blue group">
                    <AddressIcon className="w-5 h-5 text-vilera-blue" />
                    <span className="ml-3 font-poppins group-hover:underline">Lahore, Pakistan</span>
                </a>

                <a href="mailto:vilerapakistan@gmail.com" className="flex items-center text-gray-700 hover:text-vilera-blue group">
                    <MailIcon className="w-5 h-5 text-vilera-blue" />
                    <span className="ml-3 font-poppins group-hover:underline">vilerapakistan@gmail.com</span>
                </a>
             </div>
          </div>

          {/* Column 3: Download */}
          <div className="lg:col-span-1">
            <h3 className="font-poppins font-bold text-2xl text-gray-800">Download Our Catalogue</h3>
            <p className="mt-4 text-gray-600">
              Access our full 2025 product line with exclusive wholesale MOQs and per-piece pricing. Download now to streamline your procurement and secure the best rates in Pakistan.
            </p>
            <button 
              onClick={() => window.open('./components/pdf/VileraCatalog.pdf', '_blank')}
              className="mt-6 inline-flex items-center justify-center px-8 py-4 bg-[#2A2A2A] text-white font-poppins font-bold text-lg rounded-xl shadow-md hover:bg-black transition-all duration-300 transform hover:scale-105"
            >
              Download Catalog
              <DownloadIcon className="w-6 h-6 ml-3" />
            </button>
          </div>

        </div>
      </div>
      <div className="bg-vilera-blue py-5">
        <p className="text-center text-white font-roboto">
          © 2025 Vilera Pakistan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
