import React from 'react'
import { Navbar } from 'components'
import heroImage from 'assets/png/hero-image.png'

function Header(): JSX.Element {
	return (
		<header className='maxWidth '>
			<section
				className='bg-image-hero min-h-screen'
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<Navbar />

				<div className='text-center max-w-[50%] mx-auto my-16'>
					<h1 className='text-6xl font-bold mb-4'>Dead or Wounded</h1>
					<p className='font-black mb-4'>Uncover. Harvest. Earn.</p>
					<p className='font-ibmPlexMonoLight  mb-4'>
						Dead or Wounded is a Play and Earn game, where players take on the role of a
						Grim reaper to uncover the souls of the dead from the living by guessing the
						correct combination and position of numbers in an array.
					</p>
				</div>
				{/* <ButtonSVG /> */}
				{/* <Button className='w-[10rem]'>Signup</Button> */}
			</section>
		</header>
	)
}

export default Header
