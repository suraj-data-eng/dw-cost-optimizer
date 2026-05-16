import axios, { AxiosInstance } from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000'

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchCosts = () => apiClient.get('/api/costs')
export const fetchRecommendations = () => apiClient.get('/api/recommendations')
export const fetchAnalytics = () => apiClient.get('/api/analytics')

export default apiClient
