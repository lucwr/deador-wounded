/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
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
				<motion.div
					className='bg-image basis-[50%] '
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					<img
						src={polygon}
						alt='polygon emblem'
						className='object-contain max-h-[70vh]'
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default BuiltOnPolygon
