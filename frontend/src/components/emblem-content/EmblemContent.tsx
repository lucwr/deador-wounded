import React from 'react'
import { Emblem } from 'components'

interface Props {
	header: string
	body: string
	className: string
	width?: 'full'
}

function EmblemContent({ header, body, className, width }: Props): JSX.Element {
	return (
		<section
			className={`${className}maxWidth maxWidth min-h-[50vh] flex-center-center text-center`}
		>
			<div className='grid gap-y-8 place-items-center w-full h-full'>
				<Emblem className='' />

				<h2 className={`text-4xl ${width === 'full' ? 'max-w-[85%]' : 'max-w-[40%] '}`}>
					{header}
				</h2>

				<p className={`${width === 'full' ? 'max-w-[85%]' : 'max-w-[30%] '}`}>{body}</p>
				<Emblem className='' variant='inverted' />
			</div>
		</section>
	)
}

export default EmblemContent
