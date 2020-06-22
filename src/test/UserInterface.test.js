import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import UserInterface from "../view/UserInterface";

afterEach(cleanup);

test('<UserInterface-Buttons/>', () => {
    const {getByTestId, queryByTestId, getByText, debug} = render(<UserInterface/>);

    //debug();
    console.error = jest.fn();

    const trackButton = getByTestId('add-straight');
    const curveButton = getByTestId('add-drawCurve');
    const addDeleteButton = getByTestId('delete-track');
    const rotateButton = getByTestId('rotate-track');
    const canvasButton = getByTestId('reset-canvas');

    // Test if Test ID's are existing
    expect(queryByTestId('add-straight')).toBeTruthy();
    expect(queryByTestId('add-drawCurve')).toBeTruthy();
    expect(queryByTestId('delete-track')).toBeTruthy();
    expect(queryByTestId('rotate-track')).toBeTruthy();
    expect(queryByTestId('reset-canvas')).toBeTruthy();

    // Asserts track-button is a button
    expect(trackButton.tagName).toBe('BUTTON');
    expect(addDeleteButton.tagName).toBe('BUTTON');
    expect(curveButton.tagName).toBe('BUTTON');
    expect(rotateButton.tagName).toBe('BUTTON');
    expect(canvasButton.tagName).toBe('BUTTON');
    // Asserts track-buttons text content
    expect(trackButton.textContent).toBe('ADD TRACK');
    expect(curveButton.textContent).toBe('ADD CURVE');
    expect(addDeleteButton.textContent).toBe('DELETE');
    expect(rotateButton.textContent).toBe('ROTATE');
    expect(canvasButton.textContent).toBe('RESET');

});

// Snapshot test: creates a snapshot of the DOM
test('<UserInterface-Snapshot/>', () => {
    const {container} = render(<UserInterface/>);
    expect(container.firstChild).toMatchSnapshot();
});

// Test if the button event triggers the right function
test('<UserInterface-FireEvent/>', () => {
    const track = jest.fn();
    const leftClick = {button: 1}
    const {getByText} = render(<UserInterface
        addStraight={track}
        addCurve={track}
        deleteLastTrack={track}
        resetCanvas={track}
        rotateTrack={track}/>);

    fireEvent.click(getByText('ADD TRACK'), leftClick)

    fireEvent.click(getByText('ADD TRACK'));
    fireEvent.click(getByText('ADD CURVE'));
    fireEvent.click(getByText('DELETE'));
    fireEvent.click(getByText('ROTATE'));
    fireEvent.click(getByText('RESET'));
    expect(track).toHaveBeenCalledTimes(6);
})


