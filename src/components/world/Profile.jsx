import "./Profile.css";
import "./World.css";
import NavBar from "../NavBar";

import { profileData } from "../data/profileData";

const Profile = ({ onClickButton, pageState }) => {
    return <div className="Profile">
        <a href=""><h2 className="Header">프로필</h2></a>
        <div className="ProfileOutline">
            <div className="ProfileList">
                <div className="ProfileInfo">
                    <h2>{profileData.name}</h2>
                    <p className="topic">학력</p>
                    <p className="detail">{profileData.education}</p>
                    <p className="topic">관심 분야</p>
                    <p className="detail">{profileData.interests}</p>
                    <p className="topic">경력</p>
                    <p className="detail" id="history1">{profileData.history.name}
                        <span className="dnslab">{profileData.history.detail}</span>
                    </p>
                    <p></p>
                    <p className="topic">논문 및 수상</p>
                    <p className="prizeDetail">- {profileData.award.paper}</p>
                    <p className="paperDetail">- {profileData.award.swcarbon}</p>
                </div>
            </div>
            <NavBar onClickButton={onClickButton} pageState={pageState} />
        </div>
    </div>
}

export default Profile;