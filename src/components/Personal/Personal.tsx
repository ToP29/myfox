import { gql, useMutation, useQuery } from '@apollo/client'
import { Alert, Box, Button, CircularProgress, TextField } from '@mui/material'
import { FC, useEffect, useState } from 'react'

const CUSTOMER_ID = 'cm0b8kilabkyu0783rc2uuzax'

const GET_CUSTOMER = gql`
	query GetCustomer($where: CustomerWhereUniqueInput!) {
		customer(where: $where) {
			email
			id
			name
			phone
			surname
		}
	}
`

const UPDATE_CUSTOMER = gql`
	mutation UpdateCustomer($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
		updateCustomer(data: $data, where: $where) {
			id
		}
	}
`

const Personal: FC = () => {
	const { loading, error, data } = useQuery(GET_CUSTOMER, {
		variables: {
			where: {
				id: CUSTOMER_ID,
			},
		},
	})
	const [updateCustomer] = useMutation(UPDATE_CUSTOMER)

	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		email: '',
		phone: '',
	})

	useEffect(() => {
		if (data?.customer) {
			setFormData({
				name: data.customer.name,
				surname: data.customer.surname,
				email: data.customer.email,
				phone: data.customer.phone,
			})
		}
	}, [data?.customer])

	function handleSave() {
		updateCustomer({ variables: { data: formData, where: { id: CUSTOMER_ID } } })
	}

	if (loading) return <CircularProgress />
	if (data?.customer) {
		return (
			<>
				<h1 className="page-title">Osobní údaje</h1>
				<Alert severity="info" sx={{ marginBottom: 3 }}>
					Údaje se použijí v příštích rezervacích, které se tím zrychlí.
				</Alert>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
				>
					<TextField
						id="outlined-basic"
						label="Jméno"
						variant="outlined"
						value={formData.name}
						fullWidth
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({ ...formData, name: event.target.value })
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Příjmení"
						variant="outlined"
						value={formData.surname}
						fullWidth
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({ ...formData, surname: event.target.value })
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Email"
						variant="outlined"
						value={formData.email}
						fullWidth
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({ ...formData, email: event.target.value })
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Phone"
						variant="outlined"
						value={formData.phone}
						fullWidth
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({ ...formData, phone: event.target.value })
						}}
					/>
				</Box>
				<Button
					variant="contained"
					color="success"
					fullWidth
					sx={{ marginTop: 3 }}
					onClick={handleSave}
				>
					Uložit
				</Button>
				<Button variant="text" color="success" fullWidth sx={{ marginTop: 2 }}>
					Změnit heslo
				</Button>
			</>
		)
	}
	return <div>Error: {error.message}</div>
}

export default Personal
