import Figure from './Figure.js'

export default class Rectangle extends Figure {

	constructor(x, y) {
		super(x, y);
	}

	drawRandom() {
		super.drawRandom();

		this.lineStyle(2, Math.random() * 0xFFFFFF, 1);
		this.beginFill(Math.random() * 0xFFFFFF);
		this.drawRect(0, 0, 100, 100);
		this.endFill();
	}

	draw() {
		this.lineStyle(2, 0x6E6D6B, 1);
		this.beginFill(0xADACAA);
		this.drawRect(0, 0, 100, 100);
		this.endFill();
	}
}
