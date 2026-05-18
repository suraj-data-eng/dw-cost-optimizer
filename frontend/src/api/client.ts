import axios, { AxiosInstance } from 'axios'

// Use optional chaining and nullish coalescing to handle import.meta.env safely
const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) || 'http://localhost:8000'

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
