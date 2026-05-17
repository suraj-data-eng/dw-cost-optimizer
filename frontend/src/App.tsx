import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { DashboardPage } from './pages/DashboardPage'
import { RecommendationsPage } from './pages/RecommendationsPage'
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
