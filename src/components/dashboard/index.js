import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
// import axios from 'axios';

const Dashboard = (props) => {
  const {
    // loggedInStatus,
    handleLogout: handleLogout,
    user: user,
    component: Component,
  } = props;
  // const navigate = useNavigate();
  // const handleLogoutClick = () => {
  //   axios.delete(
  //     'http://localhost:3001/logout',
  //     { withCredentials: true },
  //   ).then((response) => {
  //     handleLogout();
  //     navigate('/');
  //     console.log('Logout response: ', response);
  //   }).catch((error) => {
  //     console.log('Logout error: ', error);
  //   });
  // };

  return (
    // <div className="relative flex flex-col p-4 w-full h-full overflow-hidden ">
    <>
      <Sidebar handleLogout={handleLogout} user={user} />
      <Component />
    </>
    // </div>
  );
};

Dashboard.propTypes = {
  // loggedInStatus: PropTypes.string.isRequired,
  // handleLogout: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

export default Dashboard;
