import React from 'react'
import { connect } from 'react-redux'
import chainReactionImg from '../images/chain-reaction.png'

export class Header extends React.Component {
	constructor(props) {
    super(props)
  }

	render() {
		return (
			<div id="title-board">
				<img src={chainReactionImg} alt="" />
				<h2>LEVEL <span id="level">{this.props.level}</span></h2>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		level: state.level
	}
}

export default connect(mapStateToProps)(Header)
