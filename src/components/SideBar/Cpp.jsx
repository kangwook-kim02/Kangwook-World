import { useState } from "react";
import CppIcon from "../icons/cplusplus.svg?react";

const Cpp = ({ onMouseOverText, onMouseOutText }) => {
    const [cppText, setCppText] = useState("C++");

    return (
        <div className="Skill" data-skill="cpp" onMouseOver={(e) => onMouseOverText(e, setCppText)} onMouseOut={(e) => onMouseOutText(e, setCppText)}>
            <CppIcon className="Icon" id="CplusplusIcon" /> <span className="CplusplusText">{cppText}</span>
        </div>
    );
}

export default Cpp;