import { Button, Card, CardContent } from '@mui/material'
import dayjs from 'dayjs'
import { FC, useEffect, useState } from 'react'
import MoreMenu from './MoreMenu'

const Reservation: FC = ({ reservation }) => {
	const [imgUrl, setImgUrl] = useState(null)

	async function getImgUrl() {
		const _url = `https://api.myfox.cz/test/photo/${reservation.subject.microsite.logo.secret}`
		try {
			const res = await fetch(_url)
			const data = await res.json()
			setImgUrl(data.url)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getImgUrl()
	}, [])

	return (
		<Card
			variant="outlined"
			sx={{ borderRadius: 3 }}
			key={reservation.id}
			className="reservation"
		>
			<CardContent sx={{ display: 'flex', gap: '12px' }}>
				<div
					style={{
						width: '80px',
						height: '80px',
						borderRadius: '8px',
						overflow: 'hidden',
					}}
				>
					{imgUrl ? (
						<img
							src={imgUrl}
							alt=""
							style={{ width: '100%', aspectRatio: 1, objectFit: 'cover' }}
						/>
					) : (
						'loadning...'
					)}
				</div>
				<div className="details">
					<div className="shop">
						<div className="name">{reservation.shop.name}</div>
						<div className="address">
							{reservation.shop.address.street}, {reservation.shop.address.city},
						</div>
						<div className="phone">tel {reservation.shop.phone}</div>
					</div>
					<div className="carts">
						<div className="cart">
							<div className="name">
								{reservation.carts.map((cart) => cart.name).join(', ')}
							</div>
							<div className="from">
								{dayjs(reservation.from).format('DD.MM.YYYY h:mm')}
							</div>
							<div className="details">
								{reservation.carts.reduce((acc, cart) => {
									return acc + cart.item.duration
								}, 0)}
								&nbsp; minut,&nbsp;
								{reservation.carts.reduce((acc, cart) => {
									return acc + cart.item.price
								}, 0)}
								&nbsp; Kč
							</div>
						</div>
					</div>
					<div className="actions">
						<Button variant="contained" color="inherit" disableElevation>
							Trasa
						</Button>
						<Button variant="contained" color="inherit" disableElevation>
							Zavolat
						</Button>
						<MoreMenu />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Reservation
