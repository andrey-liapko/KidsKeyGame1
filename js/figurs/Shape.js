import Figure from './Figure.js'

export default class Shape extends Figure {

	constructor(x, y) {
		super(x, y);
	}

	drawRandom() {
		super.drawRandom();

		this.beginFill(Math.random() * 0xFFFFFF);
		this.lineStyle(2, Math.random() * 0xFFFFFF, 1);
		this.moveTo(0, 0);
		this.lineTo(30, 45);
		this.lineTo(60, 90);
		this.lineTo(120, 0);
		this.closePath();
		this.endFill();
	}

	draw() {
		this.beginFill(0xADACAA);
		this.lineStyle(2, 0x6E6D6B, 1);
		this.moveTo(0, 0);
		this.lineTo(30, 45);
		this.lineTo(60, 90);
		this.lineTo(120, 0);
		this.closePath();
		this.endFill();
	}
}
