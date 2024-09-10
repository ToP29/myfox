import { FC } from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { Fade, Popper } from '@mui/material'

type MoreMenuContentProps = {
	isOpen: boolean
	id: string
	anchorEl: HTMLElement
}

const MoreMenuContent: FC<MoreMenuContentProps> = ({ isOpen, id, anchorEl }) => {
	return (
		<Popper id={id} open={isOpen} anchorEl={anchorEl} placement="bottom-end" sx={{ zIndex: 2 }}>
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
		</Popper>
	)
}

export default MoreMenuContent
