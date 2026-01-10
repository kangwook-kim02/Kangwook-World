import "./Home.css"
import { useEffect, useState } from "react";
import githubImage from "../images/github.png";
import bojImage from "../images/boj.png";
const Home = ({ onClickButton }) => {



    const [playing, setPlaying] = useState("▶");

    // Youtube API 가져오기
    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            window.player = new window.YT.Player("player", {
                height: "0",
                width: "0",
                videoId: "7Foj-iWij00",
                playerVars: {
                    autoplay: 0,
                    controls: 0
                }
            });
        };
    }, []);

    const playMusic = (e) => {
        if (e.target.value == "▶") {
            setPlaying("⏸")
            window.player.playVideo();
        }
        else {
            setPlaying("▶")
            window.player.pauseVideo();
        }
    }

    const restartMusic = () => {
        if (playing === "⏸") {
            window.player.seekTo(0, true);
            window.player.playVideo();
        }

    }


    return <div className="Home">
        <h2 className="Header">강욱 월드</h2>
        <div className="HomeOutline">
            <div id="player">
            </div>

            <div className="top">
                <div className="Music">
                    <div className="MusicName">
                        <span className={`cd ${playing === "⏸" ? "spinning" : ""}`}>💿</span>
                        {playing === "⏸" ? (
                            <marquee scrollamount="3">프리스타일 - Y (Please Tell Me Why)</marquee>
                        ) : (
                            <div>프리스타일 - Y (Please Tell Me Why)</div>
                        )}
                    </div>
                    <button onClick={playMusic} value={playing}>{playing}</button>
                    <button onClick={restartMusic}>■</button>
                </div>

                <div className="github">
                    <img src={githubImage} />
                    <div className="info">
                        <div className="name">GitHub</div>
                        <div className="handle"><a href="https://github.com/kangwook-kim02" target='_blank' rel="noopener noreferrer">@kangwook-kim02</a></div>
                    </div>
                </div>

                <div className="boj">
                    <img src={bojImage} />
                    <div className="info">
                        <div className="name">BaekJoon</div>
                        <div className="handle"><a href="https://solved.ac/profile/ices17" target='_blank' rel="noopener noreferrer">@ices17</a></div>
                    </div>
                    <div className="badge">G4</div>
                </div>

            </div>

            <div className="HomeMain">

            </div>
            <div className="NavBar">
                <button className="active" value={0}>Home</button>
                <button value={1} onClick={onClickButton}>Profile</button>
                <button value={2} onClick={onClickButton}>Project</button>
            </div>
        </div>
    </div>
}

export default Home;