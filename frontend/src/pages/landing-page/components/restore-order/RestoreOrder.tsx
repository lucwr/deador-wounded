/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import reaper from 'assets/png/reaper-and-horse.png'
import reaperShip from 'assets/png/reaper-ship.png'
import Folklore from '../folklore/Folklore'

interface Props {
	variant?: 'ship' | 'folklore'
	className: string
}
function RestoreOrder({ variant, className }: Props): JSX.Element {
	return (
		<section
			className='maxWidth'
			// style={{ backgroundImage: `url(${reaper})` }}
		>
			<div
				className={`bg-image h-screen ${
					variant === 'folklore' ? 'p-20 flex-center-between' : 'flex-center-center'
				}`}
			>
				{variant === 'folklore' ? (
					<Folklore />
				) : (
					<motion.div
						className='bg-image basis-[50%]'
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<img
							src={variant === 'ship' ? reaperShip : reaper}
							alt='reaper'
							className={className}
						/>
					</motion.div>
				)}
				<motion.div
					className='basis-[50%] pr-20'
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1, ease: 'easeOut' }}
				>
					<h2 className='text-4xl mb-8 w-[80%]'>
						You are our last hope to restore the order of nature and life
					</h2>

					{variant === 'folklore' ? (
						<p>
							Dead or Wounded (DOW) is a play-to-earn decentralised game where players
							can earn DOW tokens (Dead or Wounded DApp native token). Early adopters
							are rewarded with 50 free DOW tokens to interact with the DApp as
							players are required to spend DOW tokens to access the game.
						</p>
					) : (
						<p>
							The Grim Reaper has often been falsely depicted as an evil spirit that
							preys on mortals. In truth, however, we are neither evil nor good,
							merely a force of nature and order.
						</p>
					)}
					{variant === 'folklore' ? (
						<p>
							Players stand a chance to win more DOW tokens for each round they win.
							The amount of token a player wins will be determined by their
							performance in the game.{' '}
						</p>
					) : (
						<p>
							Death is a fundamental part of life and it is the Grim Reaper's duty to
							claim the souls of the deceased so as to maintain the balance of nature.
						</p>
					)}
					{variant === 'folklore' ? (
						<p>
							Dead or Wounded is beginner friendly and does not require players to
							have any technical knowledge as it seeks to improve adoption of Web3 and
							give users the opportunity to earn while having fun.
						</p>
					) : (
						<p>
							The Reaper does not "kill" mortals, but merely guides their spirits to
							the next realm and it is not their place to judge souls or determine
							what will become of them.
						</p>
					)}
				</motion.div>
			</div>
		</section>
	)
}

export default RestoreOrder
