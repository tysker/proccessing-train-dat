// Canvas measurements
import styled from "styled-components";

export const canvasWidth = 1200;
export const canvasHeight = 600;
// Curve measurements
export const curveWidth = 40;
export const curveHeight = 40;
// From rotateTrack
export let isToggle = false;
// From rotateStraightTrack
export let rotateCount = 0;


// Style
export const
    CanvasGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;
export const
    ButtonGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;