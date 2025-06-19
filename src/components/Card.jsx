import React from 'react';

const Card = ({key , title , description , imageLink , sourceCodeLink}) => {
  return (
   <div className="xl:w-[510px] rounded-xl px-6 overflow-hidden xl:h-[300px] 
transition-transform duration-300 transform hover:scale-105 hover:-rotate-1  border shadow-md shadow-white hover:border-orange-600 hover:border-3
 hover:shadow-xl ease-in-out">

      <img
        className="w-20 ml-6 h-20 mt-4 rounded-full border-2 object-cover"
        src={imageLink}
        alt="Card image"
      />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2 text-orange-300 
        roboto-flex-200">{title}</div>
        <p className="text-white text-sm  sm:text-base">
          {description}
        </p>
      </div>
      <div className="px-4 pb-4">
        <button className="bg-orange-300 text-black
         py-1 px-4 rounded-xl hover:bg-orange-500 focus:outline-none focus:ring-2 focus:bg-orange-500 text-sm sm:text-base">
         See Project
        </button>
      </div>
    </div>
  );
};

export default Card;
