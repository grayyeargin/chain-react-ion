import React from 'react'
import Ball from './ball'
import Explosion from './explosion'

export class Board extends React.Component {
	constructor() {
		super();

		this.sassyLossComments = ["Bummer dude... You lost", "Try getting more 'splosions next time", "'A' for effort. 'F+' for actual success", "You didn't win, BUT you are excellent at losing", "Don't sweat the loss, I am sure you are good at something"];

		this.state = {
			height: 400,
			width: 700,
			context: null,
			colors: ['#bc13fe', '#FF9933', '#7FFF00', '#00BFFF', '#FF0000'],
			explosionColors: ['rgba(127, 255, 0, 0.6)', 'rgba(25, 181, 254, 0.6)', 'rgba(249, 191, 59, 0.6)', 'rgba(188, 19, 254, 0.6)'],
			comment: this.sassyLossComments[Math.floor(Math.random() * this.sassyLossComments.length)],
			scoreCount: 0,
			level: 1,
			percentHit: 0.1,
			ballCount: 30,
			minimumScore: 2,
			hitsLeft: 2,
			exploding: false
		}

		this.balls = [];
		this.explosions = [];
	}

	componentDidMount() {
		const context = this.refs.canvas.getContext('2d');
    this.setState({ context: context });

    this.createBalls(this.state.ballCount);

    requestAnimationFrame(() => {this.update()});
	}

	update() {
		const context = this.state.context;

		context.save();

		context.fillStyle = '#000';
		context.fillRect(0, 0, this.state.width, this.state.height);

		this.moveBalls();

		context.restore();

		requestAnimationFrame(() => {this.update()});
	}

	createBalls(num) {
		for (let i = 0; i < num; i++) {
			let ball = new Ball({
				width: this.state.width,
				height: this.state.height,
				color: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
			});

			this.balls.push(ball);
		}
	}

	moveBalls() {
		for (let i = 0; i < this.balls.length; i++) {
			this.balls[i].render(this.state);
		}

		if (!this.explosions.length && this.state.exploding) {
			this.endGame();
		} else {
			this.sizeExplosions();
		}
	}

	clickExplosion(e) {
		if (this.state.exploding) {
			return;
		}

		let board = this.refs.canvas,
				x = e.clientX - board.offsetLeft,
				y = e.clientY - board.offsetTop,
				context = this.state.context,
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

				this.explosions.push(firstExplosion);

				this.setState({ exploding: true });
	}

	sizeExplosions() {
		let k = this.explosions.length;

		while(k--) {
			let explosion = this.explosions[k];

			if (explosion.radius < 1) {
				this.explosions.splice(k, 1);
			} else {
				explosion.render(this.state);
			}
		}
	}

	render() {
		return (
			<div className="board-container">
				<canvas id="game" ref="canvas" onClick={this.clickExplosion.bind(this)}
				 width={this.state.width}
         height={this.state.height}
				 />
			</div>
		)
	}
}

export default Board