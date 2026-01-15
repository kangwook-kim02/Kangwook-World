import { useState } from "react";
import JavaScriptIcon from "../icons/javascript.svg?react";

const JavaScript = ({ onMouseOverText, onMouseOutText }) => {
    const [jsText, setJsText] = useState("JavaScript");

    return (
        <div className="Skill" data-skill="javaScript" onMouseOver={(e) => onMouseOverText(e, setJsText)} onMouseOut={(e) => onMouseOutText(e, setJsText)}>
            <JavaScriptIcon className="JavaScriptIcon" /> <span className="JavaScriptText">{jsText}</span>
        </div>
    );
}

export default JavaScript;