import React, { useState } from 'react'
import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'
import { ReactComponent as CloseMenu } from '../../images/icon-close-menu.svg'
import { NavItem } from '../nav-item'
import { COMPANY, FEATURES } from './constants'
import { NavMenu } from '../nav-menu'
import { Button } from '../button'
import { MobileMenu } from '../mobile-menu'

export const Header = () => {
	const [isMobilMenuOpen, setIsMobilMenuOpen] = useState(false);
	return (
		<header className='flex items-center'>
			<LogoIcon />
			<nav className='hidden xl:flex items-center ml-8 space-x-6'>
				<NavItem text='Features'>
					<NavMenu items={FEATURES}/>
				</NavItem>
				<NavItem text='Company'>
					<NavMenu items={COMPANY}/>
				</NavItem>
				<NavItem text='Careers'/>
				<NavItem text='About'/>
			</nav>
			<div className='hidden xl:flex ml-auto space-x-5'>
				<Button> Loggin </Button>
				<Button hasBorder={true}> Register </Button>
			</div>
			<div 
				className='flex xl:hidden ml-auto cursor-pointer z-30'
				onClick={() =>setIsMobilMenuOpen(!isMobilMenuOpen)}
			>
				{isMobilMenuOpen ? <CloseMenu /> : <MenuIcon />}
			</div>
			<MobileMenu isOpen={isMobilMenuOpen}/>
		</header>
	)
}
