export class Curve {
    constructor(s, id, x, y, curveX, curveY, curveWidth, curveHeight, startAngle, endAngle) {
        this._s = s;
        this._id = id;
        this._x = x;
        this._y = y;
        this._curveX = curveX;
        this._curveY = curveY;
        this._curveWidth = curveWidth;
        this._curveHeight = curveHeight;
        this._startAngle = startAngle;
        this._endAngle = endAngle;
        this._str = 10;
    }

    display() {
        this._s.stroke(0)
        this._s.strokeWeight(this._str);
        this._s.arc(this._curveX, this._curveY, this._curveWidth, this._curveHeight, this._s.radians(this._startAngle), this._s.radians(this._endAngle));
    }

    clicked(x,y){
        let dist = this._s.dist(x, y, this._x, this._y)
        if(dist < 10){
            this._str = 25;
            console.log(`ID: ${this._id}`)
        }
    }
}