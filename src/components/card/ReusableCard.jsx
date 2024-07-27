import 'tailwindcss/tailwind.css';

function ReusableCard({ title, text1, text2, text3, buttonText, imageSrc }) {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
      <img className="w-full" src={imageSrc} alt="Card image" />
      <div className="px-6 py-4 text-center">
        <div className="mb-2 text-base font-bold">{title}</div>
        <p className="text-base text-gray-700">{text1}</p>
        <p className="text-base text-gray-700">{text2}</p>
        <p className="text-base text-gray-700">{text3}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <button className="px-4 py-2 font-bold text-white bg-gradient-to-r from-[#329946] to-[#99c83b] rounded hover:from-[#2a7f3e] hover:to-[#8abf5b] focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ReusableCard;
