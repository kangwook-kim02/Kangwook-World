import "./KangwookProject.css";
import "../Home.css";

const PacRep = () => {
    return (
        <div className="outline">
            <div className="project">
                <h3 className="projectName">Per-Flow Split Evaluation for Packet Representation Learning</h3>
                <p className="projectInfo">
                    PacRep의 기존 실험에서 데이터스누핑 오류를 확인하였으며, 플로우 단위 분할을 통해 해결하였습니다. 또한,
                    기존 공개 데이터셋에서는 암호화되지 않는 데이터가 상당히 많은 것으로 확인되었으며, 이로 인해, PacRep은 암호화되지
                    않는 페이로드를 학습하여 높은 분류 성능 결과를 얻었음을 확인하였습니다.
                </p>
                <div className="projectMeta">
                    <span>KSC 2025</span>
                    <span>Poster Paper</span>
                    <span>2025.12.16~12.19</span>
                </div>
                <div className="projectResults">
                    <a className="btn" href="/paper.pdf" target="_blank" rel="noreferrer">
                        PDF
                    </a>
                    <a className="btn" href="https://github.com/kangwook-kim02/PacRep" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a className="btn" href="/poster.pdf" target="_blank" rel="noreferrer">
                        Poster
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PacRep;