import React from 'react'
import { motion } from 'framer-motion'
import { Emblem } from 'components'

interface Props {
	header: string
	body: string
	className: string
	width?: 'full'
}

function EmblemContent({ header, body, className, width }: Props): JSX.Element {
	const from = width === 'full' ? { opacity: 0, x: -100 } : { opacity: 0, y: 100 }
	const to = width === 'full' ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
	return (
		<motion.section
			className={`${className}  maxWidth min-h-[50vh] flex-center-center text-center`}
			initial={from}
			whileInView={to}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<div className='grid gap-y-8 place-items-center w-full h-full'>
				<Emblem className='' />

				<h2 className={`text-4xl ${width === 'full' ? 'max-w-[85%]' : 'max-w-[40%] '}`}>
					{header}
				</h2>

				<p className={`${width === 'full' ? 'max-w-[85%]' : 'max-w-[30%] '}`}>{body}</p>
				<Emblem className='' variant='inverted' />
			</div>
		</motion.section>
	)
}

export default EmblemContent
