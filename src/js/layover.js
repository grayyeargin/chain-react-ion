import React from 'react'
import { connect } from 'react-redux'
import { showLayover, hideLayover, nextLevel, start } from './redux/actions'

export class Layover extends React.Component {
	constructor(props) {
    super(props);

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleStartClick() {
  	let settings = this.props.boardSettings;

  	this.props.start({
  		ballCount: settings.startCount,
			percentNeeded: settings.startPct,
			scoreNeeded: settings.startNeeded,
			height: settings.height,
			width: settings.width
  	});

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

		this.props.hideLayover();
  }

	render() {
		const {view, active, level} = this.props;
		const hiddenClass = active ? '' : 'hidden';
		let layoverView;

		// if (view === "start") {
		// 	layoverView = <GameStart onClick={this.handleStartClick}/>;
		// } else if (view) {
		// 	layoverView = <NextLevel curLvl={level} onClick={this.handleNextClick}/>;
		// }

		switch (view) {
			case "start":
				layoverView = <GameStart onClick={this.handleStartClick}/>;
				break
			case "end":
				layoverView = <GameOver onClick={this.handleStartClick}/>;
				break
			default:
				layoverView = <NextLevel curLvl={level} onClick={this.handleNextClick}/>;
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
			dispatch(hideLayover()); 
		},
		showLayover: function(view){
			dispatch(showLayover(view));
		},
		nextLevel: function(opts){
			dispatch(nextLevel(opts));
		},
		start: function(opts){
			dispatch(start(opts));
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
	let nxtLvl = props.curLvl + 1
	return (
		<div className='game-layover-msg'>
			<h1>Noice, now to next level {nxtLvl}</h1>
			<div onClick={props.onClick} className='game-button'>LETS DO THIS</div>
		</div>
	)
}

function GameOver(props) {
	return (
		<div className='game-layover-msg'>
			<h1>Totes sucks</h1>
			<div onClick={props.onClick} className='game-button'>BEGIN ONCE MORE?</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layover)