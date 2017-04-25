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
				<h2>LEVEL <span id="level">{this.props.level}</span></h2>
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
