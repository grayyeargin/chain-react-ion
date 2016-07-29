import React from 'react'

export class Header extends React.Component {

	render() {
		return (
			<div id="title-board">
				<img src="chain-reaction.png" alt="" />
				<h2>LEVEL: <span id="level">1</span></h2>
				<div className="wrapper score-contents">
					<h3>Score: <span id="score">0</span></h3>
					<h3>To Win: <span id="hits-left">2</span></h3>
				</div>
			</div>
		)
	}
}

export default Header