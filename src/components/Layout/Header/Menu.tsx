import { FC, useRef, useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { ClickAwayListener, IconButton } from '@mui/material'
import MenuContent from './MenuContent'

const ID = 'menu'

const Menu: FC = () => {
	const buttonRef = useRef(null)
	const [isOpen, setOpen] = useState(false)

	function toggleMenu() {
		setOpen(!isOpen)
	}

	function closeMenu() {
		setOpen(false)
	}

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<div className="menu">
				<IconButton
					aria-label="menu"
					aria-describedby={ID}
					onClick={toggleMenu}
					ref={buttonRef}
				>
					<MenuIcon />
				</IconButton>
				<MenuContent
					isOpen={isOpen}
					id={ID}
					anchorEl={buttonRef.current}
					closeMenu={closeMenu}
				/>
			</div>
		</ClickAwayListener>
	)
}

export default Menu
