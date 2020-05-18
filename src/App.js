import React, {Component} from 'react';
import P5 from 'p5';
import styled from 'styled-components';
import './style/App.css';

const canvasWidth = 600;
const canvasHeight = 600;


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
                direction: "",
                trackType: ""
            }
    };

    addStraitTrackObject = () => {
        const {railroadMap, trackObject} = this.state;
        try {
            let newTrackObject = Object.create(trackObject);

            if (railroadMap.length > 0) {
                let lastTrack = railroadMap.length - 1;
                newTrackObject.id = railroadMap[lastTrack].id + 1;
                newTrackObject.x1 = railroadMap[lastTrack].x2;
                newTrackObject.y1 = railroadMap[lastTrack].y2;
                newTrackObject.x2 = railroadMap[lastTrack].x2 + 20;
                newTrackObject.y2 = railroadMap[lastTrack].y2;
                newTrackObject.direction = "";
                newTrackObject.trackType = "straight";
                this.setState({railroadMap: [...railroadMap, newTrackObject]})
            } else {
                this.setState({railroadMap: [...railroadMap, trackObject]})

            }
            console.log(this.state.railroadMap)
        } catch (e) {
            alert(e);
        }
    }
    deleteLastTrack = () => {
        const {railroadMap} = this.state;
        let lastId = railroadMap[railroadMap.length - 1].id;
        this.setState({railroadMap: [...railroadMap.filter((track) => track.id !== lastId)]})
        console.log(railroadMap)

    }

    canvas = (s) => {

        s.setup = () => {
            s.createCanvas(canvasWidth, canvasHeight);
            s.background(111);
        }


        s.draw = () => {
            s.background(111);
            this.state.railroadMap.map((t) => {
                switch (t.trackType) {
                    case "straight":
                        s.line(t.x1, t.y1, t.x2, t.y2)
                        break;
                }
            })
        }
    }

    componentDidMount() {
        let myp5 = new P5(this.canvas, document.getElementById('p5sketch'))
        console.log(myp5)
    }

    render() {
        return (
            <div>
                <CanvasGrid id="p5sketch"/>
                <button onClick={this.addStraitTrackObject}>ADD TRACK</button>
                <button onClick={this.deleteLastTrack}>DELETE</button>
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
