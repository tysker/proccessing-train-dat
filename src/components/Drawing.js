
const mousePressed = (sketch) => {
    if(sketch.mouseIsPressed) {
        sketch.stroke(111);
        sketch.fill(128);
        sketch.rect(sketch.mouseX,sketch.mouseY,50,50)
    }else{
            sketch.background(100);
    }
}
export const s = ( sketch ) => {
    sketch.setup = () => {
        sketch.createCanvas(1500,600);
    }

    sketch.draw = () => {
        // sketch.stroke(255);
        // sketch.fill(128);
        // sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
        //sketch.rect(sketch.mouseX,sketch.mouseY,50,50);
        mousePressed(sketch);
    }
}


