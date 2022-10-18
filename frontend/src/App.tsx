import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LandingPage, Error404 } from 'pages'

function App(): JSX.Element {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/*' element={<Error404 />} />
		</Routes>
	)
}

export default App
