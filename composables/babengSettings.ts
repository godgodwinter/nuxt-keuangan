export const useBaseUrl = () => {
  return useState('base_url', () => import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:8000/api/v1/")
}
