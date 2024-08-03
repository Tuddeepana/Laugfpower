import React from 'react';
import { Link } from 'react-router-dom';

const ReusableCard = ({ title, text1, text2, text3, buttonText, imageSrc, link }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{text1}</p>
        <p className="text-gray-600">{text2}</p>
        <p className="text-gray-600">{text3}</p>
        <div className="px-6 pt-4 pb-2 text-center">
          <Link to={link}>
            <button className="px-4 py-2 font-bold text-white bg-gradient-to-r from-[#329946] to-[#99c83b] rounded hover:from-[#2a7f3e] hover:to-[#8abf5b] focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
