import Circle from './figurs/Circle.js';
import Rectangle from './figurs/Rectangle.js';
import Shape from './figurs/Shape.js';
import * as main from './main.js';

export function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

export function onDragEnd() {
    if (Collision(this, main.circle)){
        if(this instanceof Circle){
            main.app.stage.removeChild(this);
        }
        else{
            this.x = this.startX;
            this.y = this.startY;
        }
    }
    if (Collision(this, main.rectangle)){
        if(this instanceof Rectangle){
            main.app.stage.removeChild(this);
        }
        else{
            this.x = this.startX;
            this.y = this.startY;
        }
    }
    if (Collision(this, main.shape)){
        if(this instanceof Shape){
            main.app.stage.removeChild(this);
        }
        else{
            this.x = this.startX;
            this.y = this.startY;
        }
    }
    this.startX = this.x;
    this.startY = this.y;
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}

export function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}

export function Collision(object1, object2){
    const bounds1 = object1.getBounds();
    const bounds2 = object2.getBounds();

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}