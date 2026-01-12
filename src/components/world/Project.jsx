import "./Project.css"
import PacRep from "./Project/PacRep";
import Example from "./Project/example";


const Project = ({ onClickButton }) => {
    return <div className="Project">
        <a href=""><h2 className="Header">강욱 월드</h2></a>
        <div className="ProjectOutline">
            <div className="ProjectList">
                <PacRep />
                <Example />
            </div>
            <div className="NavBar">
                <button value={0} onClick={onClickButton}>Home</button>
                <button value={1} onClick={onClickButton}>Profile</button>
                <button className="active" value={2}>Project</button>
            </div>
        </div>
    </div>
}

export default Project;