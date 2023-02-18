import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Dashboard from './components/dashboard/index';
import City from './components/city/index';
// import Sidebar from './components/dashboard/Sidebar';
import Motorcycle from './components/motorcycle/index';
import PageNotFound from './components/PageNotFound';
import LatestModels from './components/motorcycle/LatestModels';

function App() {
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
    setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
    navigate('/');
  };

  const checkLoginStatus = () => {
    axios.get(
      'http://localhost:3001/logged_in',
      { withCredentials: true },
    ).then((response) => {
      // console.log('Logged in? ', response);
      // if (response.data.logged_in && state.loggedInStatus === 'NOT_LOGGED_IN') {
      if (response.data.logged_in) {
        setState({
          loggedInStatus: 'LOGGED_IN',
          user: response.data.user,
        });
      // } else if (!response.data.logged_in && state.loggedInStatus === 'LOGGED_IN') {
      } else if (!response.data.logged_in) {
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
      {/* <Sidebar /> */}
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
        {state.loggedInStatus === 'LOGGED_IN'
          ? (
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
              {state.user.admin
                ? (
                  <>
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
                )
                : (
                  <>
                    <Route
                      exact
                      path="/locations"
                      element={(
                        <Dashboard
                          handleLogout={handleLogout}
                          loggedInStatus={state.loggedInStatus}
                          user={state.user}
                          component={PageNotFound}
                        />
                  )}
                    />
                  </>
                )}
            </>
          )
          : (
            <>
              <Route
                exact
                path="/models"
                element={PageNotFound}
              />
            </>
          )}

        <Route
          exact
          path="/latest"
          element={(
            <Dashboard
              handleLogout={handleLogout}
              loggedInStatus={state.loggedInStatus}
              user={state.user}
              component={LatestModels}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
