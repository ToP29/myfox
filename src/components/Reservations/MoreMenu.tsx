import { FC, useRef, useState } from 'react'

import { Button, ClickAwayListener } from '@mui/material'
import MoreMenuContent from './MoreMenuContent'
import { MoreHoriz } from '@mui/icons-material'

const ID = 'more-menu'

const MoreMenu: FC = () => {
	const buttonRef = useRef(null)
	const [isOpen, setOpen] = useState(false)

	function toggleMenu() {
		setOpen(!isOpen)
	}

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<div className="more-menu">
				<Button
					variant="contained"
					color="inherit"
					disableElevation
					onClick={toggleMenu}
					ref={buttonRef}
				>
					<MoreHoriz />
				</Button>
				<MoreMenuContent isOpen={isOpen} id={ID} anchorEl={buttonRef.current} />
			</div>
		</ClickAwayListener>
	)
}

export default MoreMenu
