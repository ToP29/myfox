import { FC } from 'react'
import { useQuery, gql } from '@apollo/client'
import Reservation from './Reservation'
import './Reservations.css'

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
			},
			first: 5,
		},
	})
	console.log('data:', data)
	return (
		<div style={{ paddingBlock: 6, paddingInline: 12 }}>
			<h1 style={{ fontSize: 24, color: '#555555' }}>Moje rezervace</h1>
			<div className="reservations">
				{data?.calendars.map((reservation) => (
					<Reservation reservation={reservation} />
				))}
			</div>
		</div>
	)
}

export default Reservations
