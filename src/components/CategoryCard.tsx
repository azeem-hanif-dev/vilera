import React from 'react';

interface CategoryCardProps {
  category: string;
  title: string;
  color: string;
  bgColor: string;
  imageUrl: string;
  imgClass?: string;
  topmargine?: string; // optional Tailwind class like "mt-6" or "pt-4"
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  title,
  color,
  bgColor,
  imageUrl,
  imgClass,
  topmargine,
}) => {
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-lg h-80 relative overflow-hidden p-8 text-left flex flex-col justify-center`}
    >
      {/* Text container with dynamic top margin/padding */}
      <div className={`relative z-10 ${topmargine || ''}`}>
        <p className={`${color} font-roboto font-bold text-lg`}>{category}</p>
        <h3
          className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 leading-tight mt-1"
          dangerouslySetInnerHTML={{
            __html: title.replace(' ', '<br/>'),
          }}
        />
      </div>

      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className={`absolute z-0 ${imgClass} object-contain`}
      />
    </div>
  );
};

export default CategoryCard;
