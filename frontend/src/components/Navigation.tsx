import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

export function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          💰 DW Cost Optimizer
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/recommendations" className="nav-link">Recommendations</Link>
          </li>
          <li className="nav-item">
            <Link to="/analytics" className="nav-link">Analytics</Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
