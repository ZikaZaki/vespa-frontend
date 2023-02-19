import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Registration from './auth/Registration';
import Login from './auth/Login';
import SearchIcon from '../assets/svg/search-icon.svg';

const Home = (props) => {
  const { handleLogin } = props;
  const navigate = useNavigate();
  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    navigate('/models');
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const showModal = (form) => {
    if (form.toUpperCase() === 'LOGIN') {
      setShowRegister(false);
      setShowLogin(true);
    } else if (form.toUpperCase() === 'REGISTER') {
      setShowLogin(false);
      setShowRegister(true);
    } else {
      setShowLogin(false);
      setShowRegister(false);
    }
  };

  return (
    <div
      className="flex flex-col h-screen w-screen p-4 bg-very_dark_yellow bg-[url('/src/assets/images/vespa.png')] bg-contain bg-no-repeat bg-center md:p-8"
    >
      <div className="flex flex-row-reverse justify-between align-middle items-center">
        <img src={SearchIcon} alt="" className="cursor-pointer p-2 bg-white rounded-full w-12 h-10" />
        <div id="hamburger" className="flex flex-col cursor-pointer w-8 h-5 gap-2">
          <span className="bg-white w-full h-4 rounded-full" />
          <span className="bg-white w-full h-4 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col h-full w-full items-center justify-center">
        <div className="flex items-center justify-center py-8 px-2 text-white text-4xl font-bold text-center md:text-6xl md:py-4">
          <h1>THE NEW VESPA TRIDENT</h1>
        </div>
        <div id="login_signup_buttons" className="flex flex-col w-full p-2 gap-8 md:flex-row md:w-[30rem] md:p-4">
          <button
            type="button"
            className="w-full h-[3rem] bg-very_dark_limerick text-2xl text-white font-semibold rounded-full text-center opacity-90 hover:opacity-100 hover:shadow-lg focus:bg-very_dark_limerick focus:shadow-lg focus:outline-none focus:ring-0 active:bg-very_dark_limerick active:shadow-lg transition duration-150 ease-in-out md:min-w-[12rem]"
            onClick={() => showModal('LOGIN')}
          >
            Log In
          </button>
          <button
            type="button"
            className="w-full h-[3rem] bg-very_dark_limerick text-2xl text-white font-semibold rounded-full text-center opacity-90 hover:opacity-100 hover:shadow-lg focus:bg-very_dark_limerick focus:shadow-lg focus:outline-none focus:ring-0 active:bg-very_dark_limerick active:shadow-lg transition duration-150 ease-in-out md:min-w-[12rem]"
            onClick={() => showModal('REGISTER')}
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* Modal toggle */}
      {showLogin || showRegister ? (
        <>
          {/* Main modal */}
          <div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full backdrop-blur-sm"
          >
            <div className="relative w-full h-modal max-w-md md:h-auto">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => showModal('CLOSE')}>
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Close modal</span>
                </button>
                {
                  showLogin ? (
                    <Login
                      handleSuccessfulAuth={handleSuccessfulAuth}
                      showModal={showModal}
                    />
                  ) : null
                }
                {
                  showRegister ? (
                    <Registration
                      handleSuccessfulAuth={handleSuccessfulAuth}
                      showModal={showModal}
                    />
                  ) : null
                }
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

Home.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Home;
