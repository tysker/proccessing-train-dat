import React, { Component } from 'react';
import styled from 'styled-components';
import p5 from 'p5';
import './style/App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        let x = 10;
        let y = 20;

        p.setup = () => {
            p.createCanvas(1000,600);
        }

        p.draw = () => {
            p.background(210);
            p.fill(0);
            p.rect(x,y,10,50);
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <CanvasGrid ref={this.myRef}>

            </CanvasGrid>
        )
    }
}

export default App;

const CanvasGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
`;