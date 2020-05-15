import React, { Component } from 'react';
import P5 from 'p5';
import styled from 'styled-components';
import './style/App.css';

const railTrack = {
    id: 1,
    trackType: "Straight",
    direction: "South",
    x: 200,
    y: 200
}
let trackMap = [];
trackMap.push(railTrack);
let sideX = 10;
let sideY = 20;
let lastRailInTrackMap = trackMap.length - 1;
let newX = 0;
let newY = 0;
class App extends Component {

    addStraightTrack = (event) => {
        switch(trackMap[lastRailInTrackMap].direction){
            case 'East':
                newX = trackMap[lastRailInTrackMap].x + 20;
                newY = trackMap[lastRailInTrackMap].y;
                break;

            case 'South':
                newX = trackMap[lastRailInTrackMap].x;
                newY = trackMap[lastRailInTrackMap].y+20;
                break;

            case 'West':
                newX = trackMap[lastRailInTrackMap].x-20;
                newY = trackMap[lastRailInTrackMap].y;
                break;

            case 'North':
                newX = trackMap[lastRailInTrackMap].x;
                newY = trackMap[lastRailInTrackMap].y-20;
                break;
        }
        railTrack.x = newX;
        railTrack.y = newY;
        railTrack.id = trackMap[lastRailInTrackMap].id + 1
        railTrack.direction = trackMap[lastRailInTrackMap].direction
        railTrack.trackType = "Straight"
        trackMap.push(railTrack);
        trackMap.map(t => {
            return console.log(t.direction)
        })

    }

    straitTrack = (sketch) => {
        sketch.stroke(250);
        sketch.fill(80);
        sketch.rect(10, 100, 50, 50);
    }

    clicked = (sketch) => {
        const d = sketch.dist(sketch.mouseX, sketch.mouseY, 10, 100);
        if (d < 50) {
            sketch.fill(200);
        }
    }
    canvas = (sketch) => {

        sketch.setup = () => {
            sketch.createCanvas(1500, 600);
            sketch.background(111);
        }

        sketch.mousePressed = (event) => {
            this.clicked(sketch);
        }

        sketch.draw = () => {
            for (let i = 0; i < trackMap.length; i++) {
                switch (trackMap[i].direction) {
                    case 'East':
                        sideX = 20;
                        sideY = 10;
                        break;

                    case 'South':
                        sideX = 10;
                        sideY = 20;
                        break;

                    case 'West':
                        sideX = -20;
                        sideY = 10;
                        break;

                    case 'North':
                        sideX = 10;
                        sideY = -20;
                        break;
                }

                sketch.rect(trackMap[i].x, trackMap[i].y, sideX, sideY);
            }
        }
    }
        componentDidMount()
        {
            let myp5 = new P5(this.canvas, document.getElementById('p5sketch'))
            console.log(myp5)
        }

        render()
        {
            return (
                <div>
                    <CanvasGrid id="p5sketch"/>
                    <div>
                        <button onClick={this.addStraightTrack}>ADD Straight</button>
                    </div>
                </div>
            )

        }
    }

export default App;

const CanvasGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;
