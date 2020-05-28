import React, {Component} from 'react';
import P5 from 'p5';
import '../style/Drawing.css';
import {lengthOfRailMap, xPointCurve, yPointCurve, compass} from '../models/Setup';
import {canvasWidth, canvasHeight, curveWidth, curveHeight, CanvasGrid, ButtonGrid} from '../models/Constants'
import {curveClockWise, curveAntiClockWise} from '../models/Curve';

let rotateCount = 0;
let isToggle = false;

export default class Drawing extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
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
                    direction: "east",
                    grader: 0,
                    clockwise: true
                },
        };
    }



    addStraight = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[lengthOfRailMap(railroadMap)];
        let obj = Object.create(trackObject);
        let tempObj = this.straightTrackDirection(obj, lastTrack);
        try {
            if (railroadMap.length > 0) {
                obj.id = lastTrack.id + 1;
                obj.startAngle = lastTrack.startAngle;
                obj.endAngle = lastTrack.endAngle;
                obj.trackType = "straight";
                obj.grader = lastTrack.grader;
                obj.direction = lastTrack.direction;
                obj.x1 = tempObj.x1;
                obj.y1 = tempObj.y1;
                obj.x2 = tempObj.x2;
                obj.y2 = tempObj.y2;
                console.log("Hallo from addStraight: " + obj.direction)
                this.setState({railroadMap: [...railroadMap, obj]})

            } else {
                this.setState({railroadMap: [...railroadMap, obj]})
            }
        } catch
            (e) {
            alert(e);
        }
    }


    straightTrackDirection = (obj, lastTrack) => {
        const railLength = 20;
        const radius = 20;

        obj.x1 = lastTrack.x2;
        obj.y1 = lastTrack.y2;
        obj.x2 = lastTrack.x2;
        obj.y2 = lastTrack.y2;
        const centerX = obj.x1;
        const centerY = obj.y1;
        switch (lastTrack.grader) {
            case 0:
                obj.x2 = lastTrack.x2 + railLength;
                break;
            case 45:
                obj.x2 = xPointCurve(centerX, radius, 45);
                obj.y2 = yPointCurve(centerY, radius, 45);
                break;
            case 90:
                obj.y2 = lastTrack.y2 + railLength;
                break;
            case 135:
                obj.x2 = xPointCurve(centerX, radius, 135);
                obj.y2 = yPointCurve(centerY, radius, 135);
                break;
            case 180:
                obj.x2 = lastTrack.x2 - railLength;
                break;
            case 225:
                obj.x2 = xPointCurve(centerX, radius, 225);
                obj.y2 = yPointCurve(centerY, radius, 225);
                console.log(obj.x2)
                console.log(obj.y2)
                break;
            case 270:
                obj.y2 = lastTrack.y2 - railLength;
                break;
            case 315:
                obj.x2 = xPointCurve(centerX, radius, 315);
                obj.y2 = yPointCurve(centerY, radius, 315);
                break;
            case 360:
                obj.x2 = lastTrack.x2 + railLength;
                break;
        }

        return obj;
    }

    addCurve = () => {
        const {railroadMap, trackObject} = this.state;
        let obj = Object.create(trackObject);
        obj = curveClockWise(railroadMap, trackObject, obj);
        this.setState({railroadMap: [...railroadMap, obj]})
    }


    deleteLastTrack = () => {
        const {railroadMap} = this.state;
        const lastTrack = railroadMap[lengthOfRailMap(railroadMap)];

        try {
            if (railroadMap.length > 1) {
                this.setState({railroadMap: [...railroadMap.filter((track) => track.id !== lastTrack.id)]})

            } else {
                alert("You reached the last track!")
            }
        } catch (e) {
            alert(e);
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
                    s.arc(t.curveX, t.curveY, curveWidth, curveHeight, s.radians(t.startAngle), (3.14 / 180) * t.endAngle);
                    break;
            }
        })
    };

    // rotateTrack = () => {
    //     const {railroadMap} = this.state;
    //     const lastTrack = railroadMap[lengthOfRailMap(railroadMap)];
    //     try {
    //         switch (lastTrack.trackType) {
    //             case "curve":
    //                 if (lastTrack.direction === "south-east") {
    //
    //                 }
    //                 break;
    //             case "straight":
    //                 lastTrack.grader = lastTrack.grader + 45;
    //                 this.rotateStraightTrack(lastTrack);
    //         }
    //     } catch (e) {
    //         alert(e);
    //     }
    // }
    rotateTrack = () => {
        const {railroadMap} = this.state;
        const lastTrack = railroadMap[lengthOfRailMap(railroadMap)];
        
        try {
            switch (lastTrack.trackType) {
                case "curve":
                    if (lastTrack.direction === "south-east") {

                    }

                    break;
                case "straight":
                    lastTrack.grader = lastTrack.grader + 45;
                    this.rotateStraightTrack(lastTrack);
            }
        } catch (e) {
            alert(e);
        }
    }

    rotateStraightTrack = (track) => {
        const centerX = (track.x2 - track.x1) / 2 + track.x1;
        const centerY = (track.y2 - track.y1) / 2 + track.y1;
        const radius = 10;

        this.setState({
            x1: track.x1 = xPointCurve(centerX, radius, track.grader + 180),
            y1: track.y1 = yPointCurve(centerY, radius, track.grader + 180),
            x2: track.x2 = xPointCurve(centerX, radius, track.grader),
            y2: track.y2 = yPointCurve(centerY, radius, track.grader),
            direction: track.direction = compass[rotateCount]
        })
        rotateCount === 7 ? rotateCount = 0 : rotateCount++;
    };

    canvas = (s) => {

        s.setup = () => {
            // 1. Initiate one railroad object to railroad map to have an fix point in the canvas
            const {railroadMap, trackObject} = this.state;
            this.setState({railroadMap: [...railroadMap, trackObject]})

            // 2. Create Canvas
            s.createCanvas(canvasWidth, canvasHeight);

            // 3. Draw Settings
            s.smooth();
            s.background(111);
            s.strokeWeight(4);
            //s.noFill();
        }

        s.draw = () => {
            // 1. Draw railroad map on the canvas
            this.drawRailroadMap(s);
        }
    }

    componentDidMount() {
        try {
            this.myP5 = new P5(this.canvas, this.myRef.current)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        console.log(this.state.railroadMap)
        return (
            <div>
                <CanvasGrid ref={this.myRef}/>
                <ButtonGrid>
                    <button data-testid='add-straight' className="btn" onClick={this.addStraight}>ADD TRACK</button>
                    <button data-testid='add-curve' className="btn" onClick={this.addCurve}>ADD CURVE</button>
                    <button data-testid='rotate-track' className="btn" onClick={this.rotateTrack}>ROTATE</button>
                    <button data-testid='delete-track' className="btn" onClick={this.deleteLastTrack}>DELETE</button>
                </ButtonGrid>
            </div>
        )
    }
}

