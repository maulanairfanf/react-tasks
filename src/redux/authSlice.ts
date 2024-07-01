import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from './store' // Impor AppThunk dari store untuk menggunakan Thunk
import apiService from '../services/apiService'
import { redirect } from 'react-router-dom'

interface AuthState {
	isAuthenticated: boolean
	token: string | null
}

const initialState: AuthState = {
	isAuthenticated: false,
	token: localStorage.getItem('token'),
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess(state, action: PayloadAction<string>) {
			state.isAuthenticated = true
			state.token = action.payload
			localStorage.setItem('token', action.payload)
		},
		logoutSuccess(state) {
			state.isAuthenticated = false
			state.token = null
			localStorage.removeItem('token')
		},
	},
})

export const { loginSuccess, logoutSuccess } = authSlice.actions
export default authSlice.reducer

export const login =
	(email: string, password: string): AppThunk =>
	async dispatch => {
		try {
			console.log('email: ' + email, password)
			const response = await apiService.post('/login', { email, password })
			console.log('response: ', response.data.access_token)
			const token = response.data.access_token

			dispatch(loginSuccess(token))
			redirect('/')
		} catch (error) {
			console.error('Login error:', error)
		}
	}

export const logout = (): AppThunk => async dispatch => {
	try {
		const response = await apiService.post('/logout')
		if (response) dispatch(logoutSuccess())
	} catch (error) {
		console.error('Login error:', error)
	}
}
