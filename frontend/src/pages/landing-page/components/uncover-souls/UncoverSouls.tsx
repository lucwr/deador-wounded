import React from 'react'
import { Emblem } from 'components'

function UncoverSouls(): JSX.Element {
	return (
		<section className='maxWidth min-h-[50vh] flex-center-center text-center'>
			<div className='grid gap-y-8 place-items-center w-full h-full'>
				<Emblem className='' />

				<h2 className='text-4xl max-w-[50%] '>
					<span className='block'>Uncover the lost souls of the dead</span>{' '}
					<span>amongst the living</span>
				</h2>

				<p>
					<span className='block'>Reap as many souls from each harvest</span> and build
					your collection of Souls
				</p>
				<Emblem className='' variant='inverted' />
			</div>
		</section>
	)
}

export default UncoverSouls
