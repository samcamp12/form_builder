import * as React from "react";
import { ProgressBar } from "primereact/progressbar";

interface IQuestionProgress {
    total: number;
    current: number;
}

export const QuestionProgress = ({ total, current }: IQuestionProgress): JSX.Element => {
    return (
        <div className="progressbar">
            <b className="progress-text">{`${current} OF ${total}`}</b>
            <ProgressBar value={(current * 100) / total} displayValueTemplate={() => ""} />
        </div>
    );
};
