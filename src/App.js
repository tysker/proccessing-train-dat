import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/sketch';
import './style/App.css';

class App extends Component {
        state = {
            color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
            straightTrack: ['a']
        }





    render() {
        const randomColor = () => {
            this.setState({color: [Math.random() * 255, Math.random() * 255, Math.random() * 255]}
            )
        }
        const straightTrack = () => {
            this.setState(state => {
                const straightTrack = state.straightTrack.push('straight');

                return{
                    straightTrack
                };
            });
        };
        return (
            <div>
                <button onClick={straightTrack}>Add Straight Track</button>
                <button onClick={randomColor}>Random Color</button>
                <P5Wrapper sketch={sketch} props={this.state}></P5Wrapper>
            </div>
        );
    }
}
export default App;