import React, { Component } from 'react';
import styled from 'styled-components';
import P5 from 'p5';
import { s } from "./components/Drawing";
import './style/App.css';

/*
Refs are created using React.createRef() and attached to React elements via the ref attribute.
Refs are commonly assigned to an instance property when a component is constructed so they can
be referenced throughout the component.
*/
class App extends Component {
    constructor(props) {
        super(props);
       // this.myRef = React.createRef();
        console.log("Hello from the constructor:  ")
    }

    componentDidMount() {
        //this.myP5 = new P5(s, this.myRef.current);
        let myp5 = new P5(s, document.getElementById('p5sketch'))
        console.log("Hallo from DidMount:  ")
        console.log(myp5);
    }

    render() {
        console.log("Hallo from render():  ")
        return (
            <CanvasGrid id="p5sketch" ref={this.myRef}>

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
    justify-items: center;
`;