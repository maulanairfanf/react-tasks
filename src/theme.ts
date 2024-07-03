import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					// Outlined
					'& .MuiOutlinedInput-root': {
						color: '#fff',
						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#fff',
							borderWidth: '2px',
						},
						'&.Mui-focused': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: 'secondary.main',
								borderWidth: '3px',
							},
						},
						'&:hover:not(.Mui-focused)': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: '#ccc',
							},
						},
					},
					'& .MuiInputLabel-outlined': {
						color: '#fff',
						fontWeight: 'bold',
						'&.Mui-focused': {
							color: 'secondary.main',
						},
					},
				},
			},
		},
	},
})
export default theme
