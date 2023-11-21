import React from "react";

function Extrainfoblock(props) {
    return (
        <div className="Extrainfocon">
            <div className="Extracon">
                <img src={props.emailsrc} alt="Email" className="Extraicon" />
                <p className="Extratext">{props.emailtext}</p>
            </div>
            <div className="Extracon">
                <img src={props.officesrc} alt="Email" className="Extraicon" />
                <p className="Extratext">{props.officetext}</p>
            </div>
            <div className="Extracon">
                <img
                    src={props.datejoinedsrc}
                    alt="Email"
                    className="Extraicon"
                />
                <p className="Extratext">{props.datejoinedtext}</p>
            </div>
        </div>
    );
}

export default Extrainfoblock;
