import { useState } from "react"
import ReactIcon from "../icons/react.svg?react";

const Rat = ({ onMouseOverText, onMouseOutText }) => {
    const [reactText, setReactText] = useState("React");

    return (
        <div className="Skill" data-skill="react" onMouseOver={(e) => onMouseOverText(e, setReactText)} onMouseOut={(e) => onMouseOutText(e, setReactText)}>
            <ReactIcon className="Icon" id="ReactIcon" /> <span className="ReactText">{reactText}</span>
        </div>
    );
}

export default Rat;