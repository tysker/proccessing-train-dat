import React from "react";
import {cleanup} from '@testing-library/react';
import {curveAntiClockWise, curveClockWise} from '../models/Curve';
import {direction} from "../config/base";

let mockObj = {}
let railroadMap = [];

beforeEach(() => {
    railroadMap.length = 0;
    mockObj.id = 0;
    mockObj.clockwise = null;
    mockObj.x1 = 0;
    mockObj.y1 = 0;
    mockObj.x2 = 300;
    mockObj.y2 = 300;
    mockObj.curveX = 300;
    mockObj.curveY = 300;
    mockObj.startAngle = 0;
    mockObj.endAngle = 0;
    mockObj.trackType = "curve";
    mockObj.direction = "";
    mockObj.originalDirection = "";
    mockObj.OCX = 0;
    mockObj.OCY = 0;
    mockObj.OX2 = 0;
    mockObj.OY2 = 0;
    railroadMap = [mockObj]
});

afterEach(cleanup);


test('<Curve-true-east/>', () => {
    mockObj.direction = "east";
    mockObj.clockwise = true;
    railroadMap = [mockObj];
    const curve = curveClockWise(railroadMap, mockObj);
    //
    expect(curve.id).toBe(1);
    expect(curve.direction).toBe("south-east");
    expect(curve.clockwise).toBe(true);
    expect(curve.startAngle).toBe(270);
    expect(curve.endAngle).toBe(315);
    expect(curve.grader).toBe(45);
    // expect(curve.curveX).toBe();
    // expect(curve.curveY).toBe();
});

test('<Curve-false-east/>', () => {
    mockObj.direction = "east";
    mockObj.clockwise = false;
    railroadMap = [mockObj];
    const curve = curveAntiClockWise(railroadMap, mockObj);
    //
    expect(curve.id).toBe(1);
    expect(curve.direction).toBe("north-east");
    expect(curve.clockwise).toBe(false);
    expect(curve.startAngle).toBe(45);
    expect(curve.endAngle).toBe(90);
    expect(curve.grader).toBe(315);
    // expect(curve.curveX).toBe();
    // expect(curve.curveY).toBe();
});