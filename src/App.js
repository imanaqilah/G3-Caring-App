import './App.css';
import NaviBar from '../src/components/NaviBar.js';
import SideNav from '../src/components/SideNav.js';
import HelpBar from '../src/components/HelpBar.js';
import Helpline from './pages/Helpline';
import InfoPage from './pages/InfoPage';
import Homepage from './pages/Homepage';
import CalendarPage from './pages/CalendarPage';
import Habit from './pages/Habit';
import Task from './pages/Task';
import Meditation from './pages/Meditation';
import { useState } from 'react';
import { Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('jwt') !== null
  );

  const [data, setData] = useState([]);

  return (
    <div >
      <Route exact path="/">
        <HelpBar />
        <NaviBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <InfoPage />
      </Route>

      <Route exact path="/help">
        <NaviBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Helpline />
      </Route>

      <Route exact path="/profile">
        <div className="app">
          <div className="main">
            {/* Pin SideNav on every page within Homepage for ease of navigation */}
            <SideNav setLoggedIn={setLoggedIn} data={data} />
            <Homepage />
          </div>
        </div>
      </Route>

      <Route exact path="/profile/calendar">
        <div className="app">
          <div className="main">
            {/* Pin SideNav on every page within Homepage for ease of navigation */}
            <SideNav setLoggedIn={setLoggedIn} data={data} />
            <CalendarPage data={data} />
          </div>
        </div>
      </Route>

      <Route exact path="/profile/tasks">
        <div className="app">
          <div className="main">
            {/* Pin SideNav on every page within Homepage for ease of navigation */}
            <SideNav setLoggedIn={setLoggedIn} data={data} />
            <Task data={data} setData={setData} />
          </div>
        </div>
      </Route>

      <Route exact path="/profile/habit">
        <div className="app">
          <div className="main">
            {/* Pin SideNav on every page within Homepage for ease of navigation */}
            <SideNav setLoggedIn={setLoggedIn} data={data} />
            <Habit />
          </div>
        </div>
      </Route>

      <Route exact path="/profile/meditation">
        <div className="app">
          <div className="main">
            {/* Pin SideNav on every page within Homepage for ease of navigation */}
            <SideNav setLoggedIn={setLoggedIn} data={data} />
            <Meditation />
          </div>
        </div>
      </Route>

      <ToastContainer />

    </div>
  )
}

export default App;

