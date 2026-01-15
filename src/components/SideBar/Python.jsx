import { useState } from "react";
import PythonIcon from "../icons/python.svg?react";

const Python = ({ onMouseOverText, onMouseOutText }) => {
    const [pythonText, setPythonText] = useState("Python");

    return (
        <div className="Skill" data-skill="python" onMouseOver={(e) => onMouseOverText(e, setPythonText)} onMouseOut={(e) => onMouseOutText(e, setPythonText)}>
            <PythonIcon className="Icon" id="PythonIcon" /> <span className="PythonText">{pythonText}</span>
        </div>
    );
}

export default Python;