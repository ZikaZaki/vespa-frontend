import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Registration from './auth/Registration';
import Login from './auth/Login';

const Home = (props) => {
  // const { loggedInStatus, setLoggedInStatus } = props;
  const {
    handleLogin,
    handleLogout,
    loggedInStatus,
  } = props;
  const navigate = useNavigate();
  const handleSuccessfulAuth = (data) => {
    // setLoggedInStatus('LOGGED_IN');
    // setUser(data.user);
    handleLogin(data);
    navigate('/dashboard');
  };

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
    // setLoggedInStatus('NOT_LOGGED_IN');
    // setUser({});
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Homesss</h1>
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
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
};

Home.propTypes = {
  loggedInStatus: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Home;
