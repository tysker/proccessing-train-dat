// import React, {Component} from 'react';
// import {ButtonGrid, CanvasGrid, canvasHeight, canvasWidth} from "../models/Constants";
// import P5 from "p5";
//
// class Canvas extends Component {
//     canvas = (s) => {
//
//         s.setup = () => {
//             const {railroadMap, trackObject} = this.state;
//             this.setState({railroadMap: [...railroadMap, trackObject]})
//
//             // 1. Create Canvas
//             s.createCanvas(canvasWidth, canvasHeight);
//             // 2. Draw Settings
//             s.smooth();
//             s.background(111);
//             s.strokeWeight(4);
//             //s.noFill();
//         }
//
//         s.draw = () => {
//             // 1. Draw railroad map in the canvas
//             this.drawRailroadMap(s);
//         }
//     }
//
//     componentDidMount() {
//         try {
//             let myP5 = new P5(this.canvas, document.getElementById('p5sketch'))
//             console.log(myP5)
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//     render() {
//         console.log(this.state.railroadMap)
//         return (
//             <div>
//                 <CanvasGrid id="p5sketch"/>
//                 <ButtonGrid>
//                     <button data-testid='add-straight' onClick={this.addStraight}>ADD TRACK</button>
//                     <button data-testid='add-curve' onClick={this.addCurve}>ADD CURVE</button>
//                     <button data-testid='rotate-track' onClick={this.rotateTrack}>ROTATE</button>
//                     <button data-testid='delete-track' onClick={this.deleteLastTrack}>DELETE</button>
//                 </ButtonGrid>
//             </div>
//         )
//     }
// }
//
// export default Canvas;