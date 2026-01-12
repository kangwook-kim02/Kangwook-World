import "./Profile.css"


const Profile = ({ onClickButton }) => {
    return <div className="Profile">
        <a href=""><h2 className="Header">강욱 월드</h2></a>
        <div className="ProfileOutline">
            <div className="ProfileList">
                <div className="ProfileInfo">
                    <h2>김강욱 (2002.08.20)</h2>
                    <p className="topic">학력</p>
                    <p className="detail">인하대학교 컴퓨터공학 2022.2~2027.2</p>
                    <p className="topic">관심 분야</p>
                    <p className="detail">웹개발, 네트워크, 데이터마이닝, AI</p>
                    <p className="topic">경력</p>
                    <p className="detail" id="history1">2025.6 ~ 2025.12 학부연구생, DNSLab, 인하대학교.
                        <p className="undergraduate">- ICT융합 공공 서비스·인프라의 암호화 사이버위협에 대한 네트워크 행위기반 보안관제 기술 개발(RS-2023-00235509)</p>
                        <p className="undergraduate">- 암호화 트래픽 분류</p>
                    </p>
                    <p></p>
                    <p className="topic">논문 및 수상</p>
                    <p className="prizeDetail">- 2025.12.22 인하대학교 탄소중립아카데미 최우수상 - 팀 Inha DeepMind</p>
                    <p className="paperDetail">- K. Kim, and H. Roh, "Per- Flow Split Evaluation for Packet Representation Learning: Data Snooping and
                        Payload Dependency in Encrypted Traffic Classification," kiise (Poster), Dec.2025.</p>
                </div>
            </div>
            <div className="NavBar">
                <button value={0} onClick={onClickButton}>Home</button>
                <button className="active" value={1}>Profile</button>
                <button value={2} onClick={onClickButton}>Project</button>
            </div>
        </div>
    </div>
}

export default Profile;