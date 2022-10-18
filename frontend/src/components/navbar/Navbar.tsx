import React from 'react'
import { Link } from 'react-router-dom'
import instagramIcon from 'assets/svg/instagram-icon.svg'
import discordIcon from 'assets/svg/discord-icon.svg'
import linkedinIcon from 'assets/svg/linkedin-icon.svg'
import twitterIcon from 'assets/svg/twitter-icon.svg'
import ruby from 'assets/png/ruby.png'

const socialMediaIcons = [instagramIcon, discordIcon, linkedinIcon, twitterIcon]

function Navbar(): JSX.Element {
	return (
		<nav className='maxWidth'>
			<div className='flex-center-between pt-8 mx-20 pb-6 px-8 border-0 border-b-2 border-translucent'>
				<Link to='/market' className='font-black'>
					Market
				</Link>
				<div className='flex-center-end gap-x-16'>
					<div className='flex-center-center gap-x-4'>
						{socialMediaIcons.map(icon => (
							<button key={icon} className='w-8'>
								<img src={icon} alt={icon} className='aspect-square' />
							</button>
						))}
					</div>

					<Link to='/signin' className='font-black flex-center-between gap-x-2'>
						<span className='w-4'>
							<img src={ruby} alt='ruby' className='aspect-square' />
						</span>
						Sign In
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
