import React, {Component} from 'react';
import '../style/Drawing.css';
import P5 from 'p5';
import RotateCurve from "./RotateCurve";
import UserController from "./UserController";
import * as b from '../config/base';
import {curveClockWise, curveAntiClockWise} from '../models/Curve';
import styled from "styled-components";
import RotateStraight from "./RotateStraight";
import SetStraightTrackDirection from "./SetStraightTrackDirection";

export default class GraphicController extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            railroadMap: [],
            trackObject:
                {
                    id: 0,
                    clockwise: true,
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
                    originalDirection: "east",
                    OCX: 0,
                    OCY: 0,
                    OX2: 0,
                    OY2: 0,
                    grader: 0,
                },
        };
    };

    componentDidMount() {
        try {
            // 1. Initiate one railroad object to railroad map to have an fix point in the canvas
            const {railroadMap, trackObject} = this.state;
            this.setState((prev) => ({
                railroadMap: [...railroadMap, trackObject]
            }))
            // 2. p5 reference to create a new P5 object
            this.myP5 = new P5(this.canvas, this.myRef.current)
        } catch (e) {
            console.log(e)
        }
    };

    addStraight = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[b.lengthOfRailMap(railroadMap)];
        let obj = Object.create(trackObject);
        let tempObj = SetStraightTrackDirection(obj, lastTrack);
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
                obj.direction = tempObj.direction;

                this.setState((prev) => ({
                    railroadMap: [...railroadMap, obj]
                }))
            } else {
                this.setState((prev) => ({
                    railroadMap: [...railroadMap, obj]
                }))
            }
        } catch
            (e) {
            alert(e);
        }
    };

    addCurve = () => {
        const {railroadMap, trackObject} = this.state;
        const lastTrack = railroadMap[b.lengthOfRailMap(railroadMap)];
        let obj = Object.create(trackObject);
        if (lastTrack.clockwise) {
            obj = curveClockWise(railroadMap, obj);
        } else {
            obj = curveAntiClockWise(railroadMap, obj);
        }

        this.setState((prev) => ({
            railroadMap: [...railroadMap, obj]
        }))
    }


    deleteLastTrack = () => {
        const {railroadMap} = this.state;
        const lastTrack = railroadMap[b.lengthOfRailMap(railroadMap)];

        try {
            if (railroadMap.length > 1) {
                this.setState((prev) => ({
                    railroadMap: [...railroadMap.filter((track) => track.id !== lastTrack.id)]
                }))

            } else {
                alert("You reached the last track!")
            }
        } catch (e) {
            alert(e);
        }
    }

    rotateTrack = (s) => {
        const {railroadMap} = this.state;
        const lastTrack = railroadMap[b.lengthOfRailMap(railroadMap)];
        try {
            switch (lastTrack.trackType) {
                case "curve":
                    RotateCurve(lastTrack);
                    break;
                case "straight":
                    lastTrack.grader = lastTrack.grader === 360 ? 45 : lastTrack.grader + 45;
                    RotateStraight(lastTrack);
            }
        } catch (e) {
            alert(e);
        }
    };

    resetCanvas = () => {
        const {trackObject} = this.state;
        const resetArray = [trackObject]
        this.setState((prev) => ({
            railroadMap: resetArray
        }))
    };

    drawRailroadMap = (s) => {
        const {railroadMap} = this.state;
        s.background(111);
        railroadMap.forEach(t => {
            switch (t.trackType) {
                case "straight":
                    s.line(t.x1, t.y1, t.x2, t.y2)
                    break;
                case "curve":
                    s.arc(t.curveX, t.curveY, b.curveWidth, b.curveHeight, s.radians(t.startAngle), s.radians(t.endAngle));
                    break;
            }
        })
    };

    canvas = (s) => {
        s.setup = () => {
            // 1. Create Canvas
            s.createCanvas(b.canvasWidth, b.canvasHeight);

            // 2. Draw Settings
            s.smooth();
            s.background(111);
            s.strokeWeight(6);
            //s.noFill();
        }
        s.draw = () => {
            // 1. Draw railroad map on the canvas
            this.drawRailroadMap(s);
        }
    };

    render() {
        console.log(this.state.railroadMap)
        return (
            <div>
                <CanvasGrid ref={this.myRef}/>
                <UserController
                    addStraight={this.addStraight}
                    addCurve={this.addCurve}
                    rotateTrack={this.rotateTrack}
                    deleteLastTrack={this.deleteLastTrack}
                    resetCanvas={this.resetCanvas}
                />
            </div>
        )
    }
};

const
    CanvasGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;

