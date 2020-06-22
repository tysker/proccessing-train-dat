export class Line {
    constructor(s,id, x1, y1, x2, y2) {
        this._s = s;
        this._id = id;
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._str = 10;
    }

    display() {
        this._s.stroke(0)
        this._s.strokeWeight(this._str);
        this._s.line(this._x1, this._y1, this._x2, this._y2)
    }

    clicked(x,y){
        let s = this._s;
        let dist = s.dist(x, y, this._x1, this._y1)
        if(dist < 10){
        console.log(`ID: ${this._id}`)
        }
    }

}

