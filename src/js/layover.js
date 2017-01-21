import React from 'react'
import { connect } from 'react-redux'

export class Layover extends React.Component {
	constructor(props) {
    super(props)
  }

	render() {
		return (
			<div id="game-layover">
				<div>button</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		score: state.score,
		scoreNeeded: state.scoreNeeded,
		level: state.level,
		ballCount: state.ballCount,
		percentNeeded: state.percentNeeded
	}
}

export default connect(mapStateToProps)(Layover)