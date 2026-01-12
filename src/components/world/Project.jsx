import "./Project.css"
import PacRep from "./Project/PacRep";
import Example from "./Project/example";


const Project = ({ onClickButton }) => {
    return <div className="Project">
        <a href=""><h2 className="Header">프로젝트</h2></a>
        <div className="ProjectOutline">
            <div className="ProjectList">
                <PacRep />
                <Example />
            </div>
            <div className="NavBar">
                <button value={0} onClick={onClickButton}>홈</button>
                <button value={1} onClick={onClickButton}>프로필</button>
                <button className="active" value={2}>프로젝트</button>
            </div>
        </div>
    </div>
}

export default Project;