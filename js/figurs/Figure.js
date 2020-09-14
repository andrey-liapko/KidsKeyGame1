export default class Figure extends PIXI.Graphics {
	constructor(x, y) {
		super();

		this.x = x;
		this.y = y;
		this.startX = x;
		this.startY = y;
	}

	drawRandom() {
		this.scale.set(Math.random() * 1.5 + 0.5);
		this.rotation = Math.random() * 10;
	}

	makeDragg() {
		this.interactive = true;
		this.buttonMode = true;
	}

	draw() {}
}
