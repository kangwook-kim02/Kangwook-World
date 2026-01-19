import "./Home.css";
import "./World.css";
import NavBar from "../NavBar";
import { useEffect, useState, useRef } from "react";

// Image
import githubImage from "../images/github.png";
import bojImage from "../images/boj.png";
import csImage from "../images/cs.png";
import fullstackImage from "../images/fullstack.png";

const Home = ({ onClickButton, pageState }) => {



    const [playing, setPlaying] = useState("▶");
    const playerRef = useRef(null);
    // Youtube API 가져오기
    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("player", {
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
        if (e.target.value === "▶") {
            setPlaying("⏸")
            playerRef.current.playVideo();
        }
        else {
            setPlaying("▶")
            playerRef.current.pauseVideo();
        }
    }

    const restartMusic = () => {
        if (!playerRef.current) return;
        if (playing === "⏸") {
            playerRef.current.seekTo(0, true);
            playerRef.current.playVideo();
        }

    }


    return <div className="Home">
        <a href=""><h2 className="Header">홈</h2></a>
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
                <div className="Inline">
                    <div className="Top">
                        <h3>핵심 역량</h3>
                    </div>
                    <div className="bottom">
                        <div className="computerScience">
                            <img className="csImage" src={csImage} alt="csImage" />
                            <p style={{ marginBottom: 5, fontSize: "18px", fontWeight: "600", color: "black" }}>깊이 있는 전공지식</p>
                            <p>컴퓨터공학과 전공을 하면서 자료구조, OS, DB, 컴퓨터 네트워크, 알고리즘 등 깊이 있는 CS 지식을 학습하였습니다.</p>
                        </div>
                        <div className="fullstack">
                            <img className="fsImage" src={fullstackImage} alt="fullstackImage" />
                            <p style={{ marginBottom: 5, fontSize: "18px", fontWeight: "600", color: "black" }}>풀스택 개발</p>
                            <p>Spring을 이용한 백엔드 개발경험이 있으며, 현재는 프론트엔드를 집중해서 학습하고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar onClickButton={onClickButton} pageState={pageState} />
        </div>
    </div>
}

export default Home;