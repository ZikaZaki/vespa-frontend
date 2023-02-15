import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const {
    loggedInStatus,
    handleLogout,
    component: Component,
  } = props;
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    axios.delete(
      'http://localhost:3001/logout',
      { withCredentials: true },
    ).then((response) => {
      handleLogout();
      navigate('/');
      console.log('Logout response: ', response);
    }).catch((error) => {
      console.log('Logout error: ', error);
    });
  };

  return (
    <div
      className="relative flex flex-col w-screen h-screen rounded-lg bg-bg_secondary overflow-hidden border-md shadow-md drop-shadow-md md:p-1"
    >
      {/* <div className="px-4 py-3">
        <button
          type="button"
          className="absolute bg-very_dark_limerick flex flex-col h-12 w-10 justify-around
          items-center text-white cursor-pointer rounded-lg"
        >
          <span className="w-1/2 h-1.5 self-end rounded-lg bg-white"></span>
          <span className="w-full h-1.5 rounded-lg bg-white"></span>
          <span className="w-1/2 h-1.5 self-start rounded-lg bg-white"></span>
        </button>
      </div> */}
      <Sidebar />
      {/* <Component {...props} /> */}
      <h1 className="relative">Dashboard</h1>
      <h1 className="text-3xl font-bold underline text-center">
        Status:
        {loggedInStatus}
      </h1>
      {loggedInStatus === 'LOGGED_IN' ? (
        <button
          type="button"
          onClick={() => handleLogoutClick()}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

Dashboard.propTypes = {
  loggedInStatus: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;
