import React, { Component } from 'react';
<<<<<<< HEAD
import P5Wrapper from 'react-p5-wrapper';
import sketch from './components/Sketch';
import './style/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
    )
  }

  render() {
    return (
        <div>
          <button onClick={this.randomColor}>Random Color</button>
          <P5Wrapper sketch={sketch} color={this.state.color}></P5Wrapper>
        </div>
    );
  }
=======
import './style/App.css';

class App extends Component {

    render() {
        return (
            <div>
                Hallo
            </div>
        );
    }
>>>>>>> d95b1461ca93dc01952f4a8642072bc46d78b3c9
}

export default App;