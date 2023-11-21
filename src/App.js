import "./App.css";
import { useState } from "react";
import Bioblock from "./Components/Bioblock";
import Extrainfoblock from "./Components/Extrainfoblock";
import NumbericalBlock from "./Components/NumericalBlock";
import ProfileInfoBlock from "./Components/ProfileInfoBlock";
import UsernameSearchBar from "./Components/UsernameSearchBar";
import ReposandStars from "./Components/ReposandStars";
import EmailIcon from "./images/envelope.png";
import DateJIcon from "./images/calendar.png";
import OfficeIcon from "./images/city.png";

function App() {
    const [searchquery, setSearchQ] = useState("FahzainAhmad");
    const [existflag, setexistflag] = useState(true);
    const fetchRateLimit = () => {
        fetch(`https://api.github.com/rate_limit`)
            .then((response) => {
                // Check if the response headers contain rate limit information
                const rateLimit = response.headers.get("X-RateLimit-Limit");
                const remainingRequests = response.headers.get(
                    "X-RateLimit-Remaining"
                );
                const resetTime = response.headers.get("X-RateLimit-Reset");

                console.log(
                    `In case you wanna check the Rate limit: ${rateLimit}`
                );
                console.log(
                    `In case you wanna check the Remaining Requests: ${remainingRequests}`
                );
                console.log(
                    `In case you wanna check the Reset Time: ${new Date(
                        resetTime * 1000
                    )}`
                );
            })
            .catch((error) => {
                console.error("Error fetching rate limit:", error);
            });
    };

    // Call the function to fetch rate limit information
    fetchRateLimit();

    const AcceptSearch = (SQ) => {
        fetch(`https://api.github.com/users/${SQ}`)
            .then((response) => {
                if (response.status === 200) {
                    setSearchQ(SQ);
                    setexistflag(true);
                } else if (response.status === 404) {
                    setexistflag(false);
                } else {
                    console.log(`Unexpected response: ${response.status}`);
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    const [username, setUsername] = useState("Loading...");
    const [userloc, setLoc] = useState("Loading...");
    const [useravapic, setavapic] = useState("Avatar");
    const [userfollowers, setfollowers] = useState("🔃");
    const [userfollowings, setfollowings] = useState("🔃");
    const [userpublicrepos, setpublicrepos] = useState("🔃");
    const [userbio, setbio] = useState("Loading...");
    const [useremail, setemail] = useState("Loading...");
    const [usercompany, setcompany] = useState("Loading...");
    const [usercreatedate, setcreatedate] = useState("Loading...");
    const [useracclink, setacclink] = useState("Loading...");
    const [userrepos, setrepos] = useState([]);
    const [userstarredrepos, setstarredrepos] = useState([]);

    fetch(`https://api.github.com/users/${searchquery}`)
        .then((response) => {
            if (response.status === 404) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then((data) => {
            setUsername(data.name);
            setLoc(data.location);
            setfollowers(data.followers);
            setfollowings(data.following);
            setpublicrepos(data.public_repos);
            setavapic(data.avatar_url);
            setbio(data.bio);
            setacclink(data.html_url);
            const dateObject = new Date(data.created_at);
            const justDate = dateObject.toISOString().split("T")[0];
            setcreatedate(justDate);
            setemail(data.email == null ? "N/A" : data.email);
            setcompany(data.company == null ? "N/A" : data.company);
            setemail(data.email == null ? "N/A" : data.email);
        })
        .catch((error) => {
            if (error.message === "User not found") {
            } else {
                console.error("Error:", error);
            }
            if (
                error.message.toLowerCase().includes("api rate limit exceeded")
            ) {
                console.log("API limit exceeded");
            }
        });
    fetch(`https://api.github.com/users/${searchquery}/repos`)
        .then((response) => response.json())
        .then((reposData) => {
            setrepos(reposData);
        })
        .catch((error) => console.error("Error fetching repositories:", error));

    fetch(`https://api.github.com/users/${searchquery}/starred`)
        .then((response) => response.json())
        .then((reposData) => {
            setstarredrepos(reposData);
        })
        .catch((error) => console.error("Error fetching repositories:", error));

    return (
        <div className="App">
            <UsernameSearchBar
                SQfunction={AcceptSearch}
                UserExist={existflag}
            />
            if()
            <ProfileInfoBlock
                name={username}
                loc={userloc}
                avatar_url={useravapic}
                acclink={useracclink}
            />
            <NumbericalBlock
                followerscount={userfollowers}
                followingcount={userfollowings}
                publicrepos={userpublicrepos}
            />
            <Bioblock bio={userbio} />
            <Extrainfoblock
                emailsrc={EmailIcon}
                emailtext={useremail}
                datejoinedsrc={DateJIcon}
                datejoinedtext={usercreatedate}
                officesrc={OfficeIcon}
                officetext={usercompany}
            />
            <ReposandStars
                className="RepsStar"
                repodata={userrepos}
                starredrepos={userstarredrepos}
            />
        </div>
    );
}

export default App;
