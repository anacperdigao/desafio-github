import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com'
})

export default api