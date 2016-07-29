
export default class Ball {
	constructor(args) {
		this.boardWidth = args.width;
		this.boardHeight = ards.height;
		this.cx = Math.floor(Math.random() * args.width);
		this.cy = Math.floor(Math.random() * args.height);
		this.radius = 5;
		this.start = 0;
		this.end = Math.PI*2;
		this.color = args.color
		this.xInt = [1, -1][Math.floor(Math.random() * 2)];
		this.yInt = [1, -1][Math.floor(Math.random() * 2)];
	}

	move() {
		if ( this.cx === 0 ) {
			this.xInt = 1;
		} else if ( this.cx === this.boardWidth ) {
			this.xInt = -1;
		} else if ( this.cy === 0 ) {
			this.yInt = 1;
		} else if ( this.cy === this.boardHeight ) {
			this.yInt = -1;
		}

		this.cx += this.xInt;
		this.cy += this.yInt;
	}

	render(state) {
		const context = state.context;

		context.beginPath();
		context.arc(this.cx,this.cy, this.radius, this.start, this.end);
		context.fillStyle = this.color;
		context.fill();
	}
}