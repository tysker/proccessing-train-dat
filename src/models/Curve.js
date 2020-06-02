import * as b from "../config/base";
import {direction} from "../config/base";

export const curve = (obj, lastTrack, startAngle, endAngle, angle, direction, grader, clockwise) => {
    obj.id = lastTrack.id + 1;
    obj.trackType = b.track.CURVE;
    obj.clockwise = clockwise;
    obj.startAngle = startAngle;
    obj.endAngle = endAngle;
    obj.direction = direction;
    obj.grader = grader;
    obj.curveX = obj.clockwise ? b.xPointCurve(lastTrack.x2, 20, angle) : lastTrack.curveX;
    obj.curveY = obj.clockwise ? b.yPointCurve(lastTrack.y2, 20, angle) : lastTrack.curveY;
    obj.x2 = b.xPointCurve(obj.curveX, 20, obj.endAngle);
    obj.y2 = b.yPointCurve(obj.curveY, 20, obj.endAngle);
    //
    obj.originalDirection = lastTrack.direction;
    obj.OCX = obj.curveX;
    obj.OCY = obj.curveY;
    obj.OX2 = obj.x2;
    obj.OY2 = obj.y2;
    console.log(obj.direction);
    return obj;
};

const {EAST, NORTH_EAST, NORTH_WEST, NORTH, WEST, SOUTH_WEST, SOUTH, SOUTH_EAST} = direction;

export const curveClockWise = (railroadMap, obj) => {
    const lastTrack = railroadMap[b.lengthOfRailMap(railroadMap)];

    try {
        if (railroadMap.length > 0) {
            switch (lastTrack.direction) {
                case b.direction.EAST:
                    return curve(obj, lastTrack, 270, 315, 90, SOUTH_EAST, 45, true);

                case b.direction.SOUTH_EAST:
                    return curve(obj, lastTrack, 315, 0, 135, SOUTH, 90, true);

                case b.direction.SOUTH:
                    return curve(obj, lastTrack, 0, 45, 180, SOUTH_WEST, 135, true);

                case b.direction.SOUTH_WEST:
                    return curve(obj, lastTrack, 45, 90, 225, WEST, 180, true);

                case b.direction.WEST:
                    return curve(obj, lastTrack, 90, 135, 270, NORTH_WEST, 225, true);

                case b.direction.NORTH_WEST:
                    return curve(obj, lastTrack, 135, 180, 315, NORTH, 270, true);

                case b.direction.NORTH:
                    return curve(obj, lastTrack, 180, 225, 360, NORTH_EAST, 315, true);

                case b.direction.NORTH_EAST:
                    return curve(obj, lastTrack, 225, 270, 45, EAST, 360, true);
            }
        }
    } catch (e) {
        alert(e)
    }
}

export const curveAntiClockWise = (railroadMap, obj) => {
    const lastTrack = railroadMap[b.lengthOfRailMap(railroadMap)];

    try {
        if (railroadMap.length > 0) {
            switch (lastTrack.direction) {
                case b.direction.EAST:
                    return curve(obj, lastTrack, 45, 90, 0, NORTH_EAST, 315, false);

                case b.direction.SOUTH_EAST:
                    return curve(obj, lastTrack, 90, 135, 0, EAST, 0, false);

                case b.direction.NORTH_EAST:
                    return curve(obj, lastTrack, 360, 45, 0, NORTH, 270, false);

                case b.direction.SOUTH:
                    return curve(obj, lastTrack, 135, 180, 0, SOUTH_EAST, 45, false);

                case b.direction.SOUTH_WEST:
                    return curve(obj, lastTrack, 180, 225, 0, SOUTH, 90, false);

                case b.direction.NORTH_WEST:
                    return curve(obj, lastTrack, 270, 315, 0, WEST, 180, false);

                case b.direction.NORTH:
                    return curve(obj, lastTrack, 315, 360, 0, NORTH_WEST, 225, false);

                case b.direction.WEST:
                    return curve(obj, lastTrack, 225, 270, 0, SOUTH_WEST, 135, false);
            }
        }
    } catch (e) {
        alert(e)
    }

}
