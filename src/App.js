import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Dashboard from './components/dashboard/index';
import City from './components/city/index';
import Motorcycle from './components/motorcycle/index';
import PageNotFound from './components/PageNotFound';
import LatestModels from './components/motorcycle/LatestModels';
import MotorcycleDetails from './components/motorcycle/MotorcycleDetails';

const App = () => {
  const navigate = useNavigate();
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
    axios.delete(
      'http://localhost:3001/logout',
      { withCredentials: true },
    ).then(() => {
      setState({
        loggedInStatus: 'NOT_LOGGED_IN',
        user: {},
      });
      navigate('/');
    });
  };

  const checkLoginStatus = () => {
    axios.get(
      'http://localhost:3001/logged_in',
      { withCredentials: true },
    ).then((response) => {
      if (response.data.logged_in) {
        setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      } else if (!response.data.logged_in) {
        setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      } else {
        setState({
          loggedInStatus: 'NOT_LOGGED_IN',
          user: {},
        });
      }
    });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="block lg:flex h-screen w-screen bg-bg_secondary">
      <Routes>
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
        {state.loggedInStatus === 'LOGGED_IN' ? (
           <>
            <Route
                exact
                path="/models"
                element={(
                  <Dashboard
                    handleLogout={handleLogout}
                    loggedInStatus={state.loggedInStatus}
                    user={state.user}
                    component={LatestModels}
                  />
                )}
              />
              <Route
                exact
                path="/bikes"
                element={(
                  <Dashboard
                    handleLogout={handleLogout}
                    loggedInStatus={state.loggedInStatus}
                    user={state.user}
                    component={Motorcycle}
                  />
                )}
              />
              <Route
                exact
                path="/motorcycles/:id"
                element={(
                  <Dashboard
                    handleLogout={handleLogout}
                    loggedInStatus={state.loggedInStatus}
                    user={state.user}
                    component={MotorcycleDetails}
                  />
                )}
              />
              <Route
                exact
                path="/locations"
                element={(
                  <Dashboard
                    handleLogout={handleLogout}
                    loggedInStatus={state.loggedInStatus}
                    user={state.user}
                    component={City}
                  />
                )}
              />
           </>
        ): (<Route exact path="*" element={<PageNotFound />} />)}
      </Routes>
    </div>
  );
};

export default App;
