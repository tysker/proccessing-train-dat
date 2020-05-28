import React, {Component} from 'react';
import Drawing from "./models/Drawing";
import './style/App.css'


class App extends Component {

    render() {
        return (
            <div>
                <Drawing add={this.state}/>
            </div>
        );
    }
}

export default App;

