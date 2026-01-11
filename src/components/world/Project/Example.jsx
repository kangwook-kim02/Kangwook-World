import "./KangwookProject.css";
import "../Home.css";

const Example = () => {
    return (
        <div className="outline">
            <div className="project">
                <h3>프로젝트 명을 입력해주세요.</h3>
                <p>
                    프로젝트 내용을 입력해주세요.
                </p>
                <div className="projectMeta">
                    <span>메타정보</span>
                </div>
                <div className="projectResults">
                    <a className="btn" href="" target="_blank" rel="noreferrer">
                        참고자료
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Example;