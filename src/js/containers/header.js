import React from 'react'

export class Header extends React.Component {

	render() {
		return (
			<div className="score-contents">
				<div className="current-level">Level: 0</div>
				<div className="total-hits">Score: 0</div>
				<div className="hits-left">To Win: 0</div>
			</div>
		)
	}
}

export default Header