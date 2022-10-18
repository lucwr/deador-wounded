import React from 'react'
import textFrame from 'assets/png/text-frame-2.png'
import scroll from 'assets/png/scroll.png'
import coin from 'assets/png/coin.png'

function Folklore(): JSX.Element {
	return (
		<div
			className='relative flex-center-start gap-y-8 flex-col rounded-lg my-auto w-full max-w-[25rem] h-[60%] px-6 py-8 '
			// style={{ backgroundImage: `url(${textFrame})` }}
		>
			<img src={textFrame} alt='text frame' className='absolute inset-0 ' />
			<h3 className='text-2xl mb-4 relative z-[1] text-center'>
				Learn more about the Folklore of the Reaper
			</h3>
			<img
				src={scroll}
				alt='scroll'
				className='bg-opacity-0 w-28 aspect-square my-4 relative z-[1]'
			/>

			<div className='rounded-tl-lg rounded-tr-lg relative z-[1] bg-translucent flex items-center gap-x-4 p-4'>
				<img src={coin} alt='coin' className='w-8' />
				<div>
					<p className='font-bold'>50</p>
					<p>Free DOW to Start</p>
				</div>
			</div>
		</div>
	)
}

export default Folklore
