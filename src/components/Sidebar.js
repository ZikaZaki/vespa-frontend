import React, { useState } from 'react';
import leftArrow from '../assets/svg/arrow-left.svg';

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={`${toggle ? 'sm:w-72' : 'w-20'} duration-300 h-full rounded-lg bg-bg_tertiary relative`}>
      <div className="p-7 text-2xl font-semibold flex-1 h-full">
        <button
          type="button"
          className="hidden absolute justify-center p-1 text-white cursor-pointer bg-very_dark_limerick rounded-r-full -right-10 top-10 w-10 border-2 border-bg_tertiary sm:flex"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={leftArrow}
            alt="triangle-left-arrow"
            className={`text-white w-7 ${!toggle && 'rotate-180'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
