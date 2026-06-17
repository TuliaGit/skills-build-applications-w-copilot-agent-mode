import { Link, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const apiHost = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>OctoFit Tracker</h1>
        <p className="subtitle">
          Fetching data from{' '}
          <code>{`${apiHost}/api/[resource]/`}</code>
        </p>
        {!codespaceName && (
          <p className="warning">
            `VITE_CODESPACE_NAME` is undefined. Set it in <code>.env.local</code>{' '}
            or use Codespaces to target the hosted API.
          </p>
        )}

        <nav className="app-nav">
          <Link to="/users">Users</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <section className="home-page">
                <h2>Welcome</h2>
                <p>
                  Use the navigation above to view API-backed resources. The app
                  builds API URLs from{' '}
                  <code>import.meta.env.VITE_CODESPACE_NAME</code>.
                </p>
                <ul>
                  <li>Users</li>
                  <li>Teams</li>
                  <li>Activities</li>
                  <li>Workouts</li>
                  <li>Leaderboard</li>
                </ul>
              </section>
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="*"
            element={
              <section className="not-found">
                <h2>Page not found</h2>
                <p>Use the navigation to select a resource view.</p>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
