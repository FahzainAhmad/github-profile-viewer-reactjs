import React from "react";
import Sharedcon from "./Sharedcon";
import Repocon from "./Repocon";

function ReposandStars(props) {
    return (
        <div className="RepsStarcon">
            <div className="RSBtns">
                <a href="#Repos">
                    <button className="RSBtnclass">
                        Repos ({props.repodata.length})
                    </button>
                </a>
                <a href="#Shared">
                    <button className="RSBtnclass">
                        Starred ({props.starredrepos.length})
                    </button>
                </a>
            </div>
            if(props.setstarredrepos.length != 0 && props.repodata.length != 0)
            <div className="RepoMain">
                <div className="Repos" id="Repos">
                    <p className="SR">Public Repositories</p>
                    {props.repodata.map((repo) => (
                        <Repocon
                            reponame={repo.name}
                            reposize={repo.size}
                            repowatch={repo.watchers_count}
                            repofork={repo.forks_count}
                            repourl={repo.html_url}
                            repodownload={repo.clone_url}
                            repolic={
                                repo.license ? repo.license.spdx_id : "None"
                            }
                        />
                    ))}
                </div>
                <div className="Shared" id="Shared">
                    <p className="SR">Starred Repositories</p>
                    {props.starredrepos.map((repo) => (
                        <Sharedcon
                            reponame={repo.name}
                            reposize={repo.size}
                            repowatch={repo.watchers_count}
                            repofork={repo.forks_count}
                            repourl={repo.html_url}
                            repodownload={repo.clone_url}
                            repolic={
                                repo.license ? repo.license.spdx_id : "None"
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReposandStars;
