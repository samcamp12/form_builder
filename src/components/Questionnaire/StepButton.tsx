import { Button } from "primereact/button";
import * as React from "react";

interface IStepButtonProps {
    currentQuestion: number;
    onChangeQuestion: (index: number) => void;
}

export const StepButton = ({
    currentQuestion,
    onChangeQuestion,
}: IStepButtonProps): JSX.Element => {
    return (
        <div className="step-button">
            <Button
                label="Next"
                onClick={() => {
                    onChangeQuestion(currentQuestion + 1);
                }}
            />
            <Button
                label="Back"
                onClick={() => {
                    onChangeQuestion(currentQuestion - 1);
                }}
            />
        </div>
    );
};
