import React from "react";
import LoccIcon from "../images/marker.png";

function OtherInfoblock(props) {
    return (
        <div className="UnameCon">
            <img src={LoccIcon} alt="N" className="LoccIcon" />
            <p className="Locc">{props.loc}</p>
        </div>
    );
}

export default OtherInfoblock;
