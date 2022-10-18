import React from 'react'
import { Navbar } from 'components'
import { LandingPage } from 'pages'

function Layout(): JSX.Element {
	return (
		<main>
			<Navbar />
			<LandingPage />
		</main>
	)
}

export default Layout
