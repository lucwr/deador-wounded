import React from 'react'
import { Footer } from 'components'
import Header from './components/header/Header'
import RestoreOrder from './components/restore-order/RestoreOrder'
import EmblemContent from '../../components/emblem-content/EmblemContent'
import WhatIsDOW from './components/what-is-dow/WhatIsDOW'
import BuiltOnPolygon from './components/built-on-polygon/BuiltOnPolygon'

function LandingPage(): JSX.Element {
	return (
		<main>
			<Header />
			<RestoreOrder className='aspect-video' />
			<WhatIsDOW />
			<EmblemContent
				header='Uncover the lost souls of the dead amongst the living'
				body='Reap as many souls from each harvest and build your collection of Souls'
				className=''
			/>
			<RestoreOrder className='object-contain max-h-[70vh]' variant='ship' />
			<BuiltOnPolygon />
			<RestoreOrder className='object-contain max-h-[70vh]' variant='folklore' />
			<Footer />
		</main>
	)
}

export default LandingPage
