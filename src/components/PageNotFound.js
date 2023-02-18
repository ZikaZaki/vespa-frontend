import React from 'react';
import _404 from '../assets/svg/404.svg';

const PageNotFound = () => (
  <div className="flex flex-col justify-center items-center w-full bg-bg_secondary px-4 py-2 lg:px-6 overflow-x-hidden">
    <div className="p-6">
      <img src={_404} className="w-full max-w-lg" alt="404" />
    </div>
    <div className="p-6">
      <h1 className="text-3xl text-gray-700 text-center">
        Ohhh!!!
        <br />
        Page not found
      </h1>
    </div>
  </div>
);

export default PageNotFound;
