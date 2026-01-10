import "./SideBar.css";
import profileImage from "./images/profileImage.png";
import CppIcon from "./icons/cplusplus.svg?react";
import PythonIcon from "./icons/python.svg?react";
import JavaScriptIcon from "./icons/javascript.svg?react";
import ReactIcon from "./icons/react.svg?react";

const SideBar = () => {
    return <div className="SideBar">
        <h2 className="Header">김강욱님의 미니홈피</h2>
        <div className="ProfileOutline">
            <div className="ProfileInline">
                <div className="ImageBox">
                    <img src={profileImage} alt="" />
                </div>
                <div className="Divider"></div>
                <div className="Introduce">
                    안녕하세요. 개발자 김강욱입니다.
                    깊이 있는 학습을 기반으로 성장하는 개발자가 되겠습니다.
                </div>

                <div className="Divider"></div>

                <h4 className="SkillTitle">⚙️ Skills</h4>
                <div className="SkillList">
                    <div className="Skill">
                        <CppIcon className="CplusplusIcon" /> <span className="CplusplusText">C++</span>
                    </div>
                    <div className="Skill">
                        <PythonIcon className="PythonIcon" /> <span className="PythonText">Python</span>
                    </div>
                    <div className="Skill">
                        <JavaScriptIcon className="JavaScriptIcon" /> <span className="JavaScriptText">JavaScript</span>
                    </div>
                    <div className="Skill">
                        <ReactIcon className="ReactIcon" /> <span className="ReactText">React</span>
                    </div>
                </div>

                <div className="Divider"></div>

                <div className="Info">
                    <div className="Name"><a href="https://github.com/kangwook-kim02" target='_blank'>👤 김강욱</a></div>
                    <div className="University"><a href="https://cse.inha.ac.kr/cse/index.do" target='_blank'>🎓 인하대학교 컴퓨터공학과</a></div>
                    <div className="Email"><a href="https://mail.google.com/mail" target='_blank'>✉️ ices17@inha.edu</a></div>
                </div>

            </div>
        </div>
    </div >
}

export default SideBar;