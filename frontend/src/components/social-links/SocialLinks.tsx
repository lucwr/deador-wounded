import React from 'react'
import { Link } from 'react-router-dom'
import instagramIcon from 'assets/svg/instagram-icon.svg'
import discordIcon from 'assets/svg/discord-icon.svg'
import linkedinIcon from 'assets/svg/linkedin-icon.svg'
import twitterIcon from 'assets/svg/twitter-icon.svg'

const socialMediaIcons = [twitterIcon, discordIcon, linkedinIcon, instagramIcon]
function SocialLinks(): JSX.Element {
	return (
		<>
			{socialMediaIcons.map(icon => (
				<Link to='/' key={icon} className='w-8'>
					<img src={icon} alt={icon} className='aspect-square' />
				</Link>
			))}
		</>
	)
}

export default SocialLinks
