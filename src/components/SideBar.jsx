import "./SideBar.css";
import profileImage from "./images/profileImage.png";
import worldLogo from "../../worldLogo.png";


import Cpp from "./SideBar/Cpp";
import Python from "./SideBar/Python";
import JavaScript from "./SideBar/JavaScript";
import Rat from "./SideBar/Rat";

const SideBar = () => {

    // 기술(Skill) 안으로 마우스가 들어왔을 때 이벤트 처리 함수
    const onMouseOverText = (e, setText) => {
        let skill = e.currentTarget.dataset.skill;
        switch (skill) {
            case "cpp":
                setText("★★★★★");
                return;
            case "python":
                setText("★★★☆☆");
                return;
            case "javaScript":
                setText("★★★★☆");
                return;
            case "react":
                setText("★★★★☆");
                return;
            default:
        }
    }

    // 기술(SKill) 밖으로 마우스가 나갔을 때 이벤트 처리 함수
    const onMouseOutText = (e, setText) => {
        let skill = e.currentTarget.dataset.skill;
        switch (skill) {
            case "cpp":
                setText("C++");
                return;
            case "python":
                setText("Python");
                return;
            case "javaScript":
                setText("JavaScript");
                return;
            case "react":
                setText("React");
                return;
            default:
        }
    }

    return <div className="SideBar">
        <a href=""><h2 className="Header"><img className="WorldLogo" src={worldLogo} alt="worldLogo" /></h2></a>
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
                    <Cpp onMouseOverText={onMouseOverText} onMouseOutText={onMouseOutText} />
                    <Python onMouseOverText={onMouseOverText} onMouseOutText={onMouseOutText} />
                    <JavaScript onMouseOverText={onMouseOverText} onMouseOutText={onMouseOutText} />
                    <Rat onMouseOverText={onMouseOverText} onMouseOutText={onMouseOutText} />
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