import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import apiService from '../../services/apiService'
import { AxiosResponse } from 'axios'

export interface AuthState {
	isAuthenticated: boolean
	token: string | null
	loading: boolean
	error: string | null
}

interface LoginCredentials {
	email: string
	password: string
}

interface RegisterCredentials {
	name: string
	email: string
	password: string
	password_confirmation: string
}

const initialState: AuthState = {
	isAuthenticated: false,
	token: localStorage.getItem('token'),
	loading: false,
	error: null,
}

interface LoginResponse {
	access_token: string
}

export const login = createAsyncThunk(
	'auth/login',
	async (credentials: LoginCredentials, thunkAPI) => {
		try {
			const response: AxiosResponse<LoginResponse> = await apiService.post(
				'/login',
				credentials
			)
			const token = response.data.access_token
			localStorage.setItem('token', token)
			return token
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const register = createAsyncThunk(
	'auth/register',
	async (credentials: RegisterCredentials, thunkAPI) => {
		try {
			const response: AxiosResponse<LoginResponse> = await apiService.post(
				'/register',
				credentials
			)
			const token = response.data.access_token
			localStorage.setItem('token', token)
			return token
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	async (credentials: RegisterCredentials, thunkAPI) => {
		try {
			const response: AxiosResponse<LoginResponse> = await apiService.post(
				'/logout',
				credentials
			)
			if (response) {
				localStorage.removeItem('token')
			}
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logoutSuccess(state) {
			state.isAuthenticated = false
			state.token = null
			localStorage.removeItem('token')
		},
		loginSuccess(state, action: PayloadAction<string>) {
			state.isAuthenticated = true
			state.token = action.payload
			state.error = null
			localStorage.setItem('token', action.payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
				state.loading = false
				state.isAuthenticated = true
				state.token = action.payload
				localStorage.setItem('token', action.payload)
			})
			.addCase(login.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload.message || 'Failed to login'
			})
			.addCase(register.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<string>) => {
				state.loading = false
				state.isAuthenticated = true
				state.token = action.payload
			})
			.addCase(register.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload.message || 'Failed to register'
			})
			.addCase(logout.fulfilled, state => {
				state.isAuthenticated = false
				state.token = null
				state.error = null
			})
	},
})

export const { loginSuccess, logoutSuccess } = authSlice.actions

export default authSlice.reducer
