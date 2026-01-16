import "./NavBar.css";
import { useRef, useEffect } from "react";

const NavBar = ({ onClickButton, pageState }) => {
    // 참조할 HTML Element
    const homeRef = useRef(null);
    const profileRef = useRef(null);
    const projectRef = useRef(null);

    /* 
        mount 됐을 때, active button 지정
        기존 Ref의 값은 변경할 필요가 없음 --> 어차피 리랜더링 되므로 className이 모두 없어짐
    */
    useEffect(() => {
        if (pageState === 0) {
            homeRef.current.className = "active";
        }
        else if (pageState === 1) {
            profileRef.current.className = "active";
        }
        else if (pageState === 2) {
            projectRef.current.className = "active";
        }
    }, []);

    return (
        <div className="NavBar">
            <button ref={homeRef} value={0} onClick={onClickButton}>홈</button>
            <button ref={profileRef} value={1} onClick={onClickButton}>프로필</button>
            <button ref={projectRef} value={2} onClick={onClickButton}>프로젝트</button>
        </div>
    );
}

export default NavBar;