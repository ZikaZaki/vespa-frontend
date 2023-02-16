import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Dashboard from './components/dashboard/index';
import City from './components/city/index';
import Sidebar from './components/dashboard/Sidebar';
import Motorcycle from './components/motorcycle/Motorcycle';
import YUV from './components/YUV';

function App() {
  const [state, setState] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });
  const handleLogin = (data) => {
    setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  };

  const handleLogout = () => {
    setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  };

  const checkLoginStatus = () => {
    axios.get(
      'http://localhost:3001/logged_in',
      { withCredentials: true },
    ).then((response) => {
      // console.log('Logged in? ', response);
      if (response.data.logged_in && state.loggedInStatus === 'NOT_LOGGED_IN') {
        setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      } else if (!response.data.logged_in && state.loggedInStatus === 'LOGGED_IN') {
        setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      } else {
        console.log('Logged in status: ', state.loggedInStatus);
      }
    }).catch((error) => {
      console.log('Check login status error: ', error);
    });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="block lg:flex h-screen w-screen bg-bg_secondary">
      <Sidebar />
      {/* <Navbar /> */}
      <Routes>
        {/* <Route exact path="/dragons" element={<DragonList />} /> */}
        <Route
          exact
          path="/"
          element={(
            <Home
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              loggedInStatus={state.loggedInStatus}
            />
          )}
        />
        {/* Dashboard  */}
        <Route
          exact
          path="/dashboard"
          element={(
            <Dashboard
              handleLogout={handleLogout}
              loggedInStatus={state.loggedInStatus}
              component={City}
            />
          )}
        />
        {/* City */}
        <Route exact path="/city" element={<City />} />
        {/* Motorcycle */}
        <Route exact path="/motorcycle" element={<Motorcycle />} />

        <Route exact path="/yuv" element={<YUV />} />
      </Routes>
    </div>
  );
}

export default App;
