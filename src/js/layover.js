import React from 'react'
import { connect } from 'react-redux'
import { showLayover, hideLayover, nextLevel } from './redux/actions'

export class Layover extends React.Component {
	constructor(props) {
    super(props);

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleStartClick() {
  	this.props.hideLayover();
  }

  handleNextClick() {
  	this.props.nextLevel({
			level: this.props.level,
			ballCount: this.props.ballCount,
			percentNeeded: this.props.percentNeeded,
			scoreNeeded: this.props.scoreNeeded
		});

		this.props.hideLayover();
  }

	render() {
		const {view, active, level} = this.props;
		const hiddenClass = active ? '' : 'hidden';
		let layoverView;

		if (view === "start") {
			layoverView = <GameStart onClick={this.handleStartClick}/>;
		} else {
			layoverView = <NextLevel onClick={this.handleNextClick}/>;
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
		scoreNeeded: state.scoreNeeded
	}
}

function mapDispatchToProps(dispatch) {
	return {
		hideLayover: function(){
			dispatch(hideLayover()); 
		},
		showLayover: function(view){
			dispatch(showLayover(view));
		},
		nextLevel: function(opts){
			dispatch(nextLevel(opts));
		}
	}
}



// LAYOVER VIEWS
function GameStart(props) {
	return (
		<div className='game-layover-msg'>
			<h1>'SPLOSION GAME</h1>
			<div onClick={props.onClick} className='game-button'>LETS DO THIS</div>
		</div>
	)
}

function NextLevel(props) {
	return (
		<div className='game-layover-msg'>
			<h1>Noice, now to next level</h1>
			<div onClick={props.onClick} className='game-button'>LETS DO THIS</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layover)