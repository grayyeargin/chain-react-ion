import React from 'react'
import Ball from './ball'
import Explosion from './explosion'
import { connect } from 'react-redux'
import { increaseScore, showLayover, nextLevel, setUpBoard, addExplosion, removeBall, explodingState } from './redux/actions'

export class Board extends React.Component {
	constructor(props) {
		super(props);

		this.sassyLossComments = ["Bummer dude... You lost", "Try getting more 'splosions next time", "'A' for effort. 'F+' for actual success", "You didn't win, BUT you are excellent at losing", "Don't sweat the loss, I am sure you are good at something"];

		this.state = {
			colors: ['#bc13fe', '#FF9933', '#7FFF00', '#00BFFF', '#FF0000'],
			explosionColors: ['rgba(127, 255, 0, 0.6)', 'rgba(25, 181, 254, 0.6)', 'rgba(249, 191, 59, 0.6)', 'rgba(188, 19, 254, 0.6)'],
			comment: this.sassyLossComments[Math.floor(Math.random() * this.sassyLossComments.length)]
		}

	}

	componentDidMount() {
		const context = this.refs.canvas.getContext('2d');

    this.props.setUpBoard({
    	context: context,
    	num: this.props.ballCount,
    	height: this.props.boardSettings.height,
    	width: this.props.boardSettings.width
    })

    requestAnimationFrame(() => {this.update()});
	}

	update() {
		const context = this.props.context;

		context.save();

		context.fillStyle = '#000';
		context.fillRect(0, 0, this.props.boardSettings.width, this.props.boardSettings.height);

		this.moveBalls();

		context.restore();

		requestAnimationFrame(() => {this.update()});
	}

	moveBalls() {
		let balls = this.props.balls;
		for (let i = 0; i < balls.length; i++) {
			balls[i].render(this.props.context);
		}

		if (!this.props.explosions.length && this.props.exploding) {
			this.endGame();
			this.props.explodingState(false);
		} else {
			this.sizeExplosions();
		}
	}

	clickExplosion(e) {
		if (this.props.exploding) {
			return;
		}

		let board = this.refs.canvas,
				x = e.clientX - board.offsetLeft,
				y = e.clientY - board.offsetTop,
				context = this.props.context,
				firstExplosion;

				context.beginPath();
				context.arc(x,y,1,0,Math.PI*2);
				context.fillStyle = '#F5AB35';
				context.fill();

				firstExplosion = new Explosion({
					cx: x,
					cy: y,
					color: '#F5AB35'
				});

				this.props.addExplosion(firstExplosion);

				this.props.explodingState(true);
	}

	sizeExplosions() {
		let explosions = this.props.explosions,
			k = explosions.length;

		while(k--) {
			let explosion = explosions[k];

			if (explosion.radius < 1) {
				explosions.splice(k, 1);
			} else {
				explosion.render(this.props.context);
				this.checkHit(explosion);
			}
		}
	}

	checkHit(explosion) {
		let i = this.props.balls.length
		while(i--) {
			let ball = this.props.balls[i];

			if (this.props.context.isPointInPath(ball.cx, ball.cy)){
				let newExplosion = new Explosion({
					cx: ball.cx,
					cy: ball.cy,
					color: this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
				});

				this.props.increaseScore();
				this.props.addExplosion(newExplosion);
				this.props.removeBall(i);
			}
		}
	}

	endGame() {
		if (this.props.score < this.props.scoreNeeded) {
			this.props.showLayover('end');
		} else {
			this.props.showLayover('next-level');
		}
	}

	render() {
		return (
			<div className="board-container">
				<canvas id="game" ref="canvas" onClick={this.clickExplosion.bind(this)}
				 width={this.props.boardSettings.width}
         height={this.props.boardSettings.height}
				 />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		increaseScore: function(){
			dispatch(increaseScore()) 
		},
		showLayover: function(view) {
			dispatch(showLayover(view))
		},
		nextLevel: function(opts){
			dispatch(nextLevel(opts))
		},
		setUpBoard: function(opts){
			dispatch(setUpBoard(opts))
		},
		setContext: function(context){
			dispatch(setContext(context))
		},
		addExplosion: function(exp){
			dispatch(addExplosion(exp))
		},
		removeBall: function(idx){
			dispatch(removeBall(idx))
		},
		explodingState: function(isExp){
			dispatch(explodingState(isExp))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
