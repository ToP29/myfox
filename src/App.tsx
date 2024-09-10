import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Router } from './components/Router'

const lightTheme = createTheme({
	palette: {
		mode: 'light',
	},
})

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Router />
		</ThemeProvider>
	)
}

export default App
