import React from 'react';
import PropTypes from 'prop-types';
import vespablack from '../../assets/images/vespa_black.png';
import colorwheel from '../../assets/svg/color-wheel.svg';

const MotorcycleDetails = () => {
  // const MotorcycleDetails = (props) => {
  // const { motorcycle } = props;
  return (
  /* MotorcycleDetails */
    <div className="flex w-full justify-center items-center bg-bg_secondary p-6 lg:p-8 overflow-x-hidden">
      <div className="bg-white rounded-lg flex flex-wrap h-full w-full justify-center items-center">
        <div className="bg-white rounded-lg flex flex-col h-auto lg:h-full lg:w-4/6 justify-center items-center">
          <img src={vespablack} className="" alt="" />
        </div>
        <div className="bg-white rounded-lg flex flex-col p-3 w-full lg:w-2/6 lg:h-full justify-center items-center">
          <div className="flex flex-col mb-4 w-full items-center justify-center">
            <h1 className="text-gray-800 text-4xl font-bold">VESPA 946</h1>
            <p className="text-gray-800 text-base font-semibold">
              - &pound;350 deposit upon any VESPA Purchase&uarr;
            </p>
          </div>
          <div className="flex w-full mb-1 p-3 justify-between items-center bg-gray-300 text-gray-800 text-base font-bold rounded-lg">
            <h2>Finance fee</h2>
            <p>&pound;129</p>
          </div>
          <div className="flex w-full mb-1 p-3 justify-between items-center bg-white text-gray-800 text-base font-bold rounded-lg">
            <h2>Option to purchase fee</h2>
            <p>&pound;249</p>
          </div>
          <div className="flex w-full mb-1 p-3 justify-between items-center bg-gray-300 text-gray-800 text-base font-bold rounded-lg">
            <h2>Total amount payable</h2>
            <p>&pound;9,879</p>
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
              onclick={() => { console.log('reserve'); }}
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
