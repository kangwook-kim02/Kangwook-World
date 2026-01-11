import "./Profile.css"


const Profile = ({ onClickButton }) => {
    return <div className="Profile">
        <a href=""><h2 className="Header">강욱 월드</h2></a>
        <div className="ProfileOutline">
            <div>
                <h1>프로필</h1>
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