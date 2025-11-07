import React from 'react';
import CategoryCard from './CategoryCard';

const categoriesData = [
  {
    category: 'Category 1',
    title: 'Sponges & Scourers',
    color: 'text-[#248264]',
    bgColor: 'bg-[#F7FFE7]',
    imageUrl: '/images/Categoryoneimage.png',
    gridClass: 'lg:col-span-2',
    imgClass: 'right-0 top-0 w-2/4',
    topmargine: '', // 🟩 Added top margin
  },
  {
    category: 'Category 2',
    title: 'Wipers',
    color: 'text-[#6D6D6D]',
    bgColor: 'bg-[#F3F3F3]',
    imageUrl: '/images/Categorytwoimage.png',
    gridClass: 'lg:col-span-1',
    imgClass: 'right-[-20px] top-[-20px] w-full',
    topmargine: 'mt-40', 
  },
  {
    category: 'Category 3',
    title: 'Microfiber Cloths',
    color: 'text-[#CA9900]',
    bgColor: 'bg-[#FFF4D1]',
    imageUrl: '/images/Categorythreeimage.png',
    gridClass: 'lg:col-span-1',
    imgClass: 'right-0 top-0 w-full',
    topmargine: 'mt-40', // 🟩 Added margin-top
  },
  {
    category: 'Category 4',
    title: 'Floorcare Mops',
    color: 'text-[#252EBC]',
    bgColor: 'bg-[#CCCFFF]',
    imageUrl: '/images/Categoryfourimage.png',
    gridClass: 'lg:col-span-2',
    imgClass: 'right-0 top-0 w-2/3',
    topmargine: '', // 🟩 Added padding-top
  },
  {
    category: 'Category 5',
    title: 'Household Chemicals',
    color: 'text-[#1E1739]',
    bgColor: 'bg-[#BFDCFF]',
    imageUrl: '/images/Categoryfiveimage.png',
    gridClass: 'lg:col-span-2',
    imgClass: 'right-0 top-0 w-2/3',
    topmargine: '', // 🟩 Added top margin
  },
];

const Categories: React.FC = () => {
  return (
    <div id="products" className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white leading-tight max-w-3xl mx-auto">
        Your Wholesale Source for Every Cleaning Essential
      </h2>
      <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
        Our extensive catalog covers household, commercial, and industrial requirements. 
        Select your area of interest to see how we can fulfill your bulk needs.
      </p>

      {/* Category Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoriesData.map((category, index) => (
          <div key={index} className={`${category.gridClass} group cursor-pointer relative overflow-hidden rounded-3xl`}>
            <div className="transition-transform duration-500 ease-in-out group-hover:scale-110">
              <CategoryCard {...category} />
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out flex flex-col items-start justify-center p-6 lg:p-8 text-left transform group-hover:scale-100 scale-95" style={{background: 'linear-gradient(90deg, #67C5B0 0%, #17B4A3 100%)', boxShadow: '0px 0px 15.2px 3px rgba(0, 0, 0, 0.25)'}}>
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 lg:mb-3 drop-shadow-lg">Download Our Catalogue</h3>
                <p className="text-white text-xs lg:text-sm xl:text-base leading-snug lg:leading-relaxed mb-4 lg:mb-6 opacity-95 line-clamp-3 lg:line-clamp-none">
                  Access our full 2025 product line with exclusive wholesale MOQs and per-piece pricing. Download now to streamline your procurement and secure the best rates in Pakistan.
                </p>
                <button
            onClick={() => window.open('/pdf/VileraCatalog.pdf', '_blank')}
                 className="bg-gray-900 hover:bg-black text-white font-semibold py-2.5 px-6 lg:py-3 lg:px-8 rounded-xl flex items-center gap-2 lg:gap-3 transition-all duration-300 hover:shadow-2xl hover:scale-105 group/btn text-sm lg:text-base">
                {/* <a 
                  href="/pdf/VileraCatalog.pdf" 
                  download="Catalog.pdf"
                  className="bg-gray-900 hover:bg-black text-white font-semibold py-2.5 px-6 lg:py-3 lg:px-8 rounded-xl flex items-center gap-2 lg:gap-3 transition-all duration-300 hover:shadow-2xl hover:scale-105 group/btn text-sm lg:text-base w-fit"
                > */}
                  <span>Download Catalog</span>
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover/btn:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {/* </a> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
