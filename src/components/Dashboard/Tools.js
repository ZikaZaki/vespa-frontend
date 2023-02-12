import React, { useState } from 'react';
import SearchForm from './SearchForm';
import avatar from '../../assets/images/avatar.jpg';

const Tools = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    /* Tools */
    <div className="flex lg:space-x-10">
        <div className="hidden lg:w-1/2 lg:block">
            <SearchForm />
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-between">
                {/* Logo */}
                <div className="lg:hidden">
                    <a
                      href="#"
                      className="flex justify-center items-center w-10 h-10 rounded-xl bg-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-blue-800">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                      </svg>
                    </a>
                </div>

                <div className="h-10 hidden lg:flex items-center space-x-6 font-semibold">
                    <a href="#" className="hover:text-blue-800">Feedback</a>
                    <a href="#" className="hover:text-blue-800">Contacts</a>
                    <a href="#" className="hover:text-blue-800">Help</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="" className="flex items-center justify-center w-10 h-10 text-gray-300 hover:text-gray-700 relative">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                        </svg>
                        <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 border border-white"></div>
                    </a>

                    <div className="lg:relative">
                        {/* Open Button */}
                        <button
                          className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 focus:ring-offset-white"
                          onClick={() => setIsOpen(!isOpen)}>
                            <img src={avatar} alt="avatar" 
                            className="w-10 h-10 object-cover" />
                        </button>

                        {/* Close Button */}
                        { isOpen && <button
                          className="fixed inset-0 w-full h-full bg-transparent z-30 cursor-default"
                          onClick={() => setIsOpen(false)}
                          tabIndex="-1">
                        </button>}

                        {/* Consider adding transition for the dropdown */}

                       { isOpen && <div className="absolute right-0 z-40 mt-2 w-full lg:w-48">
                            <div className="bg-white mx-4 lg:mx-0 rounded-md shadow-lg p-1 ring-1 ring-black ring-opacity-5">
                                <div className="lg:hidden p-3">
                                    <SearchForm />
                                </div>
                                <div className="lg:hidden border-b">
                                    <a
                                      href="#"
                                      className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                      Feedback
                                    </a>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                      Contact
                                    </a>
                                    <a
                                      href="#"
                                      className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                      Help
                                    </a>
                                </div>
                                <a
                                  href="#"
                                  className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Profile
                                </a>
                                <a
                                  href="#"
                                  className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Settings
                                </a>
                                <a
                                  href="#"
                                  className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Log out
                                </a>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Tools;
