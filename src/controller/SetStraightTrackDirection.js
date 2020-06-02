import React from 'react';
import '../style/Drawing.css';
import * as b from '../config/base';
import {xPointCurve, yPointCurve} from "../config/base";

const SetStraightTrackDirection = (obj, lastTrack) => {
    const railLength = 20;
    const radius = 20;
    if(lastTrack.clockwise === true){
        obj.x1 = lastTrack.x2;
        obj.y1 = lastTrack.y2;
        obj.x2 = lastTrack.x2;
        obj.y2 = lastTrack.y2;
    }else if (lastTrack.clockwise === false){
        obj.x1 = xPointCurve(lastTrack.curveX, 20, lastTrack.startAngle);
        obj.y1 = yPointCurve(lastTrack.curveY, 20, lastTrack.startAngle);
        obj.x2 = obj.x1;
        obj.y2 = obj.y1;
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
                obj.x2 = obj.x1 + railLength;
                obj.direction = "east";
                break;
            case 45:
                obj.x2 = Math.round(b.xPointCurve(centerX, radius, 45));
                obj.y2 = Math.round(b.yPointCurve(centerY, radius, 45));
                obj.direction = "south-east";
                break;
            case 90:
                obj.y2 = obj.y1 + railLength;
                obj.direction = "south";
                break;
            case 135:
                obj.x2 = Math.round(b.xPointCurve(centerX, radius, 135));
                obj.y2 = Math.round(b.yPointCurve(centerY, radius, 135));
                obj.direction = "south-west";
                break;
            case 180:
                obj.x2 = obj.x1 - railLength;
                obj.direction = "west";
                break;
            case 225:
                obj.x2 = Math.round(b.xPointCurve(centerX, radius, 225));
                obj.y2 = Math.round(b.yPointCurve(centerY, radius, 225));
                obj.direction = "north-west";
                break;
            case 270:
                obj.y2 = obj.y1 - railLength;
                obj.direction = "north";
                break;
            case 315:
                obj.x2 = Math.round(b.xPointCurve(centerX, radius, 315));
                obj.y2 = Math.round(b.yPointCurve(centerY, radius, 315));
                obj.direction = "north-east";
                break;
            case 360:
                obj.x2 = obj.x1 + railLength;
                obj.direction = "east";
                break;
        }
    }
    return obj;
};

export default SetStraightTrackDirection;