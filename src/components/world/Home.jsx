import "./Home.css"


const Home = ({ onClickButton }) => {

    return <div className="Home">
        <h2 className="Header">강욱 월드</h2>
        <div className="HomeOutline">
            <div className="HomeImageBox">
                <img src="" alt="" />
            </div>
            <div className="NavBar">
                <button className="active" value={0}>Home</button>
                <button value={1} onClick={onClickButton}>Profile</button>
                <button value={2} onClick={onClickButton}>Project</button>
            </div>
        </div>
    </div>
}

export default Home;