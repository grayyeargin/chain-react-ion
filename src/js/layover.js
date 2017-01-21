import React from 'react'
import { connect } from 'react-redux'

export class Layover extends React.Component {
	constructor(props) {
    super(props)
  }

	render() {
		const {view, active} = this.props;
		const hiddenClass = active ? '' : 'hidden';
		return (
			<div id="game-layover" className={hiddenClass}>
				<div>button</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		view: state.layover.view,
		active: state.layover.active
	}
}

export default connect(mapStateToProps)(Layover)