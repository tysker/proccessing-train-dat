import React, {Component} from 'react';
import Drawing from "./models/Drawing";
import './style/App.css'

class App extends Component {
    // state = {
    //     railroadMap: [],
    //     trackObject:
    //         {
    //             id: 0,
    //             startPoint: false,
    //             endPoint: false,
    //             x1: 300,
    //             y1: 300,
    //             x2: 320,
    //             y2: 300,
    //             curveX: 0,
    //             curveY: 0,
    //             startAngle: 0,
    //             endAngle: 0,
    //             trackType: "",
    //             direction: "east"
    //         },
    // };

    render() {
        return (
            <div>
               {/*<Drawing add={this.state}/>*/}
                <Drawing add={this.state}/>
            </div>
        );

    }
}

export default App;

