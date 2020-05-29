import {cleanup} from "@testing-library/react";
import {lengthOfRailMap, xPointCurve, yPointCurve} from "../models/base";
import React from "react";

afterEach(cleanup);

test('<Setup/>', () => {
    const railroadMap = [1,2,3,4,5,6,7];
    expect(lengthOfRailMap(railroadMap)).toBe(6);
});

