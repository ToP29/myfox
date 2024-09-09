import { FC } from 'react'
import Menu from './Menu'
import logo from '$assets/myfox-logo.svg'
import './Header.css'

const Header: FC = () => {
	return (
		<div className="header">
			<div className="left">
				<img src={logo} className="logo" alt="Myfox logo" />
				<span style={{ color: '#555555' }}>Rezervační systém</span>
			</div>
			<Menu />
		</div>
	)
}

export default Header
