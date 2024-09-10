import { FC } from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { Avatar, Box, Fade, Popper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

type MenuContentProps = {
	isOpen: boolean
	id: string
	anchorEl: HTMLElement
	closeMenu: () => void
}

const MenuContent: FC<MenuContentProps> = ({ isOpen, id, anchorEl, closeMenu }) => {
	const navigate = useNavigate()

	function navigateTo(path: string) {
		navigate(path)
		closeMenu()
	}
	return (
		<Popper id={id} open={isOpen} anchorEl={anchorEl} placement="bottom-end" sx={{ zIndex: 3 }}>
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
							<ListItemText onClick={() => navigateTo('/')}>
								Moje rezervace
							</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText onClick={() => navigateTo('/personal')}>
								Osobní údaje
							</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText>Odhlásit</ListItemText>
						</MenuItem>
					</MenuList>
				</Paper>
			</Fade>
		</Popper>
	)
}

export default MenuContent
