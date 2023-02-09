import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const {
    loggedInStatus,
    handleLogout,
  } = props;

  const handleLogoutClick = () => {
    axios.delete(
      'http://localhost:3001/logout',
      { withCredentials: true },
    ).then((response) => {
      handleLogout();
      console.log('Logout response: ', response);
    }).catch((error) => {
      console.log('Logout error: ', error);
    });
  };
  return (
    <div className="relative p-0.5 m-auto flex w-[98vw] h-[96vh] rounded-lg bg-bg_secondary overflow-hidden border-md shadow-md drop-shadow-md">
      <Sidebar />
      <h1>Dashboard</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
    </div>
  );
};

Dashboard.propTypes = {
  loggedInStatus: PropTypes.string.isRequired,
};

export default Dashboard;
