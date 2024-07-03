// services/apiService.ts

import axios, { AxiosInstance } from 'axios'

const apiService: AxiosInstance = axios.create({
	baseURL: process.env.API_URL,
})

apiService.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token')
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

apiService.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		if (error.response.status === 401) {
			localStorage.removeItem('token')
		}
		return Promise.reject(error)
	}
)

export default apiService
