
// Canvas measurements
export const canvasWidth = 1200;
export const canvasHeight = 600;
// Curve measurements
export const curveWidth = 40;
export const curveHeight = 40;


// Returns the length of the railroad map -1
export const lengthOfRailMap = (rm) => rm.length - 1;
// Calculates x and y coordinates for the last pixel of each curve section
export const xPointCurve = (cx, r, angle) => cx + r * Math.cos(angle * Math.PI / 180);
export const yPointCurve = (cy, r, angle) => cy + r * Math.sin(angle * Math.PI / 180);

// To set the direction for each rotation
export const compass = ["south-east","south","south-west","west","north-west","north", "north-east","east"];

