import { FC } from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { Avatar, Box, Fade } from '@mui/material'
import Typography from '@mui/material/Typography'

type MenuContentProps = {
	isOpen: boolean
}

const MenuContent: FC<MenuContentProps> = ({ isOpen }) => {
	return (
		<Fade in={isOpen} className="menu-content">
			<Paper sx={{ width: 220, maxWidth: '100%' }}>
				<MenuList>
					<MenuItem sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
						<Avatar>PZ</Avatar>
						<Box>
							<Typography sx={{ fontWeight: 600 }}>Petr Zákazník</Typography>
							<Typography>petr@gmail.com</Typography>
						</Box>
					</MenuItem>
					<Divider />
					<MenuItem>
						<ListItemText>Moje rezervace</ListItemText>
					</MenuItem>
					<MenuItem>
						<ListItemText>Osobní údaje</ListItemText>
					</MenuItem>
					<MenuItem>
						<ListItemText>Odhlásit</ListItemText>
					</MenuItem>
				</MenuList>
			</Paper>
		</Fade>
	)
}

export default MenuContent
