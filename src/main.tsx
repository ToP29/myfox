import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { gqlClient } from './graphql/client.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApolloProvider client={gqlClient}>
			<App />
		</ApolloProvider>
	</StrictMode>
)
