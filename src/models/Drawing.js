import React, {Component} from 'react';
import P5 from 'p5';
import styled from 'styled-components';
import App from "../App";


const canvasWidth = 1200;
const canvasHeight = 600;
const curveWidth = 40;
const curveHeight = 40;


export default class Drawing extends Component {

    state = {
        railroadMap: [],
        trackObject:
            {
                id: 0,
                startPoint: false,
                endPoint: false,
                x1: 300,
                y1: 300,
                x2: 320,
                y2: 300,
                curveX: 0,
                curveY: 0,
                startAngle: 0,
                endAngle: 0,
                trackType: "",
                direction: 0
            },
    };

    // Returns the length of the railroad map -1
    lastTrack = () => this.state.railroadMap.length - 1;
    // Calculates x and y coordinates for the last pixel of each curve section
    x_point_curve = (cx, r, angle) => cx + r * Math.cos(angle * Math.PI / 180);
    y_point_curve = (cy, r, angle) => cy + r * Math.sin(angle * Math.PI / 180);

    addStrait = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[this.lastTrack()];
        let obj = Object.create(trackObject);

        try {
            if (railroadMap.length > 0) {
                obj.id = lastTrack.id + 1;
                obj.startAngle = lastTrack.startAngle;
                obj.endAngle = lastTrack.endAngle;
                obj.direction = 0;
                obj.trackType = "straight";
                obj.x1 = lastTrack.x2;
                obj.y1 = lastTrack.y2;
                obj.x2 = lastTrack.x2 + 20;
                obj.y2 = lastTrack.y2;
                this.setState({railroadMap: [...railroadMap, obj]})
                
            } else {
                this.setState({railroadMap: [...railroadMap, obj]})
            }
        } catch
            (e) {
            alert(e);
        }
    }

    addCurve = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[this.lastTrack()];
        let obj = Object.create(trackObject);

        obj.id = lastTrack.id + 1;
        obj.trackType = "curve";
        obj.direction = 0;
        if (railroadMap.length > 0) {
            switch (lastTrack.direction) {
                case 0:
                    obj.startAngle = 270;
                    obj.endAngle = 315;
                    obj.curveX = lastTrack.x2;
                    obj.curveY = lastTrack.y2 + 20;
                    obj.direction = 90;
                    obj.x2 = this.x_point_curve(obj.curveX, 20, obj.endAngle)
                    obj.y2 = this.y_point_curve(obj.curveY, 20, obj.endAngle)
                    this.setState({railroadMap: [...railroadMap, obj]})
                    break;
                case 90:
                    obj.startAngle = lastTrack.endAngle;
                    obj.endAngle = lastTrack.endAngle >= 360 ? 45 : lastTrack.endAngle + 45;
                    obj.curveX = lastTrack.curveX;
                    obj.curveY = lastTrack.curveY;
                    obj.direction = 90;
                    obj.x2 = this.x_point_curve(obj.curveX, 20, obj.endAngle)
                    obj.y2 = this.y_point_curve(obj.curveY, 20, obj.endAngle)
                    this.setState({railroadMap: [...railroadMap, obj]})
                    break;
                case 270:
                    obj.startAngle = lastTrack.startAngle === 45 ? 0 : lastTrack.startAngle - 45;
                    obj.endAngle = lastTrack.startAngle;
                    obj.curveX = lastTrack.curveX;
                    obj.curveY = lastTrack.curveY;
                    obj.direction = 270;
                    obj.x2 = this.x_point_curve(obj.curveX, 20, obj.endAngle)
                    obj.y2 = this.y_point_curve(obj.curveY, 20, obj.endAngle)
                    this.setState({railroadMap: [...railroadMap, obj]})
                    break;
                case 180:
                    this.setState({railroadMap: [...railroadMap, obj]})
                    break;
            }
        }
    }

    deleteLastTrack = () => {
        const {railroadMap} = this.state;
        let lastId = railroadMap[railroadMap.length - 1].id;
        if (railroadMap.length > 1) {
            this.setState({railroadMap: [...railroadMap.filter((track) => track.id !== lastId)]})
        } else {
            alert("You reached the last track!")
        }
    }

    rotateTrack = () => {
        const {railroadMap} = this.state;
        const lastTrack = railroadMap[this.lastTrack()];
        const direction = lastTrack.direction;
        switch (lastTrack.trackType) {
            case "curve":

                if (direction === 90) {
                    this.setState({
                        direction: lastTrack.direction = 270,
                        curveY: lastTrack.curveY -= 40,
                        endAngle: lastTrack.endAngle -= 225,
                        startAngle: lastTrack.startAngle -= 225
                    })
                }
                if (direction === 270) {
                    this.setState({
                        direction: lastTrack.direction = 90,
                        curveY: lastTrack.curveY += 40,
                        endAngle: lastTrack.endAngle += 225,
                        startAngle: lastTrack.startAngle += 225
                    })
                }
            case "straight":
                switch (lastTrack.direction) {

                    case 45

                }
        }
    }

    rotateStraightTrack = (track,angle) =>{

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
                    s.arc(t.curveX, t.curveY, curveWidth, curveHeight, s.radians(t.startAngle), (3.14 / 180) * t.endAngle);
                    break;
            }
        })
    };

    canvas = (s) => {

        s.setup = () => {
            const {railroadMap, trackObject} = this.state;
            this.setState({railroadMap: [...railroadMap, trackObject]})

            // 1. Create Canvas
            s.createCanvas(canvasWidth, canvasHeight);
            // 2. Draw Settings
            s.smooth();
            s.background(111);
            s.strokeWeight(4);
            //s.noFill();
        }

        s.draw = () => {
            // 1. Draw railroad map in the canvas
            this.drawRailroadMap(s);
        }
    }


    componentDidMount() {
        try {
            let myP5 = new P5(this.canvas, document.getElementById('p5sketch'))
            console.log(myP5)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        console.log(this.state.railroadMap)
        return (
            <div>
                <CanvasGrid id="p5sketch"/>
                <ButtonGrid>
                    <button data-testid='add-track' onClick={this.addStrait}>ADD TRACK</button>
                    <button data-testid='add-curve' onClick={this.addCurve}>ADD CURVE</button>
                    <button data-testid='rotate-track' onClick={this.rotateTrack}>ROTATE</button>
                    <button data-testid='delete-track' onClick={this.deleteLastTrack}>DELETE</button>
                </ButtonGrid>
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
const
    ButtonGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;

