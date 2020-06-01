import {cleanup} from "@testing-library/react";
import * as b from "../config/base";
import React from "react";

afterEach(cleanup);

// Test result should be the correct length of an array
test('<base-lengthOfRailroadMap/>', () => {
    const railroadMap = [1,2,3,4,5,6,7];
    expect(b.lengthOfRailMap(railroadMap)).toBe(6);
});

/**
 * Test result should show the x coordinates of a point on a circles circumference,
 * with the help of the circles centre, radius and angle.
 */
test('<base-xPointCurve/>', () => {
    const centre = 300;
    const radius = 20;
    expect(b.xPointCurve(centre, radius, 180)).toBe(280);
    expect(b.xPointCurve(centre, radius, 360)).toBe(320);
})

/**
 * Test result should show the y coordinates of a point on a circles circumference,
 * with the help of the circles centre, radius and angle.
 */
test('<base-yPointCurve/>', () => {
    const centre = 300;
    const radius = 20;
    expect(b.yPointCurve(centre, radius, 180)).toBe(300);
    expect(b.yPointCurve(centre, radius, 360)).toBe(300);
});

/**
 * Test if the compass array with the 8 cardinal points
 * matches with the testCompass array
 */
test('<base-compass/>' , () => {
    const testCompass = ["south-east","south","south-west","west","north-west","north", "north-east","east"];
    testCompass.forEach((value,index) => {
        expect(b.compass[index]).toBe(value);
    });
});

/**
 * Test if all constants measurements matching from base.js
 */
test('<base-const/>', () => {
    expect(b.canvasHeight).toBe(600);
    expect(b.canvasWidth).toBe(1200);
    expect(b.curveWidth).toBe(40);
    expect(b.curveHeight).toBe(40);
})
