import React from 'react'
import { connect } from 'react-redux'

export class Header extends React.Component {
	constructor(props) {
    super(props)
  }

	render() {
		return (
			<div id="title-board">
				<img src="images/chain-reaction.png" alt="" />
				<h2>LEVEL: <span id="level">{this.props.level}</span></h2>
				<div className="wrapper score-contents">
					<h3>Score: <span id="score">{this.props.score}</span></h3>
					<h3>To Win: <span id="hits-left">{this.props.scoreNeeded}</span></h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		score: state.score,
		scoreNeeded: state.scoreNeeded,
		level: state.level
	}
}

export default connect(mapStateToProps)(Header)
