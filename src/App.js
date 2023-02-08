// import React, { useEffect } from 'react';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchRockets, fetchDragons, fetchMissions } from './redux/configureStore';
// import Navbar from './Components/Navbar/Navbar';
// import RocketList from './Components/RocketList/RocketList';
// import DragonList from './Components/DragonList/DragonList';
// import MissionTable from './Components/MissionTable/MissionTable';
// import ProfilePage from './Components/ProfilePage/ProfilePage';
// import styling
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import styles from './App.module.css';

function App() {
  // const dispatch = useDispatch();
  // Get rockets, dragons, and missions from the API
  // useEffect(() => {
  //   dispatch(fetchRockets());
  //   dispatch(fetchDragons());
  //   dispatch(fetchMissions());
  // }, [dispatch]);
  const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN');
  const [user, setUser] = useState({});

  return (
    <div className={styles['app-container']}>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<RocketList />} /> */}
          {/* <Route exact path="/dragons" element={<DragonList />} /> */}
          <Route 
            exact 
            path="/"
            element={<Home loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} />}
          />

          <Route 
            exact 
            path="/dashboard" 
            element={<Dashboard loggedInStatus={loggedInStatus} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
