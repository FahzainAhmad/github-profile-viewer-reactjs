import React from "react";
import Usernameblock from "./Usernameblock";
import OtherInfoblock from "./OtherInfoblock";

function ProfileInfoBlock(props) {
    return (
        <>
            <div className="PIBlock">
                <div className="MainDetails">
                    <img
                        src={props.avatar_url}
                        className="Useravatar"
                        alt="Avatar"
                    />
                    <div className="Details">
                        <Usernameblock username={props.name} />
                        <OtherInfoblock loc={props.loc} />
                    </div>
                </div>
            </div>
            <a href={props.acclink}>
                <button className="Gotoprofile">
                    <span>Go To Profile!</span>
                </button>
            </a>
        </>
    );
}

export default ProfileInfoBlock;
