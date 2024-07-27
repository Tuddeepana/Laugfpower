import 'tailwindcss/tailwind.css';

const PdfCard = ({ title, buttonText, imageUrl }) => {
  return (
    <div className="flex flex-col justify-between w-64 h-64 p-4 bg-gray-100 border rounded shadow-md hover:border-blue-500">
      <h1 className="text-base font-semibold text-center">{title}</h1>
      <div className="flex items-center justify-center flex-grow">
        <img src={imageUrl} alt={title} className="max-h-24" />
      </div>
      <button className="px-4 py-2 mt-auto font-bold text-white bg-gradient-to-r from-[#329946] via-[#5ba45c] to-[#99c83b] rounded hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default PdfCard;
