import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const Dashboard = (props) => {
  const {
    handleLogout,
    user,
    component: Component,
  } = props;

  return (
    <>
      <Sidebar handleLogout={handleLogout} user={user} />
      <Component />
    </>
  );
};

Dashboard.propTypes = {
  component: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    admin: PropTypes.bool,
  }).isRequired,
};

export default Dashboard;
