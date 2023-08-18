import * as React from "react";
import { InputText } from "primereact/inputtext";
import ControlBar from "components/FormBuilder/Control/ControlBar";
import { SubTitle } from "./SubTitle";

interface IShortAnswerProps {
    id: number;
    title: string;
}

export const ShortAnswer = (props: IShortAnswerProps): JSX.Element => {
    const { id, title } = props;
    const [shortAnswer, setShortAnswer] = React.useState("");

    return (
        <div className="p-form-container">
            <div className="p-form-index">#{id + 1}</div>
            <SubTitle id={id} title={title} />
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
            <ControlBar formId={id} />
        </div>
    );
};
