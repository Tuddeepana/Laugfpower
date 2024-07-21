import 'tailwindcss/tailwind.css';

const PdfCard = ({ title, buttonText, imageUrl }) => {
  return (
    <div className="flex flex-col justify-between w-64 h-64 p-4 bg-gray-100 border rounded shadow-md hover:border-blue-500">
      <h1 className="text-xl font-semibold text-center">{title}</h1>
      <div className="flex items-center justify-center flex-grow">
        <img src={imageUrl} alt={title} className="max-h-24" />
      </div>
      <button className="px-4 py-2 mt-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        {buttonText}
      </button>
    </div>
  );
};

export default PdfCard;
