import * as React from "react";
import { ProgressBar } from "primereact/progressbar";

interface IQuestionProgress {
    total: number;
    current: number;
}

export const QuestionProgress = ({ total, current }: IQuestionProgress): JSX.Element => {
    const valueTemplate = (value: number): React.ReactNode => {
        return <div>{`${(value * total) / 100} OF ${total}`}</div>;
    };

    return (
        <div className="progressbar">
            <ProgressBar value={(current * 100) / total} displayValueTemplate={valueTemplate} />
        </div>
    );
};
