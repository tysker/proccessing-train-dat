import React from 'react';


const UserInterface = ({addStraight, addCurve, rotateTrack, deleteLastTrack, resetCanvas}) => {
    return (
        <div>
            <div>
                <button data-testid='add-straight' className="btn" onClick={addStraight}>ADD TRACK</button>
                <button data-testid='add-drawCurve' className="btn" onClick={addCurve}>ADD CURVE</button>
                <button data-testid='rotate-track' className="btn" onClick={rotateTrack}>ROTATE</button>
                <button data-testid='delete-track' className="btn" onClick={deleteLastTrack}>DELETE</button>
                <button data-testid='reset-canvas' className="btn" onClick={resetCanvas}>RESET</button>
            </div>
        </div>
    );
};

export default UserInterface;

