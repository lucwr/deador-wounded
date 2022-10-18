import React from 'react'
import Header from './components/header/Header'
import RestoreOrder from './components/restore-order/RestoreOrder'
import UncoverSouls from './components/uncover-souls/UncoverSouls'
import WhatIsDOW from './components/what-is-dow/WhatIsDOW'

function LandingPage(): JSX.Element {
	return (
		<main>
			<Header />
			<RestoreOrder />
			<WhatIsDOW />
			<UncoverSouls />
		</main>
	)
}

export default LandingPage
