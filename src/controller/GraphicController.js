import React, {Component} from 'react';
import '../style/Drawing.css';
import P5 from 'p5';
import RotateCurve from "./RotateCurve";
import UserController from "./UserController";
import * as b from '../config/base';
import {curveClockWise, curveAntiClockWise} from '../models/Curve';
import styled from "styled-components";

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
    }

    straightTrackDirection = (obj, lastTrack) => {
        const railLength = 20;
        const radius = 20;
        if(lastTrack.clockwise === true){
            obj.x1 = lastTrack.x2;
            obj.y1 = lastTrack.y2;
            obj.x2 = lastTrack.x2;
            obj.y2 = lastTrack.y2;

        }else if (lastTrack.clockwise === false){
            obj.x1 = b.xPointCurve(lastTrack.curveX, 20, lastTrack.endAngle);
            obj.y1 = b.xPointCurve(lastTrack.curveY, 20, lastTrack.endAngle);

        }

        let centerX = obj.x1;
        let centerY = obj.y1;
        if(lastTrack.clockwise === true){
            switch (lastTrack.grader) {
                case 0:
                    obj.x2 = lastTrack.x2 + railLength;
                    obj.direction = "east";
                    break;
                case 45:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 45));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 45));
                    obj.direction = "south-east";
                    break;
                case 90:
                    obj.y2 = lastTrack.y2 + railLength;
                    obj.direction = "south";
                    break;
                case 135:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 135));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 135));
                    obj.direction = "south-west";
                    break;
                case 180:
                    obj.x2 = lastTrack.x2 - railLength;
                    obj.direction = "west";
                    break;
                case 225:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 225));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 225));
                    obj.direction = "north-west";
                    break;
                case 270:
                    obj.y2 = lastTrack.y2 - railLength;
                    obj.direction = "north";
                    break;
                case 315:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 315));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 315));
                    obj.direction = "north-east";
                    break;
                case 360:
                    obj.x2 = lastTrack.x2 + railLength;
                    obj.direction = "east";
                    break;
            }
        }else if(lastTrack.clockwise === false) {

            switch (lastTrack.grader) {
                case 0:
                    obj.x2 = lastTrack.x2 + railLength;
                    obj.direction = "east";
                    break;
                case 45:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 45));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 45));
                    obj.direction = "south-east";
                    break;
                case 90:
                    obj.y2 = lastTrack.y2 + railLength;
                    obj.direction = "south";
                    break;
                case 135:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 135));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 135));
                    obj.direction = "south-west";
                    break;
                case 180:
                    obj.x2 = lastTrack.x2 - railLength;
                    obj.direction = "west";
                    break;
                case 225:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 225));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 225));
                    obj.direction = "north-west";
                    break;
                case 270:
                    obj.y2 = lastTrack.y1 - railLength;
                    obj.x2 = obj.x1;
                    obj.direction = "north";
                    break;
                case 315:
                    obj.x2 = Math.round(b.xPointCurve(centerX, radius, 315));
                    obj.y2 = Math.round(b.yPointCurve(centerY, radius, 315));
                    obj.direction = "north-east";
                    break;
                case 360:
                    obj.x2 = lastTrack.x2 + railLength;
                    obj.direction = "east";
                    break;
            }
        }
        return obj;
    }

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
                    this.rotateStraightTrack(lastTrack);
            }
        } catch (e) {
            alert(e);
        }
    };

    rotateStraightTrack = (track) => {
        const centerX = (track.x2 - track.x1) / 2 + track.x1;
        const centerY = (track.y2 - track.y1) / 2 + track.y1;
        const radius = 10;

        let rotateCount = 0;
        switch (track.grader) {
            case 0:
                rotateCount = 0;
                break;
            case 45:
                rotateCount = 1;
                break;
            case 90:
                rotateCount = 2;
                break;
            case 135:
                rotateCount = 3;
                break;
            case 180:
                rotateCount = 4;
                break;
            case 225:
                rotateCount = 5;
                break;
            case 270:
                rotateCount = 6;
                break;
            case 315:
                rotateCount = 7;
                break;
            case 360:
                rotateCount = 0;
                break;
        }

        this.setState((prev) => ({
            x1: track.x1 = Math.round(b.xPointCurve(centerX, radius, track.grader + 180)),
            y1: track.y1 = Math.round(b.yPointCurve(centerY, radius, track.grader + 180)),
            x2: track.x2 = Math.round(b.xPointCurve(centerX, radius, track.grader)),
            y2: track.y2 = Math.round(b.yPointCurve(centerY, radius, track.grader)),
            direction: track.direction = b.compass[rotateCount]
        }))
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

