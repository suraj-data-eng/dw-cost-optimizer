import { useState, useEffect } from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../styles/Dashboard.css'

interface CostData {
  date: string
  cost: number
  projected: number
}

interface DashboardSummary {
  monthly_cost: number
  projected_monthly: number
  potential_savings: number
  data_source: string
}

export function Dashboard() {
  const [costData, setCostData] = useState<CostData[]>([])
  const [summary, setSummary] = useState<DashboardSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const [costsRes, summaryRes] = await Promise.all([
        axios.get('/api/costs'),
        axios.get('/api/dashboard-summary')
      ])
      setCostData(costsRes.data)
      setSummary(summaryRes.data)
      setError(null)
    } catch (err) {
      setError('Failed to load dashboard data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="dashboard-loading">Loading...</div>
  if (error) return <div className="dashboard-error">{error}</div>

  return (
    <div className="dashboard">
      <h1>Data Warehouse Cost Dashboard</h1>
      
      <div className="cost-summary">
        <div className="summary-card">
          <h3>Monthly Cost</h3>
          <p className="amount">${summary?.monthly_cost.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
        </div>
        <div className="summary-card">
          <h3>Projected Monthly</h3>
          <p className="amount">${summary?.projected_monthly.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
        </div>
        <div className="summary-card alert">
          <h3>Potential Savings</h3>
          <p className="amount">${summary?.potential_savings.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Cost Trend (Last 90 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cost" stroke="#8884d8" />
            <Line type="monotone" dataKey="projected" stroke="#82ca9d" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {summary && (
        <div className="data-source">
          <small>Data source: {summary.data_source}</small>
        </div>
      )}
    </div>
  )
}
