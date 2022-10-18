/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import reaper from 'assets/png/reaper-and-horse.png'
import reaperShip from 'assets/png/reaper-ship.png'

interface Props {
	variant?: 'ship'
	className: string
}
function RestoreOrder({ variant, className }: Props): JSX.Element {
	return (
		<section
			className='maxWidth'
			// style={{ backgroundImage: `url(${reaper})` }}
		>
			<div className='bg-image h-screen flex-center-center'>
				<div className='bg-image basis-[50%]'>
					<img
						src={variant === 'ship' ? reaperShip : reaper}
						alt='reaper'
						className={className}
					/>
				</div>
				<div className='basis-[50%] pr-20'>
					<h2 className='text-4xl mb-8 w-[80%]'>
						You are our last hope to restore the order of nature and life
					</h2>
					<p>
						The Grim Reaper has often been falsely depicted as an evil spirit that preys
						on mortals. In truth, however, we are neither evil nor good, merely a force
						of nature and order.
					</p>
					<p>
						Death is a fundamental part of life and it is the Grim Reaper's duty to
						claim the souls of the deceased so as to maintain the balance of nature.
					</p>
					<p>
						The Reaper does not "kill" mortals, but merely guides their spirits to the
						next realm and it is not their place to judge souls or determine what will
						become of them.
					</p>
				</div>
			</div>
		</section>
	)
}

export default RestoreOrder
