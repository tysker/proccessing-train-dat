import React from 'react';

const InfoTrack = ({railroadArray}) => {
    const infoStyle ={
        width: "200px",
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
        fontFamily: "Arial"
    }

    return (
        <div style={infoStyle}>
            <h3>{railroadArray.length > 0 ? `ID: ${railroadArray[railroadArray.length-1].id }`: "ID: "}</h3>
            <p>{railroadArray.length > 0 ? `Start angle: ${railroadArray[railroadArray.length-1].startAngle }`: "Start angle: "}</p>
            <p>{railroadArray.length > 0 ? `End angle: ${railroadArray[railroadArray.length-1].endAngle }`: "End angle: "}</p>
            <p>{railroadArray.length > 0 ? `Track type: ${railroadArray[railroadArray.length-1].trackType }`: "Track type: "}</p>
            <p>{railroadArray.length > 0 ? `Direction: ${railroadArray[railroadArray.length-1].direction }`: "Direction: "}</p>
            <p>{railroadArray.length > 0 ? `Grader: ${railroadArray[railroadArray.length-1].grader }`: "Grader: "}</p>
        </div>
    );
};

export default InfoTrack;
