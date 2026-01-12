import "./SideBar.css";
import profileImage from "./images/profileImage.png";
import CppIcon from "./icons/cplusplus.svg?react";
import PythonIcon from "./icons/python.svg?react";
import JavaScriptIcon from "./icons/javascript.svg?react";
import ReactIcon from "./icons/react.svg?react";
import { useState } from "react";

const SideBar = () => {

    const [cppText, setCppText] = useState("C++");
    const [pythonText, setPythonText] = useState("Python");
    const [jsText, setJsText] = useState("JavaScript");
    const [reactText, setReactText] = useState("React");

    // 기술(Skill) 안으로 마우스가 들어왔을 때 이벤트 처리 함수
    const onMouseOverText = (e) => {
        let skill = e.currentTarget.dataset.skill;
        switch (skill) {
            case "cpp":
                setCppText("★★★★★");
                return;
            case "python":
                setPythonText("★★★☆☆");
                return;
            case "javaScript":
                setJsText("★★★★☆");
                return;
            case "react":
                setReactText("★★★★☆");
                return;
            default:
        }
    }

    // 기술(SKill) 밖으로 마우스가 나갔을 때 이벤트 처리 함수
    const onMouseOutText = (e) => {
        let skill = e.currentTarget.dataset.skill;
        switch (skill) {
            case "cpp":
                setCppText("C++");
                return;
            case "python":
                setPythonText("Python");
                return;
            case "javaScript":
                setJsText("JavaScript");
                return;
            case "react":
                setReactText("React");
                return;
            default:
        }
    }

    return <div className="SideBar">
        <a href=""><h2 className="Header">강욱월드</h2></a>
        <div className="ProfileOutline">
            <div className="ProfileInline">
                <div className="ImageBox">
                    <a href=""><img src={profileImage} alt="" /></a>
                </div>
                <div className="Divider"></div>
                <div className="Introduce">
                    안녕하세요. 개발자 김강욱입니다.
                    깊이 있는 학습을 기반으로 성장하는 개발자가 되겠습니다.
                </div>

                <div className="Divider"></div>

                <h4 className="SkillTitle">⚙️ Skills</h4>
                <div className="SkillList">
                    <div className="Skill" data-skill="cpp" onMouseOver={onMouseOverText} onMouseOut={onMouseOutText}>
                        <CppIcon className="CplusplusIcon" /> <span className="CplusplusText">{cppText}</span>
                    </div>
                    <div className="Skill" data-skill="python" onMouseOver={onMouseOverText} onMouseOut={onMouseOutText}>
                        <PythonIcon className="PythonIcon" /> <span className="PythonText">{pythonText}</span>
                    </div>
                    <div className="Skill" data-skill="javaScript" onMouseOver={onMouseOverText} onMouseOut={onMouseOutText}>
                        <JavaScriptIcon className="JavaScriptIcon" /> <span className="JavaScriptText">{jsText}</span>
                    </div>
                    <div className="Skill" data-skill="react" onMouseOver={onMouseOverText} onMouseOut={onMouseOutText}>
                        <ReactIcon className="ReactIcon" /> <span className="ReactText">{reactText}</span>
                    </div>
                </div>

                <div className="Divider"></div>

                <div className="Info">
                    <div className="Name"><a href="https://github.com/kangwook-kim02" target='_blank' rel="noopener noreferrer">👤 김강욱</a></div>
                    <div className="University"><a href="https://cse.inha.ac.kr/cse/index.do" target='_blank' rel="noopener noreferrer">🎓 인하대학교 컴퓨터공학과</a></div>
                    <div className="Email"><a href="mailto:ices17@inha.edu" target='_blank' rel="noopener noreferrer">✉️ ices17@inha.edu</a></div>
                </div>

            </div>
        </div>
    </div >
}

export default SideBar;