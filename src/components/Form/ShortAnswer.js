import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import ControlBar from "components/Control/ControlBar";

const ShortAnswer = (props) => {
    
    const { id } = props;

    const [ title, setTitle ] = useState("");
    const [ shortAnswer, setShortAnswer ] = useState("");

    return (
        <div className="p-form-container">
            <div>
                <InputText 
                    className="p-field"
                    id="question" 
                    type="text"
                    value={title}
                    placeholder="Question"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <InputText 
                    className="p-field"
                    id="answer" 
                    type="text"
                    value={shortAnswer}
                    placeholder="Short Answer"
                    onChange={(e) => setShortAnswer(e.target.value)}
                />
            </div>
            <div style={{textAlign: "center"}}>{id}</div>
            <ControlBar
                formId={id}
                title={title}
                formType={"shortAnswer"}
                value={shortAnswer}
            />
        </div>
    )
}

export default ShortAnswer;