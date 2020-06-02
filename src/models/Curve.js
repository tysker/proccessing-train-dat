import {lengthOfRailMap, xPointCurve, yPointCurve} from "../config/base";

let curve = (obj, lastTrack, startAngle, endAngle, angle, direction, grader, clockwise) => {
    obj.id = lastTrack.id + 1;
    obj.trackType = "curve";
    obj.clockwise = clockwise;
    obj.startAngle = startAngle;
    obj.endAngle = endAngle;
    obj.direction = direction;
    obj.grader = grader;
    obj.curveX = obj.clockwise ? xPointCurve(lastTrack.x2, 20, angle) : lastTrack.curveX;
    obj.curveY = obj.clockwise ? yPointCurve(lastTrack.y2, 20, angle) : lastTrack.curveY;
    obj.x2 = xPointCurve(obj.curveX, 20, obj.endAngle);
    obj.y2 = yPointCurve(obj.curveY, 20, obj.endAngle);
    //
    obj.originalDirection = lastTrack.direction;
    obj.OCX = obj.curveX;
    obj.OCY = obj.curveY;
    obj.OX2 = obj.x2;
    obj.OY2 = obj.y2;
    console.log(obj.direction);
    return obj;
}
export const curveClockWise = (railroadMap, trackObject, obj) => {
    const lastTrack = railroadMap[lengthOfRailMap(railroadMap)];

    try {
        if (railroadMap.length > 0) {
            switch (lastTrack.direction) {
                case "east":

                    return curve(obj, lastTrack, 270, 315, 90, "south-east", 45, true);

                case "south-east":
                    return curve(obj, lastTrack, 315, 0, 135, "south", 90, true);

                case "south":
                    return curve(obj, lastTrack, 0, 45, 180, "south-west", 135, true);

                case "south-west":
                    return curve(obj, lastTrack, 45, 90, 225, "west", 180, true);

                case "west":
                    return curve(obj, lastTrack, 90, 135, 270, "north-west", 225, true);

                case "north-west":
                    return curve(obj, lastTrack, 135, 180, 315, "north", 270, true);

                case "north":
                    return curve(obj, lastTrack, 180, 225, 360, "north-east", 315, true);

                case "north-east":
                    return curve(obj, lastTrack, 225, 270, 45, "east", 360, true);

            }
        }
    } catch (e) {
        alert(e)
    }
}

export const curveAntiClockWise = (railroadMap, trackObject, obj) => {
    const lastTrack = railroadMap[lengthOfRailMap(railroadMap)];

    try {
        if (railroadMap.length > 0) {
            switch (lastTrack.direction) {
                case "east":
                    return curve(obj, lastTrack, 45, 90, 0, "north-east", 315, false);

                case "south-east":
                    return curve(obj, lastTrack, 90, 135, 0, "east", 0, false);

                case "north-east":
                    return curve(obj, lastTrack, 360, 45, 0, "north", 270, false);

                case "south":
                    return curve(obj, lastTrack, 135, 180, 0, "south-east", 45, false);

                case "south-west":
                    return curve(obj, lastTrack, 180, 225, 0, "south", 90, false);

                case "north-west":
                    return curve(obj, lastTrack, 270, 315, 0, "west", 180, false);

                case "north":
                    return curve(obj, lastTrack, 315, 360, 0, "north-west", 225, false);

                case "west":
                    return curve(obj, lastTrack, 225, 270, 0, "south-west", 135, false);

            }
        }
    } catch (e) {
        alert(e)
    }

}
