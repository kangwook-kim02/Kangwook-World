import "./MusicPlayer.css";
import { useState, useRef, useEffect } from "react";

const MusicPlayer = () => {

    const [playing, setPlaying] = useState(false);
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


    // 음악 재생 버튼 기능
    const playMusic = () => {
        if (playing) { // 재생 --> 정지
            setPlaying(false);
            playerRef.current.pauseVideo();
        }
        else { // 정지 --> 재생
            setPlaying(true);
            playerRef.current.playVideo();
        }
    }

    // 음악 다사 듣기 버튼 기능
    const restartMusic = () => {
        if (!playerRef.current) return;
        // 재생 중 --> 처음부터
        if (playing) {
            playerRef.current.seekTo(0, true);
            playerRef.current.playVideo();
        }

    }

    return (
        <div className="Music">
            <div className="MusicName">
                <span className={`cd ${playing ? "spinning" : ""}`}>💿</span>
                {playing ? (
                    <marquee scrollamount="3">프리스타일 - Y (Please Tell Me Why)</marquee>
                ) : (
                    <div>프리스타일 - Y (Please Tell Me Why)</div>
                )}
            </div>
            <button onClick={playMusic}>{playing ? "⏸" : "▶"}</button>
            <button onClick={restartMusic}>■</button>
        </div>
    );
}

export default MusicPlayer;