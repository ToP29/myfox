import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Layout/Header/Header'
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
			<div className="root">
				<Header />
				<div className="body">
					<Router />
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App
