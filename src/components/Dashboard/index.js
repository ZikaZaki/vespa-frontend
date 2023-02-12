import React, { useState } from 'react';
import MainNav from './MainNav';
import Tools from './Tools';

const AdminPanel = () => {
    const [toggle, setToggle] = useState(false);
    return (
        // Dashboard Main Container
        <div className="flex h-full">
            <div className="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
                {/* Sidebar */}
                <div className="w-full lg:w-24 h-full bg-blue-800 relative">
                    {/* Logo */}
                    <a href="#" className="hidden absolute top-10 left-1/2 transform -translate-x-1/2 lg:flex lg:justify-center lg:items-center w-14 h-14 rounded-xl hover:bg-white hover:bg-opacity-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                      </svg>
                    </a>
                    {/* Main Nav */}
                    <MainNav />
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="w-full p-4 lg:p-10">
                {/* Tools which contain <SearchForm /> */}
                <Tools />

                <div className="bg-gray-300 rounded-xl mt-4 lg:hidden p-2">
                    <button className="block w-32 h-10 bg-blue-600 mx-auto" onClick={() => setToggle(!toggle)}>
                        Toggle Sidebar
                    </button>
                </div>

                <div className="overflow-hidden">
                    <div className={`transform lg:transform-none transition-all duration-300 ${toggle ? '-translate-x-full' : ''}`}>
                        <div className="flex mt-4 lg:mt-10 lg:space-x-10">
                            {/* main */}
                            <div className="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl">
                                <div className="flex space-x-4 lg:space-x-10">
                                    <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                                    <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                                    <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                                </div>

                                <div className="bg-gray-300 rounded-xl h-28 mt-4 lg:mt-10 w-full"></div>

                                <div className="flex space-x-4 lg:space-x-10 mt-4 lg:mt-10">
                                    <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                                    <div className="bg-gray-300 rounded-xl h-28 w-full"></div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="w-full flex-shrink-0 lg:w-1/4 lg:flex-shrink bg-gray-300 rounded-xl h-52">sidebar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// REMEMBER TO RENAME THIS COMPONENT TO (Dashboard)
export default AdminPanel;
