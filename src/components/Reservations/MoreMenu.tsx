import { FC, useEffect, useRef, useState } from 'react'

import { Button } from '@mui/material'
import MoreMenuContent from './MoreMenuContent'
import './MoreMenu.css'
import { MoreHoriz } from '@mui/icons-material'

const MoreMenu: FC = () => {
	const wrapperRef = useRef(null)
	const [isOpen, setOpen] = useState(false)

	function toggleMenu() {
		setOpen(!isOpen)
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [wrapperRef])

	return (
		<div className="more-menu" ref={wrapperRef}>
			<Button
				variant="contained"
				color="inherit"
				disableElevation
				onClick={toggleMenu}
				sx={{ minWidth: 0 }}
			>
				<MoreHoriz />
			</Button>
			<MoreMenuContent isOpen={isOpen} />
		</div>
	)
}

export default MoreMenu
