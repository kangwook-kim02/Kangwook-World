import "./Card.css";

// Image
import githubImage from "../../images/github.png";
import bojImage from "../../images/boj.png";

const Card = () => {
    return (
        <div className="card">
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
    );
}

export default Card;