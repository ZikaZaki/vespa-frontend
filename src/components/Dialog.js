import React from 'react';
import PropTypes from 'prop-types';
import deleteBackground from '../assets/svg/delete_bg.svg';

const Dialog = ({
  message, show, confirmDialog,
}) => (
  <div className={`fixed top-0 left-0 w-full h-full p-2 items-center justify-center z-50 ${show ? 'flex' : 'hidden'} before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white backdrop-blur-sm before:-z-10 before:opacity-0 before:invisible`}>
    <div className="relative flex flex-col max-w-lg w-full bg-white rounded-lg shadow-md border border-blue-900">
      <div className="flex py-2 px-4 w-full justify-center items-center text-center rounded-t-lg bg-gray-200">
        <h2 className="text-base font-semibold rounded-lg text-gray-900">Delete Confirm</h2>
      </div>
      <div className="flex flex-col p-2 w-full items-center justify-between h-52">
        <div className="w-full flex items-center justify-center">
          <img src={deleteBackground} alt="" className="flex w-full h-40" />
        </div>
        <div className="flex">
          <p className="text-sm py-2 font-bold md:text-base md:font-semibold text-blue-800 text-center">
            {message}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row p-2 md:py-2 md:px-4 gap-2 md:gap-5">
        <button
          type="button"
          className="relative inline-block p-2 w-full md:w-1/3 border-none cursor-pointer select-none text-lg
            rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-600 hover:text-gray-100"
          onClick={() => confirmDialog('NO')}
        >
          Cancel
        </button>
        <button
          type="button"
          className="relative inline-block p-2 w-full md:w-1/3 border-none cursor-pointer select-none text-lg
            rounded-lg bg-red-200 text-red-600 hover:bg-red-600 hover:text-red-100"
          onClick={() => confirmDialog('YES')}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

Dialog.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  confirmDialog: PropTypes.func.isRequired,
};

export default Dialog;
