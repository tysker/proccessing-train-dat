import React, {Component} from 'react';
import Drawing from "./controller/Drawing";
import './style/App.css'


class App extends Component {

    render() {
        return (
            <div>
                <Drawing add={this.state}/>
                <Drawing/>

            </div>
        );
    }
}
export default App;

