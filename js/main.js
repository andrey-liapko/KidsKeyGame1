import Circle from './figurs/Circle.js';
import Rectangle from './figurs/Rectangle.js';
import Shape from './figurs/Shape.js';
import * as playFunctions from './playFunctions.js';


export const app = new PIXI.Application({
	backgroundColor: 0x1099bb,
	width: 1200,
	height: 1000,
});
document.body.appendChild(app.view);


export const circle = new Circle(app.screen.width / 7, app.screen.height - 100);
circle.draw();
app.stage.addChild(circle);

export const rectangle = new Rectangle(3 * app.screen.width / 7, app.screen.height - 150);
rectangle.draw();
app.stage.addChild(rectangle);

export const shape = new Shape(5 * app.screen.width / 7, app.screen.height - 150);
shape.draw();
app.stage.addChild(shape);

for (let i = 0; i < 10; i++) {
	createFigure(
		Math.floor(Math.random() * (app.screen.width - 200)),
		Math.floor(Math.random() * (app.screen.height - 400)),
		Math.round(Math.random() * 2 + 1),
	);
}

function createFigure(x, y, figureNumber) {
	let figure;

	switch (figureNumber) {
		case 1:
			figure = new Circle(x, y);
			break;
		case 2:
			figure = new Rectangle(x, y);
			break;
		case 3:
			figure = new Shape(x, y);
			break;
	}

	figure.drawRandom();
	figure.makeDragg();

	figure
		.on('pointerdown', playFunctions.onDragStart)
		.on('pointerup', playFunctions.onDragEnd)
		.on('pointerupoutside', playFunctions.onDragEnd)
		.on('pointermove', playFunctions.onDragMove);

	app.stage.addChild(figure);
}
