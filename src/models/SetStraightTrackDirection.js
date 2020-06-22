import '../style/Drawing.css';
import * as b from '../config/base';

export const setStraightTrackDirection = (obj, lastTrack) => {

    if (lastTrack.clockwise === true) {
        obj.x1 = lastTrack.x2;
        obj.y1 = lastTrack.y2;
        obj.x2 = lastTrack.x2;
        obj.y2 = lastTrack.y2;
    } else if (lastTrack.clockwise === false) {
        obj.x1 = b.xPointCurve(lastTrack.curveX, 20, lastTrack.startAngle);
        obj.y1 = b.yPointCurve(lastTrack.curveY, 20, lastTrack.startAngle);
        obj.x2 = obj.x1;
        obj.y2 = obj.y1;
    }
    let centerX = obj.x1;
    let centerY = obj.y1;

    switch (lastTrack.grader) {
        case 0:
            obj.x2 = lastTrack.x2 + b.railLength;
            obj.direction = b.direction.EAST;
            break;
        case 45:
            obj.x2 = Math.round(b.xPointCurve(centerX, b.radius, 45));
            obj.y2 = Math.round(b.yPointCurve(centerY, b.radius, 45));
            obj.direction = b.direction.SOUTH_EAST;
            break;
        case 90:
            obj.y2 = lastTrack.y2 + b.railLength;
            obj.direction = b.direction.SOUTH;
            break;
        case 135:
            obj.x2 = Math.round(b.xPointCurve(centerX, b.radius, 135));
            obj.y2 = Math.round(b.yPointCurve(centerY, b.radius, 135));
            obj.direction = b.direction.SOUTH_WEST;
            break;
        case 180:
            obj.x2 = lastTrack.x2 - b.railLength;
            obj.direction = b.direction.WEST;
            break;
        case 225:
            obj.x2 = Math.round(b.xPointCurve(centerX, b.radius, 225));
            obj.y2 = Math.round(b.yPointCurve(centerY, b.radius, 225));
            obj.direction = b.direction.NORTH_WEST;
            break;
        case 270:
            obj.y2 = lastTrack.y2 - b.railLength;
            obj.direction = b.direction.NORTH;
            break;
        case 315:
            obj.x2 = Math.round(b.xPointCurve(centerX, b.radius, 315));
            obj.y2 = Math.round(b.yPointCurve(centerY, b.radius, 315));
            obj.direction = b.direction.NORTH_EAST;
            break;
        case 360:
            obj.x2 = lastTrack.x2 + b.railLength;
            obj.direction = b.direction.EAST;
            break;
        default:
            console.log("Something went wrong in the setStraightTrackDirection function")
    }

    return obj;
};