// import React, {Component} from 'react';
// import P5 from 'p5';
// import styled from 'styled-components';
// import './style/App.css';
//
//
// var x = new Array(20);  // **change** float[] x = new float[20] to new Array(20)
// var y = new Array(20);  // **change** float[] y = new float[20] to new Array(20)
// var segLength = 18;
// export default class App extends Component {
//
//
//     canvas = (sketch) => {
//         function segment(x, y, a) {                 // **change** void segment() to function segment(), remove type declarations
//             sketch.push();                            		// pushMatrix() becomes push()
//             sketch.translate(x, y);                          // translate() is the same
//             sketch.rotate(a);                                // rotate() is the same
//             sketch.line(0, 0, segLength, 0);                 // line() is the same
//             sketch.pop();                              		// popMatrix() becomes pop()
//         }
//
//         function drawSegment(i, xin, yin) {         // **change** void drawSegment() to function drawSegment(), remove type declarations
//             var dx = xin - x[i];                      // **change** float to var
//             var dy = yin - y[i];                      // **change** float to var
//             var angle = sketch.atan2(dy, dx);                // **change** float to var, atan2() is the same
//             x[i] = xin - sketch.cos(angle) * segLength;      // cos() is the same
//             y[i] = yin - sketch.sin(angle) * segLength;      // sin() is the same
//             segment(x[i], y[i], angle);               // function calls are the same
//         }
//
//
//         sketch.setup = () => {
//             sketch.createCanvas(640, 360);                   // **change** size() to createCanvas()
//             sketch.strokeWeight(9);                          // strokeWeight() is the same
//             sketch.stroke(255, 100);                         // stroke() is the same
//             for (var i = 0; i < x.length; i++) {         // initialize the array
//                 x[i] = 0;
//                 y[i] = 0;
//             }
//         }
//
//         sketch.draw = () => {
//             sketch.background(0);                            // background() is the same
//             drawSegment(0, sketch.mouseX, sketch.mouseY);           // functions calls, mouseX and mouseY are the same
//             for (var i = 0; i < x.length - 1; i++) {         // **change** int i to var i
//                 drawSegment(i + 1, x[i], y[i]);           // function calls are the same
//             }
//         }
//     }
//
//     componentDidMount() {
//         let myp5 = new P5(this.canvas, document.getElementById('p5sketch'))
//         console.log(myp5)
//     }
//
//     render() {
//         return (
//             <div>
//                 <CanvasGrid id="p5sketch"/>
//                 <div>
//                     <button onClick={this.addTrack}>ADD</button>
//                 </div>
//             </div>
//         )
//
//     }
// }
//
// const CanvasGrid = styled.div`
//     display: grid;
//     padding: 1rem;
//     grid-template-columns: repeat(1, 1fr);
//     grid-row-gap: 1rem;
//     justify-items: center;
// `;
