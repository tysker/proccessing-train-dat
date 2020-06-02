import React from "react";
import {render, cleanup} from '@testing-library/react';
import {curve, curveClockWise, curveAntiClockWise} from '../models/Curve';

const mockObj =
    {
        id: 0,
        clockwise: true,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        curveX: 300,
        curveY: 300,
        startAngle: 0,
        endAngle: 0,
        trackType: "",
        direction: "east",
        originalDirection: "",
        OCX: 0,
        OCY: 0,
        OX2: 0,
        OY2: 0,
        grader: 0,
    };

const obj = Object.create(mockObj);
const railroadMap = [mockObj];

afterEach(cleanup);


test('<Curve/>', () => {


const curve = curveClockWise(railroadMap, obj);
    console.log(railroadMap)
    console.log(curve.id)


});