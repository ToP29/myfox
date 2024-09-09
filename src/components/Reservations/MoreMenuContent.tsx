import { FC } from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { Fade } from '@mui/material'

type MoreMenuContentProps = {
	isOpen: boolean
}

const MoreMenuContent: FC<MoreMenuContentProps> = ({ isOpen }) => {
	return (
		<Fade in={isOpen} className="menu-content">
			<Paper sx={{ width: 220, maxWidth: '100%' }}>
				<MenuList>
					<MenuItem>
						<ListItemText>Vytvořit další rezervaci</ListItemText>
					</MenuItem>
					<MenuItem>
						<ListItemText>Přidat do kalendáře</ListItemText>
					</MenuItem>
					<MenuItem>
						<ListItemText>Přidat do kontaktů</ListItemText>
					</MenuItem>
				</MenuList>
			</Paper>
		</Fade>
	)
}

export default MoreMenuContent
