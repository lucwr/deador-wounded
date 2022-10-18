import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from 'assets/png/hero-image.png'

function Error(): JSX.Element {
	return (
		<section
			className='h-screen .bg-image-hero text-white flex-center-center flex-col font-bold'
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<h1>Error 404!</h1>
			<p>This page does not exist.</p>

			<Link to='/' className=''>
				Back Home
			</Link>
		</section>
	)
}

export default Error
