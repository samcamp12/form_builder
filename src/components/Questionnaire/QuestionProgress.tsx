import * as React from "react";
import { ProgressBar } from "primereact/progressbar";

interface IQuestionProgress {
    total: number;
    current: number;
}

export const QuestionProgress = ({ total, current }: IQuestionProgress): JSX.Element => {
    const valueTemplate = (value: number): React.ReactNode => {
        return (
            <React.Fragment>
                {value}/<b>{total}</b>
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            <ProgressBar value={current} displayValueTemplate={valueTemplate} />
        </div>
    );
};
