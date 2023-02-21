import React from 'react';
import _404 from '../assets/svg/404.svg';

const PageNotFound = () => (
  <div className="flex flex-col justify-center items-center w-full h-full bg-bg_secondary px-4 py-2 lg:px-6 overflow-x-hidden">
    <div className="py-4 px-6">
      <img src={_404} className="w-full max-w-lg" alt="404" />
    </div>
    <div className="flex flex-col py-4 px-6 justify-center items-center gap-5">
      <div>
        <h1 className="my-1 text-3xl text-gray-700 text-center">
          Ohhh!!!
          <br />
          Page not found
        </h1>
        <p className="my-1 text-gray-600 text-center">
          The page you are looking for might have been removed had
          its name changed or is temporarily unavailable.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="bg-gray-700 text-white text-lg font-bold py-2 px-4 rounded-full mt-4"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
        <button
          type="button"
          className="bg-gray-700 text-white text-lg font-bold py-2 px-4 rounded-full mt-4 ml-4"
          onClick={() => { window.location.href = '/'; }}
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
);

export default PageNotFound;
