import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const {
    loggedInStatus,
    handleLogout,
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
      className="relative p-0 flex w-screen h-screen rounded-lg bg-bg_secondary overflow-hidden border-md shadow-md drop-shadow-md md:p-1"
    >
      <Sidebar />
      <h1>Dashboard</h1>
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
