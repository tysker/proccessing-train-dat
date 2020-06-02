import * as b from "../config/base";
import React from 'react';


    const RotateCurve = (lastTrack) => {

        console.log(lastTrack.originalDirection);
        switch (lastTrack.originalDirection) {
            case "east":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "north-east";

                    lastTrack.grader = 315;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "south-east";
                    lastTrack.grader = 45;

                }
                break;
            case "south-east":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "east";
                    lastTrack.grader = 0;

                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "south";
                    lastTrack.grader = 90;

                }
                break;
            case "south":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "south-east";
                    lastTrack.grader = 45;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "south-west";
                    lastTrack.grader = 135;

                }
                break;
            case "south-west":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "south";

                    lastTrack.grader = 90;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "west";
                    lastTrack.grader = 180;
                }
                break;
            case "west":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "south-west";
                    lastTrack.grader = 135;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "north-west";
                    lastTrack.grader = 225;
                }
                break;
            case "north-west":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "west";
                    lastTrack.clockwise = false;
                    lastTrack.grader = 180;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "north";
                    lastTrack.grader = 270;
                }
                break;
            case "north":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "north-west";
                    lastTrack.grader = 225;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "north-east";
                    lastTrack.grader = 315;
                }
                break;
            case "north-east":
                if (lastTrack.clockwise === true) {
                    lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "north";
                    lastTrack.grader = 270;
                } else if (lastTrack.clockwise === false) {
                    lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                    lastTrack.direction = "east";
                    lastTrack.grader = 360;

                }
                break;
        }
    };
  const  rotateCurveTrackClockwiseSetFunction = (lastTrack) =>{
        lastTrack.curveX = Math.round(b.xPointCurve(lastTrack.curveX, 40, lastTrack.startAngle));
        lastTrack.curveY = Math.round(b.yPointCurve(lastTrack.curveY, 40, lastTrack.startAngle));
        lastTrack.startAngle -= 225;
        lastTrack.endAngle -= 225;
        lastTrack.x2 = Math.round(b.xPointCurve(lastTrack.curveX, 20, lastTrack.startAngle));
        lastTrack.y2 = Math.round(b.yPointCurve(lastTrack.curveY, 20, lastTrack.startAngle));
        lastTrack.clockwise = false;

        return lastTrack;
    };

  const  rotateCurveTrackAntiClockwiseSetFunction = (lastTrack) =>{
        lastTrack.curveX = lastTrack.OCX;
        lastTrack.curveY = lastTrack.OCY;
        lastTrack.startAngle += 225;
        lastTrack.endAngle += 225;
        lastTrack.clockwise = true;
        lastTrack.x2 = lastTrack.OX2;
        lastTrack.y2 = lastTrack.OY2;

        return lastTrack;
    };

export default RotateCurve;

