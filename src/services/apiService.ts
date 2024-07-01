// services/apiService.ts

import axios, { AxiosInstance } from 'axios'

const apiService: AxiosInstance = axios.create({
	baseURL: process.env.API_URL, // Menggunakan environment variable untuk baseURL
	timeout: 10000, // Batas waktu 10 detik untuk permintaan
})

// Interceptor untuk menambahkan token otorisasi atau menangani kesalahan
apiService.interceptors.request.use(
	config => {
		// Menambahkan token otorisasi jika ada
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
		// Menangani kesalahan umum seperti 401 Unauthorized
		if (error.response.status === 401) {
			// Redirect atau lakukan sesuatu jika diperlukan
		}
		return Promise.reject(error)
	}
)

export default apiService
