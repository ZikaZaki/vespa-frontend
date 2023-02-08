import React from 'react';
import Registration from './auth/Registration';

const Home = ({ ...props }) => {
  return (
    <div>
    <h1 className="text-3xl font-bold underline text-center">Homesss</h1>
    <h1 className="text-3xl font-bold underline text-center">
      Status: {props.loggedInStatus}
    </h1>
    <Registration />
  </div>
  );
};

export default Home;
