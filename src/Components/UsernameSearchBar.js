import React from "react";
import { useState } from "react";

function UsernameSearchBar({ SQfunction, UserExist }) {
    const [username, setUsername] = useState("");
    const takeSQ = () => {
        SQfunction(username);
    };

    return (
        <>
            <div className="SBCon">
                <input
                    type="text"
                    name="username"
                    className="SBar"
                    style={{
                        border: UserExist
                            ? "3px solid #23a7f2"
                            : "3px solid red",
                    }}
                    placeholder="Search Username Here!"
                    onChange={(e) => setUsername(e.target.value)}
                    id="searchbar"
                />
                <input
                    type="button"
                    value="Go!"
                    className="SButton"
                    onClick={takeSQ}
                />
            </div>
        </>
    );
}

export default UsernameSearchBar;
