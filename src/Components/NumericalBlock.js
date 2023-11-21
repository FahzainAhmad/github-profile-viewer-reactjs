import React from "react";

function NumericalBlock(props) {
    function KConverter(number) {
        if (number < 1000) {
            return number.toString();
        } else if (number < 1000000) {
            return (number / 1000).toFixed(1) + "k";
        } else {
            return (number / 1000000).toFixed(1) + "M";
        }
    }
    return (
        <>
            <div className="Numscon">
                <div className="Followcon">
                    <span className="Followcount">
                        {KConverter(props.followerscount)}
                    </span>
                    <span className="Followlabel">Followers</span>
                </div>
                <div className="Followcon">
                    <span className="Followcount">
                        {KConverter(props.followingcount)}
                    </span>
                    <span className="Followlabel">Followering</span>
                </div>
                <div className="Followcon">
                    <span className="Followcount">
                        {KConverter(props.publicrepos)}
                    </span>
                    <span className="Followlabel">Pub. Repos.</span>
                </div>
            </div>
        </>
    );
}

export default NumericalBlock;
