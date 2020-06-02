import React from 'react';
import {render, cleanup} from '@testing-library/react';
import UserController from "../controller/UserController";


afterEach(cleanup);

test('<GraphicController-Buttons/>', () => {
    const {getByTestId} = render(<UserController/>);
    console.error = jest.fn();
    console.log = jest.fn();

    const addTrackButton = getByTestId('add-straight');
    const addCurveButton = getByTestId('add-curve');
    const addDeleteButton = getByTestId('delete-track');
    const addRotateButton = getByTestId('rotate-track');

    // Asserts track-button is a button
    expect(addTrackButton.tagName).toBe('BUTTON');
    expect(addDeleteButton.tagName).toBe('BUTTON');
    expect(addCurveButton.tagName).toBe('BUTTON');
    expect(addRotateButton.tagName).toBe('BUTTON');
    // Asserts track-buttons text content
    expect(addTrackButton.textContent).toBe('ADD TRACK');
    expect(addCurveButton.textContent).toBe('ADD CURVE');
    expect(addDeleteButton.textContent).toBe('DELETE');
    expect(addRotateButton.textContent).toBe('ROTATE');
});


