import React from 'react'
import bgImage from 'assets/png/portal-background.png'
import textFrame from 'assets/png/text-frame-1.png'
import { DOWLogo } from 'components'

function WhatIsDOW(): JSX.Element {
	return (
		<section
			className='maxWidth bg-image min-h-screen grid content-center pl-20'
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div
				className='relative grid place-items-center rounded-lg  w-full max-w-[35rem] h-max px-6 py-8 '
				// style={{ backgroundImage: `url(${textFrame})` }}
			>
				<img src={textFrame} alt='text frame' className='absolute inset-0 ' />
				<div className='w-28 my-4 relative z-[1]'>
					<DOWLogo />
				</div>

				<h2 className='text-4xl mb-4 relative z-[1]'>What is Dead or Wounded?</h2>
				<div className='relative z-[1] text-center'>
					<p>
						Dead or Wounded (DOW) is an easy number-guessing gameFi built on blockchain.
						Players can earn DOW tokens (Dead or Wounded DApp native token) for winning
						each round of the guessing challenge.
					</p>
					<p>
						Its framework is built on the concept of the Grim Reaper, uncovering the
						souls of the dead amongst the living and guiding them to the next realm.
					</p>
				</div>
			</div>
		</section>
	)
}

export default WhatIsDOW
