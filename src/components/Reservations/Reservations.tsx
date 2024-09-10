import { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import Reservation from './Reservation'
import './Reservations.css'
import { CircularProgress } from '@mui/material'

const CUSTOMER_ID = 'cm0b8kilabkyu0783rc2uuzax'

const GET_RESERVATIONS = gql`
	query Calendars($orderBy: CalendarOrderByInput, $where: CalendarWhereInput, $first: Int) {
		calendars(orderBy: $orderBy, where: $where, first: $first) {
			capacity
			groupClass
			createdAt
			from
			id
			note
			state
			to
			updatedAt
			isOnlineReservation
			canBeCancelUntil
			shop {
				name
				phone
				address {
					city
					street
					zip
				}
			}
			subject {
				microsite {
					logo {
						secret
					}
				}
			}
			carts {
				name
				price
				priceVat
				item {
					duration
					name
					price
					meta
					note
					picture {
						name
						secret
					}
				}
			}
		}
	}
`

const Reservations: FC = () => {
	const { loading, error, data } = useQuery(GET_RESERVATIONS, {
		variables: {
			orderBy: 'uuid_ASC',
			where: {
				state: 'Open',
				customers_every: {
					id: CUSTOMER_ID,
				},
			},
			first: 20,
		},
	})
	if (loading) return <CircularProgress />
	if (data?.calendars) {
		return (
			<>
				<h1 className="page-title">Moje rezervace</h1>
				<div className="reservations">
					{data.calendars
						.filter((reservation) => reservation.carts.length > 0)
						.map((reservation) => (
							<Reservation reservation={reservation} key={reservation.id} />
						))}
				</div>
			</>
		)
	}
	return <div>Error: {error.message}</div>
}

export default Reservations
