import React from 'react'
// import svgContainer from 'assets/svg/discord-icon.svg'

interface Prop {
	rest?: any
	variant?: string
	children?: string | number
	onClick?: (value: any) => void
	className: string
}
function Button({ rest, variant, onClick, className, children }: Prop): JSX.Element {
	return (
		<Button
			{...rest}
			onClick={onClick}
			className={`bg-image ${className}`}
			// style={{ backgroundImage: `url(${svgContainer})` }}
		>
			{children}
		</Button>
	)
}

export default Button
