import React, {Component} from 'react';
import P5 from 'p5';
import styled from 'styled-components';
import './style/App.css';

const canvasWidth = 600;
const canvasHeight = 600;
const curveWidth = 40;
const curveHeight = 40;
let updatedRailroadMap = [];
let button;

export default class App extends Component {
    state = {
        railroadMap: [],
        trackObject:
            {
                id: 0,
                x1: 300,
                y1: 300,
                x2: 320,
                y2: 300,
                curveX: 0,
                curveY: 0,
                startAngle: 0,
                endAngle: 0,
                trackType: "",
                direction: ""
            },
    };


    // Returns the length of the railroad map -1
    lastTrack = () => this.state.railroadMap.length - 1;

    x_point_curve = (cx, r, angle) => cx + r * Math.cos(angle * Math.PI / 180);
    y_point_curve = (cy, r, angle) => cy + r * Math.sin(angle * Math.PI / 180);


    addCurveTrackObject = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[this.lastTrack()];
        let obj = Object.create(trackObject);

        obj.id = lastTrack.id + 1;
        obj.trackType = "curve";
        obj.direction = "";
        if (railroadMap.length > 0) {
            if (lastTrack.trackType === "straight") {
                obj.startAngle = 270;
                obj.endAngle = 315;
                obj.curveX = lastTrack.x2;
                obj.curveY = lastTrack.y2 + 20;
                obj.x2 = this.x_point_curve(obj.curveX, 20, obj.endAngle)
                obj.y2 = this.y_point_curve(obj.curveY, 20, obj.endAngle)
                this.setState({railroadMap: [...railroadMap, obj]})
            } else {
                obj.startAngle = 270;
                obj.endAngle = lastTrack.endAngle >= 360 ? 45 : lastTrack.endAngle + 45;
                obj.curveX = lastTrack.curveX;
                obj.curveY = lastTrack.curveY;
                obj.x2 = this.x_point_curve(obj.curveX, 20, obj.endAngle)
                obj.y2 = this.y_point_curve(obj.curveY, 20, obj.endAngle)
                this.setState({railroadMap: [...railroadMap, obj]})
                console.log("hallo from curve")
            }
        }
    }

    addStraitTrackObject = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[this.lastTrack()];
        let obj = Object.create(trackObject);

        try {
            if (railroadMap.length > 0) {
                obj.id = lastTrack.id + 1;
                obj.startAngle = "";
                obj.direction = "";
                obj.endAngle = "";
                obj.trackType = "straight";
                obj.x1 = lastTrack.x2;
                obj.y1 = lastTrack.y2;
                obj.x2 = lastTrack.x2 + 20;
                obj.y2 = lastTrack.y2;
                this.setState({railroadMap: [...railroadMap, obj]})
            } else {
                updatedRailroadMap.push(trackObject);
                this.setState({railroadMap: [...railroadMap, obj]})
            }
        } catch
            (e) {
            alert(e);
        }
    }

    deleteLastTrack = () => {
        console.log("Hello from delete")
        const {railroadMap} = this.state;
        let lastId = railroadMap[railroadMap.length - 1].id;
        if (railroadMap.length > 1) {
            this.setState({railroadMap: [...railroadMap.filter((track) => track.id !== lastId)]})
        } else {
            alert("You reached the last track!")
        }
    }

    drawRailroadMap = (s) => {
        const {railroadMap} = this.state;
        s.background(111);
        railroadMap.forEach(t => {
            switch (t.trackType) {
                case "straight":
                    s.line(t.x1, t.y1, t.x2, t.y2)
                    break;
                case "curve":
                    s.arc(t.curveX, t.curveY, curveWidth, curveHeight, s.radians(t.startAngle), s.radians(t.endAngle));
                    break;
            }
        })
    };

    canvas = (s) => {

        s.setup = () => {
            console.log("Hello from setup")
            const {railroadMap, trackObject} = this.state;
            this.setState({railroadMap: [...railroadMap, trackObject]})

            // 1. Create Canvas
            s.createCanvas(canvasWidth, canvasHeight);
            // 2. Draw Settings
            s.smooth();
            s.background(111);
            s.strokeWeight(4);
            //s.noFill();
            // 3. UI interactions
        }
        s.draw = () => {
            console.log("Hello from draw")
            // 1. Draw railroad map in the canvas
            this.drawRailroadMap(s);



            //s.line(300,300,350,300);
            // s.arc(350,312.5,40,40, s.radians(270), s.radians(315));
            // s.point(350,292);
            // s.line(364,298,370,350);

            //s.arc(350,300+12.5,40,40, s.radians(270), s.radians(360));
            //s.arc(350,300+12.5,40,40, s.radians(270), s.radians(45));
            // s.arc(350,300+12.5,40,40, s.radians(270), s.radians(90));
            // s.line(350,332,370,350);
            // s.arc(350,300+12.5,40,40, s.radians(270), s.radians(135));
            // s.arc(350,300+12.5,40,40, s.radians(270), s.radians(180));
            // s.arc(350,300+12.5,40,40, s.radians(270), s.radians(225));
            // s.arc(350,300+12.5,40,40, s.radians(270), s.radians(270));


        }
    }


    componentDidMount() {
        try {
            let myP5 = new P5(this.canvas, document.getElementById('p5sketch'))
            console.log(myP5)
            console.log("Hello from componentDidMount")
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        console.log("Hello from render")
        console.log(this.state.railroadMap)
        return (
            <div>
                <CanvasGrid id="p5sketch"/>
                <button data-testid='add-track' onClick={this.addStraitTrackObject}>ADD TRACK</button>
                <button data-testid='add-curve' onClick={this.addCurveTrackObject}>ADD CURVE</button>
                <button data-testid='delete-track' onClick={this.deleteLastTrack}>DELETE</button>
            </div>
        )
    }
}

const
    CanvasGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;

