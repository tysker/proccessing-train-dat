export default function sketch(p){
    let canvas;

    p.setup = () => {
        canvas = p.createCanvas(300, 200);
        p.noStroke();
    }

    p.draw = () => {
        p.arc(250, 150, 50, 50, 0, 3.14 / 2.0);
        p.rect(150, 90, 10, 20,20,20,20,20);
        p.rect(150, 110, 10, 20);
        p.curve(150, 130, 20, 10);
        p.beginShape();
        p.curveVertex(84, 91);
        p.curveVertex(84, 91);
        p.curveVertex(68, 19);
        p.curveVertex(21, 17);
        p.curveVertex(32, 91);
        p.curveVertex(32, 91);
        p.endShape();
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if(canvas) //Make sure the canvas has been created
            p.fill(newProps.props.color)

    }
}