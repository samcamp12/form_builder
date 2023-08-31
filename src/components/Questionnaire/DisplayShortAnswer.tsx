import { InputTextarea } from "primereact/inputtextarea";
import * as React from "react";
import { useShortAnswer } from "services/hooks/useShortAnswer";

interface IDisplayShortAnswer {
    title: string;
}

export const DisplayShortAnswer = ({ title }: IDisplayShortAnswer): JSX.Element => {
    const { value, onShortAnswerChange } = useShortAnswer();

    return (
        <div className="shortAnswer-display">
            <div className={"display-title"}>{title}</div>
            <InputTextarea
                id="username"
                value={value}
                onChange={onShortAnswerChange}
                rows={5}
                cols={30}
                placeholder="Please give a short answer"
            />
        </div>
    );
};
