import React from "react";
import Repository from "../images/folder-open.png";

function Sharedcon(props) {
    return (
        <div className="Repolist">
            <div className="Repohead">
                <img src={Repository} className="Repoicon" alt="Repoicon" />
                <p className="Repotitle">{props.reponame}</p>
            </div>
            <div className="width-full">
                <p className="margin-none">License : {props.repolic}</p>
            </div>
            <div className="Detailrow">
                <div className="Detailcomponent">
                    <span className="Details">Size</span>
                    <span className="Details">{props.reposize}</span>
                </div>
                <div className="Detailcomponent">
                    <span className="Details">Watchers</span>
                    <span className="Details">{props.repowatch}</span>
                </div>
                <div className="Detailcomponent">
                    <span className="Details">Forks</span>
                    <span className="Details">{props.repofork}</span>
                </div>
            </div>
            <a href={props.repourl}>
                <button className="Gotorepo">Go To Repository</button>
            </a>
            <a href={props.repodownload}>
                <button className="downrepo">Clone</button>
            </a>
        </div>
    );
}

export default Sharedcon;
