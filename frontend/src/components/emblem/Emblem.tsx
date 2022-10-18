import React from 'react'
import emblem from 'assets/png/emblem.png'

interface Props {
	className: string
	variant?: 'inverted'
}

function Emblem({ className, variant }: Props): JSX.Element {
	return (
		<div className={`relative h-10  w-[15rem] ${className}`}>
			<img
				src={emblem}
				alt='emblem'
				className={`absolute inset-0 aspect-video ${
					variant === 'inverted' ? 'rotate-180' : ''
				}`}
			/>
		</div>
	)
}

export default Emblem
