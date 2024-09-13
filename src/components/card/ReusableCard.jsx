import React from 'react';
import { Link } from 'react-router-dom';

const ReusableCard = ({ title, text1, text2, text3, buttonText, imageSrc, link }) => {
  return (
    <div className="flex flex-col justify-between h-full bg-white rounded-lg shadow-md">
      <img src={imageSrc} alt={title} className="object-cover w-full h-48" />
      <div className="p-4 flex-grow">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-gray-600 text-sm">{text1}</p>
        <p className="text-gray-600 text-sm">{text2}</p>
        <p className="text-gray-600 text-sm">{text3}</p>
      </div>
      <div className="px-6 pt-4 pb-4 text-center">
        <Link to={link}>
          <button className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-[#329946] to-[#99c83b] rounded hover:from-[#2a7f3e] hover:to-[#8abf5b] focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors duration-300">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReusableCard;
