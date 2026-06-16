import axios from 'axios'

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'https://conversor-word-pdf-production.up.railway.app'
})

export const uploadFile = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const response = await api.post('/api/convert', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}

export const getHistory = async () => {
  const response = await api.get('/api/history')
  return response.data.conversions
}

export const downloadFile = (downloadUrl) => {
  window.open(downloadUrl, '_blank')
}
