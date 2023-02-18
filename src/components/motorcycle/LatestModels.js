import axios from 'axios';
import React, { useState, useEffect } from 'react';
import arrow from '../../assets/svg/arrow-left.svg';

const LatestModels = () => {
  const [motorcycles, setMotorcycles] = useState(null);

  useEffect(() => {
    console.log('Motorcycles: ', motorcycles);
    axios.get('http://localhost:3001/motorcycles').then((response) => {
      console.log('motorcycleees: ', response.data);
      setMotorcycles(response.data);
    }).catch((error) => {
      console.log('Motorcycle error: ', error);
    });
  }, [motorcycles]);

  return (
  /* List of Latest Models */
    <div className="flex flex-col w-full bg-bg_secondary p-4 lg:p-6 overflow-x-hidden">
        <div className="flex flex-col w-full p-2 lg:p-4 justify-center items-center">
            {/* Title */}
            <h1 className="text-gray-800 text-4xl font-extrabold">LATEST MODELS</h1>
            <p className="text-gray-400 text-base font-semibold">Please select a Vespa Model</p>
        </div>
        {/* Slider Arrow-Buttons */}
        <div className="flex p-2 h-full shadow-md bg-white rounded-md sm:rounded-lg">
            <button
                type="button"
                className="absolute left-[20rem] hidden lg:flex self-center w-20 h-12 justify-end items-center p-4 text-white bg-very_dark_limerick rounded-br-full rounded-tr-full hover:bg-dark_limerick">
                    <img className="w-7 h-7 rotate-180" src={arrow} alt="left-arrow" />
            </button>
            <button
                type="button"
                className="absolute right-[0] hidden lg:flex self-center w-20 h-12 justify-start items-center p-4 text-white bg-very_dark_limerick rounded-bl-full rounded-tl-full hover:bg-dark_limerick">
                    <img className="w-7 h-7" src={arrow} alt="left-arrow" />
            </button>
        </div>
    </div>
  );
};

export default LatestModels;
