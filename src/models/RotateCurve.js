import {direction, xPointCurve, yPointCurve} from "../config/base";


export const rotateCurve = (lastTrack) => {

    const {EAST, NORTH_EAST, NORTH_WEST, NORTH, WEST, SOUTH_WEST, SOUTH, SOUTH_EAST} = direction;
    switch (lastTrack.originalDirection) {
        case EAST:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = NORTH_EAST;

                lastTrack.grader = 315;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = SOUTH_EAST;
                lastTrack.grader = 45;

            }
            break;
        case SOUTH_EAST:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = EAST;
                lastTrack.grader = 0;

            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = SOUTH;
                lastTrack.grader = 90;

            }
            break;
        case SOUTH:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = SOUTH_EAST;
                lastTrack.grader = 45;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = SOUTH_WEST;
                lastTrack.grader = 135;

            }
            break;
        case SOUTH_WEST:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = SOUTH;

                lastTrack.grader = 90;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = WEST;
                lastTrack.grader = 180;
            }
            break;
        case WEST:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = SOUTH_WEST;
                lastTrack.grader = 135;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = NORTH_WEST;
                lastTrack.grader = 225;
            }
            break;
        case NORTH_WEST:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = WEST;
                lastTrack.clockwise = false;
                lastTrack.grader = 180;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = NORTH;
                lastTrack.grader = 270;
            }
            break;
        case NORTH:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = NORTH_WEST;
                lastTrack.grader = 225;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = NORTH_EAST;
                lastTrack.grader = 315;
            }
            break;
        case NORTH_EAST:
            if (lastTrack.clockwise === true) {
                lastTrack = rotateCurveTrackClockwiseSetFunction(lastTrack);
                lastTrack.direction = NORTH;
                lastTrack.grader = 270;
            } else if (lastTrack.clockwise === false) {
                lastTrack = rotateCurveTrackAntiClockwiseSetFunction(lastTrack);
                lastTrack.direction = EAST;
                lastTrack.grader = 360;

            }
            break;
        default:
            console.log("Something went wrong in the rotateCurve function")
    }
};

const rotateCurveTrackClockwiseSetFunction = (lastTrack) => {
    lastTrack.curveX = Math.round(xPointCurve(lastTrack.curveX, 40, lastTrack.startAngle));
    lastTrack.curveY = Math.round(yPointCurve(lastTrack.curveY, 40, lastTrack.startAngle));
    lastTrack.startAngle -= 225; // -225
    lastTrack.endAngle -= 225; // -225
    lastTrack.x2 = Math.round(xPointCurve(lastTrack.curveX, 20, lastTrack.startAngle));
    lastTrack.y2 = Math.round(yPointCurve(lastTrack.curveY, 20, lastTrack.startAngle));
    lastTrack.clockwise = false;

    return lastTrack;
};

const rotateCurveTrackAntiClockwiseSetFunction = (lastTrack) => {
    lastTrack.curveX = lastTrack.OCX;
    lastTrack.curveY = lastTrack.OCY;
    lastTrack.startAngle += 225; //+225
    lastTrack.endAngle += 225; //+225
    lastTrack.x2 = lastTrack.OX2;
    lastTrack.y2 = lastTrack.OY2;
    lastTrack.clockwise = true;

    return lastTrack;
};


