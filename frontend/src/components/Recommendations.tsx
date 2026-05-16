import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Recommendations.css'

interface Recommendation {
  id: string
  title: string
  description: string
  savings: number
  priority: 'high' | 'medium' | 'low'
}

export function Recommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: "1",
      title: "Optimize Query Performance",
      description: "Implement query caching to reduce compute costs",
      savings: 250,
      priority: "high"
    },
    {
      id: "2",
      title: "Scale Down During Off-Peak Hours",
      description: "Automatically pause warehouses during low-traffic periods",
      savings: 150,
      priority: "medium"
    },
    {
      id: "3",
      title: "Archive Old Data",
      description: "Move cold data to cheaper storage tiers",
      savings: 320,
      priority: "high"
    }
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchRecommendations()
  }, [])

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get('/api/recommendations')
      if (Array.isArray(response.data) && response.data.length > 0) {
        setRecommendations(response.data)
      }
    } catch (error) {
      console.error('Failed to fetch recommendations, using defaults', error)
    }
  }

  return (
    <div className="recommendations">
      <h1>Optimization Recommendations</h1>
      <div className="recommendation-list">
        {recommendations.map((rec) => (
          <div key={rec.id} className={`recommendation-card priority-${rec.priority}`}>
            <div className="rec-header">
              <h3>{rec.title}</h3>
              <span className={`priority-badge ${rec.priority}`}>{rec.priority}</span>
            </div>
            <p>{rec.description}</p>
            <div className="rec-footer">
              <span className="savings">Potential savings: ${rec.savings}/month</span>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
