import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import colorwheel from '../../assets/svg/color-wheel.svg';

  const MotorcycleDetails = () => {
    const { state } = useLocation();
    const { motor } = state || {};
    const [total, setTotal] = useState(null);

    useEffect(()=>{
      if(motor){
        const sum = parseFloat(motor.finance_fee) * 48;
        setTotal(sum);
      }else{
        setTotal(0)
      }
    },[motor])

  return (
  /* MotorcycleDetails */
    <div className="flex w-full justify-center items-center bg-bg_secondary p-6 lg:p-8 overflow-x-hidden">
      { motor ?
          <div className="bg-white rounded-lg flex flex-wrap h-full w-full justify-center items-center">
            <div className="bg-white rounded-lg flex flex-col h-auto lg:h-full lg:w-4/6 justify-center items-center">
              <img src={motor.image_url} className="" alt={motor.name} />
            </div>
            <div className="bg-white rounded-lg flex flex-col p-3 w-full lg:w-2/6 lg:h-full justify-center items-center">
              <div className="flex flex-col mb-4 w-full items-center justify-center">
                <h1 className="text-gray-800 text-4xl font-bold">{motor.name}</h1>
                <p className="text-gray-800 text-base font-semibold">
                  - &pound;350 deposit upon any VESPA Purchase&uarr;
                </p>
              </div>
              <div className="flex w-full mb-1 p-3 justify-between items-center bg-gray-300 text-gray-800 text-base font-bold rounded-lg">
                <h2>Finance fee</h2>
                <p>&pound;{motor.finance_fee}</p>
              </div>
              <div className="flex w-full mb-1 p-3 justify-between items-center bg-white text-gray-800 text-base font-bold rounded-lg">
                <h2>Option to purchase fee</h2>
                <p>&pound;{motor.purchase_fee}</p>
              </div>
              <div className="flex w-full mb-1 p-3 justify-between items-center bg-gray-300 text-gray-800 text-base font-bold rounded-lg">
                <h2>Total amount payable</h2>
                <p>&pound;{total}</p>
              </div>
              <div className="flex w-full mb-1 p-3 justify-between items-center bg-white text-gray-800 text-base font-bold rounded-lg">
                <h2>Duration</h2>
                <p>48 Months</p>
              </div>
              <div className="flex flex-col w-full mb-1 px-3 justify-between items-center bg-white text-gray-800 text-xl font-bold rounded-lg">
                <h2 className="hidden lg:flex w-full self-start text-base font-semibold"><strong className="pr-2">5.9% APR </strong>Representative</h2>
                <div className="hidden lg:flex flex-col w-full mt-2 justify-end items-end text-xs uppercase font-extrabold">
                  <p className="">
                    Discover More Models<span className="px-1 text-dark_yellow">&gt;</span>
                  </p>
                  <img src={colorwheel} className="w-40 h-40" alt="color-wheel" />
                </div>
                <button
                  type="button"
                  className="flex w-48 justify-start gap-3 items-center bg-very_dark_limerick text-white text-xl font-bold rounded-full px-3 py-2 hover:bg-dark_limerick"
                  onClick={() => { console.log('reserve'); }}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                  Reserve
                </button>
              </div>
            </div>
          </div>
        :
        // Loading SPinner
          <div role="status" className="flex flex-col justify-center items-center">
            <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-dark_limerick" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="">Still Loading...</span>
          </div>
      }
    </div>
  );
};

// MotorcycleDetails.propTypes = {
//     motorcycle: PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         finance_fee: PropTypes.number,
//         purchase_fee: PropTypes.number,
//         production_date: PropTypes.string,
//         description: PropTypes.string,
//         created_at: PropTypes.string,
//         updated_at: PropTypes.string,
//         image_url: PropTypes.string,
//     }).isRequired,
// };

export default MotorcycleDetails;
