import * as React from "react";
import { InputText } from "primereact/inputtext";
import ControlBar from "components/Control/ControlBar";
import { FormTitle } from "./FormComponents/FormTitle";

interface IShortAnswerProps {
    id: number;
    title: string;
}

const ShortAnswer = (props: IShortAnswerProps): JSX.Element => {
    const { id, title } = props;
    const [shortAnswer, setShortAnswer] = React.useState("");

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
                    onChange={(e) => {
                        setShortAnswer(e.target.value);
                    }}
                />
            </div>
            <ControlBar formId={id} formType={"shortAnswer"} value={shortAnswer} />
        </div>
    );
};

export default ShortAnswer;
