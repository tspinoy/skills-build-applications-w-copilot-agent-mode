import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiConfiguration } from './api.js'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-mark">O</div>
        <div>
          <p className="eyebrow">Mergington High School</p>
          <h1>OctoFit Tracker</h1>
        </div>
        <p className="api-status">{apiConfiguration}</p>
      </header>
      <nav className="app-nav" aria-label="Primary navigation">
        <NavLink to="/">Overview</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
      </nav>
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

function Overview() {
  return (
    <section className="overview">
      <p className="eyebrow">Today at a glance</p>
      <h2>Move together. Go further.</h2>
      <p className="intro">Track the energy of your school community, celebrate progress, and find your next challenge.</p>
      <div className="overview-grid">
        <NavLink className="overview-link" to="/activities"><strong>Log activity</strong><span>Record movement and build momentum.</span></NavLink>
        <NavLink className="overview-link" to="/leaderboard"><strong>See the leaderboard</strong><span>Check the friendly competition.</span></NavLink>
        <NavLink className="overview-link" to="/workouts"><strong>Find a workout</strong><span>Choose a session for your next goal.</span></NavLink>
      </div>
    </section>
  )
}

export default App
