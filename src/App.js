import React, {Component} from 'react';
import P5 from 'p5';
import styled from 'styled-components';
import './style/App.css';

const canvasWidth = 600;
const canvasHeight = 600;
const curveWidth = 25;
const curveHeight = 25;
let updatedRailroadMap = [];

export default class App extends Component {
    state = {
        railroadMap: [],
        trackObject:
            {
                id: 0,
                x1: 300,
                y1: 300,
                x2: 320,
                y2: 300,
                startAngle: 0,
                endAngle: 0,
                trackType: "",
                direction: ""
            },


    };


    // Returns the length of the railroad map -1
    lastTrack = () => this.state.railroadMap.length - 1;

    addCurveTrackObject = () => {
        const {railroadMap, trackObject} = this.state;
        let newTrackObject = Object.create(trackObject);

        try {
            // the first three lines are the same for if and else
            newTrackObject.id = railroadMap[this.lastTrack()].id + 1;
            newTrackObject.trackType = "curve";

            // it only works with direction "east"
            if (railroadMap[this.lastTrack()].trackType === "straight") {
                newTrackObject.startAngle = 270;
                newTrackObject.endAngle = 315;
                newTrackObject.x1 = railroadMap[this.lastTrack()].x2;
                newTrackObject.y1 = railroadMap[this.lastTrack()].y2 + 12.5;
                this.setState({railroadMap: [...railroadMap, newTrackObject]})
                console.log(newTrackObject)
            } else {
                if (railroadMap[this.lastTrack].endAngle === 360) {
                    newTrackObject.endAngle = 45;
                } else {
                    newTrackObject.endAngle = railroadMap[this.lastTrack()].endAngle + 45;
                }
                newTrackObject.startAngle = railroadMap[this.lastTrack()].startAngle;
                newTrackObject.x1 = railroadMap[this.lastTrack()].x1;
                newTrackObject.y1 = railroadMap[this.lastTrack()].y1;
                this.setState({railroadMap: [...railroadMap, newTrackObject]})
                console.log(newTrackObject)

            }

            console.log(railroadMap)
        } catch (e) {
            alert(e);
        }
    }
    // Gets the new updated version of the states railroadMap
    updatedRailroadMap = () => {
        updatedRailroadMap = [...this.state.railroadMap]
    }

    addStraitTrackObject = () => {
        const {railroadMap, trackObject} = this.state;
        this.updatedRailroadMap();
        try {
            let newTrackObject = Object.create(trackObject);

            if (railroadMap.length > 0) {
                newTrackObject.id = railroadMap[this.lastTrack()].id + 1;
                newTrackObject.x1 = railroadMap[this.lastTrack()].x2;
                newTrackObject.y1 = railroadMap[this.lastTrack()].y2;
                newTrackObject.x2 = railroadMap[this.lastTrack()].x2 + 20;
                newTrackObject.y2 = railroadMap[this.lastTrack()].y2;
                newTrackObject.startAngle = "";
                newTrackObject.direction = "";
                newTrackObject.endAngle = "";
                newTrackObject.trackType = "straight";
                updatedRailroadMap.push(newTrackObject);
                this.setState({railroadMap: [...updatedRailroadMap]})
                //this.setState({railroadMap: [...railroadMap, newTrackObject]})
            } else {
                updatedRailroadMap.push(newTrackObject);
                this.setState({railroadMap: [...updatedRailroadMap]})
                //this.setState({railroadMap: [...railroadMap, trackObject]})
            }
            console.log(updatedRailroadMap)
        } catch (e) {
            alert(e);

        }
    }

    deleteLastTrack = () => {
        const {railroadMap} = this.state;
        this.updatedRailroadMap();
        let lastId = railroadMap[railroadMap.length - 1].id;

        if (railroadMap.length > 1) {
            this.setState({railroadMap: [...railroadMap.filter((track) => track.id !== lastId)]})
        } else {
            alert("You reached the last track!")
        }
        console.log(railroadMap)
    }

    canvas = (s) => {

        s.setup = () => {
            s.createCanvas(canvasWidth, canvasHeight);
            // Antialiasing
            s.smooth();
            s.background(111);
            //s.strokeWeight(2);
            s.noFill();
            console.log(this.state.railroadMap)
        }

        s.draw = () => {
            const {railroadMap} = this.state;
            // s.line(300,300,350,300);
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(315));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(360));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(45));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(90));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(135));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(180));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(225));
            // s.arc(350,300+12.5,25,25, s.radians(270), s.radians(270));
            s.background(111);
            railroadMap.forEach(t => {
                switch (t.trackType) {
                    case "straight":
                        s.line(t.x1, t.y1, t.x2, t.y2)
                        break;
                    case "curve":
                        s.arc(t.x1, t.y1, curveWidth, curveHeight, s.radians(t.startAngle), s.radians(t.endAngle));
                        break;
                }
            })
            // this.state.railroadMap.map((t) => {
            //     switch (t.trackType) {
            //         case "straight":
            //             s.line(t.x1, t.y1, t.x2, t.y2)
            //             break;
            //         case "curve":
            //             s.arc(t.x1, t.y1, curveWidth, curveHeight, s.radians(t.startAngle), s.radians(t.endAngle));
            //             break;
            //     }
            // })
        }
    }


    componentDidMount() {
        try{
        let myP5 = new P5(this.canvas, document.getElementById('p5sketch'))
        console.log(myP5)

        }catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div>
                <CanvasGrid id="p5sketch"/>
                <button data-testid='add-track' onClick={this.addStraitTrackObject}>ADD TRACK</button>
                <button data-testid='add-curve' onClick={this.addCurveTrackObject}>ADD CURVE</button>
                <button data-testid='delete-track' onClick={this.deleteLastTrack}>DELETE</button>
            </div>
        )
    }
}

const CanvasGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;
