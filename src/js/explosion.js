export default class Explosion {
	constructor(args) {
		this.cx = args.cx,
		this.cy = args.cy,
		this.radius = 1,
		this.color = args.color,
		this.sizeInt = .5,
		this.start = 0,
		this.end = Math.PI*2
	}

	render(contx) {
		if (this.radius === 50.0) {
			this.sizeInt = -.5;
		}

		const context = contx;

		context.save();

		this.radius += this.sizeInt;
		context.beginPath();
		context.arc(this.cx, this.cy, this.radius, 0, Math.PI*2);
		context.fillStyle = this.color;
		context.fill();
		
		context.restore();
	}
}
