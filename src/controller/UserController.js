import React from 'react';
import styled from "styled-components";

const UserController = ({addStraight, addCurve, rotateTrack, deleteLastTrack}) => {
    return (
        <div>
            <ButtonGrid>
                <button data-testid='add-straight' className="btn" onClick={addStraight}>ADD TRACK</button>
                <button data-testid='add-curve' className="btn" onClick={addCurve}>ADD CURVE</button>
                <button data-testid='rotate-track' className="btn" onClick={rotateTrack}>ROTATE</button>
                <button data-testid='delete-track' className="btn" onClick={deleteLastTrack}>DELETE</button>
            </ButtonGrid>
        </div>
    );
};

export default UserController;

// Style
const
    ButtonGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
    justify-items: center;
`;