import React, { useState } from 'react';
import avatar from '../../assets/images/avatar.jpg';
import SearchForm from './SearchForm';
import SocialLinks from './SocialLinks';
import { ReactComponent as VespaLogo } from '../../assets/svg/logo.svg';

const Sidebar = (props) => {
  const { handleLogout, user } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Menu-Burger */}
      <div
        className={`relative ${
          toggle ? 'hidden' : 'flex'
        } flex-row lg:items-center p-4 lg:p-6 w-full h-20 lg:hidden rounded-md`}
      >
        {/* Menu-Burger Button mobile-only */}
        <button
          type="button"
          className="flex flex-col h-10 w-10 rounded-lg justify-center items-center group "
          onClick={() => setToggle(!toggle)}
        >
          <div
            className={`h-1 w-6 my-1 rounded-full bg-gray-900 transition ease transform duration-300 ${
              toggle
                ? 'rotate-45 translate-y-1.5 opacity-80 group-hover:opacity-100'
                : 'opacity-80 group-hover:opacity-100'
            }`}
          />
          <div
            className={`h-1 w-6 my-1 rounded-full bg-gray-900 transition ease transform duration-300 ${
              toggle
                ? '-rotate-45 -translate-y-1.5 opacity-80 group-hover:opacity-100'
                : 'opacity-80 group-hover:opacity-100'
            }`}
          />
        </button>
      </div>
      <div
        className={`absolute lg:relative ${
          toggle ? 'flex' : 'hidden'
        } lg:flex lg:max-w-[20rem] flex-col w-full h-full z-30 bg-very_dark_limerick bg-opacity-75 backdrop-blur-sm rounded-lg lg:bg-bg_primary lg:border-md lg:shadow-md lg:drop-shadow-md`}
      >
        {/* Menu-Burger & Logo MainContainer */}
        <div className="relative flex flex-row lg:items-center p-4 lg:p-6 w-full h-24 rounded-md">
          {/* Menu-Burger Button mobile-only */}
          <button
            type="button"
            className={`${
              toggle ? 'flex' : 'hidden'
            } flex-col h-12 w-10 lg:bg-dark_limerick rounded-lg justify-center items-center group lg:hidden`}
            onClick={() => setToggle(!toggle)}
          >
            <div
              className={`h-1 w-6 my-1 rounded-full bg-white ease transform duration-300 ${
                toggle
                  ? 'rotate-45 translate-y-1.5 opacity-80 group-hover:opacity-100'
                  : 'opacity-80 group-hover:opacity-100'
              }`}
            />
            <div
              className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                toggle
                  ? '-rotate-45 -translate-y-1.5 opacity-80 group-hover:opacity-100'
                  : 'opacity-80 group-hover:opacity-100'
              }`}
            />
          </button>
          {/* Logo-Container */}
          <div className="flex w-full h-16 justify-center items-center flex-1">
            <a
              href="/"
              className="flex w-full h-16 mx-2 items-center justify-center text-white font-bold text-2xl tracking-widest uppercase"
            >
              <VespaLogo className="h-16 w-32 fill-white lg:fill-gray-800" />
            </a>
          </div>
        </div>
        <hr className="hidden lg:block h-[3px] bg-gray-300" />
        {/* Profile-Container  */}
        <div className="relative flex flex-row flex-wrap items-center lg:flex-row px-4 py-6 lg:p-6 w-full h-auto">
          {/* Profile-Photo  */}
          <div className="w-14 h-14 rounded-full overflow-hidden outline-none ring-2 ring-lime-200">
            <img src={avatar} alt="avatar" className="w-14 h-14 object-cover" />
          </div>
          {/* Profile-Name & Waving-Icon  */}
          <div className="p-2 lg:p-2">
            <p className="text-lg font-semibold text-gray-200 lg:text-gray-900">
              Hello, {user.username && user.username  }👋
            </p>
            <p className="text-sm text-gray-300 lg:text-gray-600">
              { user.email && user.email }
            </p>
          </div>
        </div>
        <hr className="h-[3px] bg-gray-400 lg:bg-gray-700 lg:hidden " />
        {/* Search-Bar  */}
        <SearchForm />
        {/* Menu-Items  */}
        <div className="relative flex flex-col justify-between w-full h-full px-4 py-2 lg:px-6 lg:pr-0">
          {/* Menu-Links  */}
          <div className="flex flex-col w-full h-full justify-between gap-2 text-xl lg:text-lg font-bold text-gray-200 lg:text-gray-900 uppercase">
            <div className="flex flex-col w-full gap-2">
              <a
                href="http://localhost:3000/motorcycle"
                className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
              >
                Models
              </a>
              <a
                href="##"
                className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
              >
                Brands
              </a>
              { user.admin ? (
                <a
                href="http://localhost:3000/locations"
                className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
              >
                Locations
              </a>
              ): null}
              
              <a
                href="##"
                className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
              >
                Lifestyle
              </a>
              <a
                href="##"
                className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
              >
                Shopping
              </a>
              <a
                href="##"
                className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
              >
                My Reservations
              </a>
            </div>
            <a
              href="##"
              onClick={() => handleLogout()}
              className="flex items-center w-full h-8 px-2 lg:h-10 lg:hover:bg-very_dark_limerick lg:hover:text-white"
            >
              Logout
            </a>
          </div>
          {/* Social-Icons & CopyRights  */}
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
