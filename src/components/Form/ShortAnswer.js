import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import ControlBar from "components/Control/ControlBar";
import { FormTitle } from "./FormComponents/FormTitle";

const ShortAnswer = (props) => {
    const { id, title } = props;
    const [shortAnswer, setShortAnswer] = useState("");

    return (
        <div className="p-form-container">
            <div className="p-form-index">#{id + 1}</div>
            <FormTitle id={id} title={title} />
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
            <ControlBar formId={id} formType={"shortAnswer"} value={shortAnswer} />
        </div>
    );
};

export default ShortAnswer;
