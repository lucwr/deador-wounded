import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from 'assets/png/footer-background.png'
import { DOWLogo, SocialLinks } from 'components'

function Footer(): JSX.Element {
	return (
		<section
			className='maxWidth bg-image-footer min-h-[75vh] px-20 grid content-around'
			style={{
				backgroundImage: `linear-gradient(0deg, #2c6dae21 0%, #2d347d41 55.17%, #2e0452ea 100%), url(${bgImage})`,
			}}
		>
			<div className='flex-start-between'>
				<div className='max-w-[35%] flex-start-start flex-col gap-y-4'>
					<h2 className='text-4xl'>Join our community</h2>
					<p>
						Be a part of our social media community and stay updated with our latest
						developments.
					</p>
					<div className='flex-center-start gap-x-4'>
						<SocialLinks />
					</div>
				</div>

				<div className='flex-center-center gap-x-8'>
					<Link to='/'>Home</Link>
					<Link to='/'>Game Room</Link>
					<Link to='/'>Marketplace</Link>
					<Link to='/'>About</Link>
				</div>
			</div>
			<div className='max-w-[35%]'>
				<div className='w-28'>
					<DOWLogo />
				</div>
				<p>
					Dead or Wounded is a Play-to-Earn GameFi built on the Polygon Network. Uncover.
					Reap. Earn
				</p>
			</div>
		</section>
	)
}

export default Footer
