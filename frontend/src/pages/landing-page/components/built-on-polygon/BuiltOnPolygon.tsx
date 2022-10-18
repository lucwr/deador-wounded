/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import polygon from 'assets/png/polygon.png'
import { EmblemContent } from 'components'

function BuiltOnPolygon(): JSX.Element {
	return (
		<section
			className='maxWidth'
			// style={{ backgroundImage: `url(${reaper})` }}
		>
			<div className='bg-image h-screen flex-center-center'>
				<div className='basis-[50%] pl-20'>
					<EmblemContent
						header='Built on the Polygon Blockchain'
						body='Reap as many souls from each harvest and build your collection of Souls'
						className=''
						width='full'
					/>
				</div>
				<div className='bg-image basis-[50%] '>
					<img src={polygon} alt='reaper' className='object-contain max-h-[70vh]' />
				</div>
			</div>
		</section>
	)
}

export default BuiltOnPolygon
