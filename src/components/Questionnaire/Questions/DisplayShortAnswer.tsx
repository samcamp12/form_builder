import { InputTextarea } from "primereact/inputtextarea";
import * as React from "react";
import { useShortAnswer } from "services/hooks/useShortAnswer";

interface IDisplayShortAnswer {
    id: number;
}

export const DisplayShortAnswer = ({ id }: IDisplayShortAnswer): JSX.Element => {
    const { value, onShortAnswerChange } = useShortAnswer();
    console.log(id);

    return (
        <InputTextarea
            id="username"
            value={value}
            onChange={onShortAnswerChange}
            rows={5}
            cols={30}
            className="short-answer"
            placeholder="Please give a short answer"
        />
    );
};
