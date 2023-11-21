import React from "react";
import UnameIcon from "../images/name.png";

function Usernameblock(props) {
    return (
        <div className="UnameCon">
            <img src={UnameIcon} alt="ID" className="UnameIcon" />
            <p className="Uname">{props.username}</p>
        </div>
    );
}

export default Usernameblock;
