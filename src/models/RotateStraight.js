import '../style/Drawing.css';
import * as b from '../config/base';


export const rotateStraight = (track) => {
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
        default:
            console.log("Something went wrong in the rotateStraight function")
    }

    track.x1 = Math.round(b.xPointCurve(centerX, radius, track.grader + 180));
    track.y1 = Math.round(b.yPointCurve(centerY, radius, track.grader + 180));
    track.x2 = Math.round(b.xPointCurve(centerX, radius, track.grader));
    track.y2 = Math.round(b.yPointCurve(centerY, radius, track.grader));
    track.direction = b.compass[rotateCount];

};

