import React from "react";

function Bioblock(props) {
    return (
        <div className="PIBlock">
            <p className="Biotext">{props.bio}</p>
        </div>
    );
}

export default Bioblock;
