import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import Reservations from './Reservations/Reservations'
import Personal from './Personal/Personal'
import Header from './Layout/Header/Header'

export const Layout = ({ children }) => {
	return (
		<div className="root">
			<Header />
			<div className="router-body">{children}</div>
		</div>
	)
}

export const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					path="/"
					element={
						<Layout>
							<Reservations />
						</Layout>
					}
				/>
				<Route
					path="/personal"
					element={
						<Layout>
							<Personal />
						</Layout>
					}
				/>
			</>
		)
	)

	return <RouterProvider router={router} />
}
