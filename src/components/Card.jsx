import React from 'react';

const Card = ({ key, title, description, imageLink, sourceCodeLink }) => {
  return (
    <div className="w-full max-w-sm lg:max-w-lg xl:w-[470px] 
      rounded-xl px-4 sm:px-6 overflow-hidden 
      min-h-[320px] sm:min-h-[340px] xl:min-h-[360px] 
      transition-transform duration-300 transform
      hover:scale-105 hover:-rotate-1  
      border shadow-md shadow-gray-800 hover:border-orange-600
      hover:border-3 hover:shadow-xl ease-in-out mx-auto
      flex flex-col justify-between bg-[#121212]">

      {/* Content section */}
      <div className="flex-1">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 ml-4 sm:ml-6 mt-4 rounded-full border-2 object-cover"
          src={imageLink}
          alt="Card image"
        />
        <div className="px-2 py-2">
          <div className="font-bold text-lg sm:text-xl mb-2 text-orange-300 roboto-flex-200">
            {title}
          </div>
          <p className="text-white text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Button section pinned to bottom */}
      <div className="px-2 sm:px-4 pb-4 mt-auto">
      <a href={sourceCodeLink}>
          <button
          className="bg-orange-300 text-black py-1 sm:py-2 px-4 
          rounded-xl hover:bg-orange-400 focus:outline-none 
          focus:ring-2 focus:bg-orange-300 text-sm
           sm:text-base w-fit">
          See Project
        </button>
      </a>
      </div>
    </div>
  );
};

export default Card;
