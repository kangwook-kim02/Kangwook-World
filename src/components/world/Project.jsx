import "./Project.css"

// projects
import PacRep from "./Project/PacRep";
import Example from "./Project/Example";
import NavBar from "../NavBar";


const Project = ({ onClickButton, pageState }) => {
    return <div className="Project">
        <a href=""><h2 className="Header">프로젝트</h2></a>
        <div className="ProjectOutline">
            <div className="ProjectList">
                <PacRep />
                <Example />
            </div>
            <NavBar onClickButton={onClickButton} pageState={pageState} />
        </div>
    </div>
}

export default Project;