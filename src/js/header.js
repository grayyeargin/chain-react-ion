import React from 'react'
import { connect } from 'react-redux'

export class Header extends React.Component {
	constructor(props) {
    super(props)
  }

	render() {
		return (
			<div id="title-board">
				<img src="chain-reaction.png" alt="" />
				<h2>LEVEL: <span id="level">1</span></h2>
				<div className="wrapper score-contents">
					<h3>Score: <span id="score">{this.props.score}</span></h3>
					<h3>To Win: <span id="hits-left">2</span></h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		score: state.score
	}
}

export default connect(mapStateToProps)(Header)
