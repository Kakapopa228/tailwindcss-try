import React from 'react'
import { NavItem } from '../nav-item'
import { COMPANY, FEATURES } from '../header/constants'
import { MenuItem } from '../menu-item'
import { Button } from '../button'

export const MobileMenu = ({isOpen = false}) => {
	return (
		<>
			<div className={`absolute top-0 right-0 left-0 bg-almost-black opacity-50 z-10 min-h-[115vh] ${isOpen ? 'flex' : 'hidden'}`}/>
			<div className={`absolute top-0 right-0 bg-white w-1/2 z-20 min-h-[115vh] ${isOpen ? 'flex' : 'hidden'}`}>
				<nav className="my-20 mx-5 space-y-5 text-lg w-ful">
					<NavItem text='Features'>
						<div className="flex flex-col spce-y-5 p-2">
							{FEATURES.map(({text, icon}) => <MenuItem key={text} text={text} icon={icon} />)}
						</div>
					</NavItem>
					<NavItem text='Company'>
						<div className="flex flex-col spce-y-5 p-2">
							{COMPANY.map(({text, icon}) => <MenuItem key={text} text={text} icon={icon} />)}
						</div>
					</NavItem>
					<NavItem text='Careers'/>
					<NavItem text='About'/>
					<div className='flex flex-col'>
						<Button>Loggin</Button>
						<Button hasBorder={true}>Register</Button>
					</div>
				</nav>
			</div>
		</>
	)
}
