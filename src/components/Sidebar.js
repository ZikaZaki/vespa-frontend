import React, { useState } from 'react';
import leftArrow from '../assets/svg/arrow-left.svg';
import avatar from '../assets/images/avatar.jpg';
import SearchForm from './Dashboard/SearchForm';
import SocialLinks from './SocialLinks';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // <div className={`${toggle ? 'lg:w-72' : 'lg:w-72'} duration-300 h-full rounded-lg bg-bg_tertiary lg:relative absolute w-full`}>
   <>
    {/* Menu-Burger */}
    <div className={`relative ${toggle ? 'hidden' : 'flex'} flex-row lg:items-center p-4 lg:p-6 w-full h-20 lg:hidden rounded-md`}>
      {/* Menu-Burger Button mobile-only */}
      <button
        type="button"
        className="flex flex-col h-10 w-10 rounded-lg justify-center items-center group "
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`h-1 w-6 my-1 rounded-full bg-gray-900 transition ease transform duration-300 ${
            toggle
              ? "rotate-45 translate-y-1.5 opacity-80 group-hover:opacity-100"
              : "opacity-80 group-hover:opacity-100"
          }`}
        />
        <div
          className={`h-1 w-6 my-1 rounded-full bg-gray-900 transition ease transform duration-300 ${
            toggle
              ? "-rotate-45 -translate-y-1.5 opacity-80 group-hover:opacity-100"
              : "opacity-80 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
    <div className={`absolute ${toggle ? 'flex' : 'hidden'} lg:flex lg:w-72 flex-col w-screen h-full bg-very_dark_limerick bg-opacity-75 backdrop-blur-sm rounded-lg lg:bg-bg_tertiary`}>
        {/* <button
          type="button"
          className="hidden absolute justify-center p-1 text-white cursor-pointer bg-very_dark_limerick rounded-r-full -right-10 top-10 w-10 border-2 border-bg_tertiary sm:flex"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={leftArrow}
            alt="triangle-left-arrow"
            className={`text-white w-7 ${!toggle && 'rotate-180'}`}
          />
        </button> */}
      {/* Menu-Burger & Logo MainContainer */}
      <div className={`relative flex flex-row lg:items-center p-4 lg:p-6 w-full h-20 rounded-md`}>
        {/* Menu-Burger Button mobile-only */}
        <button
          type="button"
          className={`${toggle ? 'flex' : 'hidden'} flex-col h-10 w-10 lg:bg-dark_limerick rounded-lg justify-center items-center group lg:hidden`}
          onClick={() => setToggle(!toggle)}
        >
          <div
            className={`h-1 w-6 my-1 rounded-full bg-white ease transform duration-300 ${
              toggle
                ? "rotate-45 translate-y-1.5 opacity-80 group-hover:opacity-100"
                : "opacity-80 group-hover:opacity-100"
            }`}
          />
          <div
            className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
              toggle
                ? "-rotate-45 -translate-y-1.5 opacity-80 group-hover:opacity-100"
                : "opacity-80 group-hover:opacity-100"
            }`}
          />
        </button>
        {/* Logo-Container */}
        <div className="flex w-full h-10 justify-center items-center flex-1">
          <a
            href="/"
            className="flex w-14 h-10 mx-2 items-center justify-center text-white font-bold text-2xl tracking-widest uppercase"
          >
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="logo"
              className="h-10 w-12" />
          </a>
        </div>
      </div>
      <hr className="hidden lg:block h-[3px] bg-gray-300" />
      {/* Profile-Container  */}
      <div className="relative flex flex-row flex-wrap items-center lg:flex-row p-4 lg:p-6 w-full h-auto">
        {/* Profile-Photo  */}
        <div className="w-14 h-14 rounded-full overflow-hidden outline-none ring-2 ring-lime-200">
          <img
            src={avatar}
            alt="avatar"
            className="w-14 h-14 object-cover" />
        </div>
        {/* Profile-Name & Waving-Icon  */}
        <div className="p-2 lg:p-4">
          <p className="text-lg font-semibold text-gray-200 lg:text-gray-900">Hello, ZikaZaki👋</p>
          <p className="text-sm text-gray-300 lg:text-gray-600">zikazaki@gmail.com</p>  
        </div>
      </div>
      <hr className="lg:hidden h-[3px] bg-gray-700" />
      {/* Search-Bar  */}
        <SearchForm />
      {/* Menu-Items  */}
      <div className="relative flex flex-col justify-between w-full h-full px-4 pt-0 pb-2 lg:px-6 lg:pr-0 lg:py-2">
        {/* Menu-Links  */}
        <div className="flex flex-col w-full h-full justify-between gap-2 text-1xl font-bold text-gray-200 lg:text-gray-900 uppercase">
          <div className="flex flex-col w-full gap-2">
            <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">
              Models
            </a>
            <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">
              Brands
            </a>
            <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">
              Locations
            </a>
            <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">
              Lifestyle
            </a>
            <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">
              Shopping
            </a>
            <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">
              My Reservations
            </a>
          </div>
          <a href="#" className="flex items-center w-full h-8 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white">Logout</a>
        </div>
        {/* Social-Icons & CopyRights  */}
        <SocialLinks />
      </div>
    </div>
   </> 
  );
};

export default Sidebar;


// import React, { useState } from 'react';
// import leftArrow from '../assets/svg/arrow-left.svg';

// const Sidebar = () => {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div className={`${toggle ? 'sm:w-72' : 'w-20'} duration-300 h-full rounded-lg bg-bg_tertiary relative`}>
//       <div className="p-7 text-2xl font-semibold flex-1 h-full">
//         <button
//           type="button"
//           className="hidden absolute justify-center p-1 text-white cursor-pointer bg-very_dark_limerick rounded-r-full -right-10 top-10 w-10 border-2 border-bg_tertiary sm:flex"
//           onClick={() => setToggle(!toggle)}
//         >
//           <img
//             src={leftArrow}
//             alt="triangle-left-arrow"
//             className={`text-white w-7 ${!toggle && 'rotate-180'}`}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
