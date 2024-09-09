import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import Reservations from './Reservations/Reservations'
import Personal from './Personal/Personal'

export const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Reservations />} />
				<Route path="/personal" element={<Personal />} />
			</>
		)
	)

	return <RouterProvider router={router} />
}
