import { FC, useEffect, useRef, useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import MenuContent from './MenuContent'
import './Menu.css'

const Menu: FC = () => {
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
		<div className="menu" ref={wrapperRef}>
			<IconButton aria-label="menu" onClick={toggleMenu} sx={{ outline: '0 !important' }}>
				<MenuIcon />
			</IconButton>
			<MenuContent isOpen={isOpen} />
		</div>
	)
}

export default Menu
