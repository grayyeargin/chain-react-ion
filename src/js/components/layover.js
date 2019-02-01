import React from 'react'
import { connect } from 'react-redux'
import { showLayover, hideLayover, nextLevel, start } from '../redux/actions'

export class Layover extends React.Component {
	constructor(props) {
		super(props)

		this.handleStartClick = this.handleStartClick.bind(this)
		this.handleNextClick = this.handleNextClick.bind(this)
	}

	handleStartClick() {
		let settings = this.props.boardSettings

		this.props.start({
			ballCount: settings.startCount,
			percentNeeded: settings.startPct,
			scoreNeeded: settings.startNeeded,
			height: settings.height,
			width: settings.width
		})

		this.props.hideLayover();
	}

	handleNextClick() {
		this.props.nextLevel({
			level: this.props.level,
			ballCount: this.props.ballCount,
			percentNeeded: this.props.percentNeeded,
			scoreNeeded: this.props.scoreNeeded,
			boardSettings: this.props.boardSettings,
			view: this.props.view
		});

		this.props.hideLayover()
	}

	render() {
		const {view, active, level} = this.props
		const hiddenClass = active ? '' : 'hidden'
		let layoverView

		switch (view) {
			case "start":
				layoverView = <LayoverButton onClick={this.handleStartClick} title={'CHAIN REACTION'} btnText={'START'}/>
				break
			case "end":
				layoverView = <LayoverButton onClick={this.handleStartClick} title={'Not quite enough...'} btnText={'START OVER'}/>
				break
			default:
				layoverView = <LayoverButton onClick={this.handleNextClick} title={`Well done, now to level ${level}`} btnText={'NEXT LEVEL'}/>
		}

		return (
			<div id="game-layover" className={hiddenClass}>
				{layoverView}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		view: state.layover.view,
		active: state.layover.active,
		level: state.level,
		ballCount: state.ballCount,
		percentNeeded: state.percentNeeded,
		scoreNeeded: state.scoreNeeded,
		boardSettings: state.boardSettings
	}
}

function mapDispatchToProps(dispatch) {
	return {
		hideLayover: function(){
			dispatch(hideLayover()) 
		},
		showLayover: function(view){
			dispatch(showLayover(view))
		},
		nextLevel: function(opts){
			dispatch(nextLevel(opts))
		},
		start: function(opts){
			dispatch(start(opts))
		}
	}
}

const LayoverButton = ({onClick, title, btnText}) =>
	<div className='game-layover-msg'>
		<h1>{title}</h1>
		<div onClick={onClick} className='game-button'>{btnText}</div>
	</div>

export default connect(mapStateToProps, mapDispatchToProps)(Layover)