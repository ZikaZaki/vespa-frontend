import React from 'react';

const SearchForm = () => (
  /* SearchForm */
  <div className="relative flex flex-col w-full px-4 pt-6 pb-4 lg:px-6 lg:py-2 h-auto">
    <form action="/" method="POST">
      <div className="relative flex flex-row items-center gap-1">
        <input
          type="text"
          className="w-full bg-transparent  rounded-sm h-10 text-white placeholder-lime-50 lg:placeholder-gray-400 lg:text-very_dark_limerick outline-none border-0 border-b-2 border-slate-300 focus:ring-0 focus:ring-offset-0 focus:border-white lg:focus:border-dark_limerick"
          placeholder="Search here..."
        />
        <button
          type="button"
          className="flex justify-center items-center w-9 h-8 p-1.5 text-very_dark_limerick lg:text-white bg-gray-100 lg:bg-very_dark_limerick rounded-full hover:bg-white hover:text-dark_limerick"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
);

export default SearchForm;
