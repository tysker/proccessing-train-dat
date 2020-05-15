import React, {Component} from 'react';
import P5 from 'p5';
import styled from 'styled-components';
import './style/App.css';


export default class App extends Component {
    state = {
        val: 111
    }

    canvas = (sketch) => {
        let button;
        let slider;
        sketch.setup = () => {
            sketch.createCanvas(600, 600);
            sketch.background(111);
            //
            button = sketch.createButton("Click ME");
            button.mousePressed(changeBG);
            //
            slider = sketch.createSlider(0, 255, 127);
            slider.position(50, 50);
            slider.style('width', '80px');
            changeSD();
        }

        const changeSD = () => {
            //let val = slider.value();
            this.setState({val: slider.value()})
            sketch.background(this.state.val);
        }

        const changeBG = () => {
            sketch.background(this.state.val);
            this.setState({val: sketch.random(255)});
            console.log(this.state.val)
        }

        sketch.draw = () => {
            //changeSD();
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
