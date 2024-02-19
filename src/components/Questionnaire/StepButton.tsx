import { Button } from "primereact/button";
import * as React from "react";

interface IStepButtonProps {
    currentQuestion: number;
    onChangeQuestion: (index: number) => void;
    formLength: number;
}

export const StepButton = ({
    currentQuestion,
    onChangeQuestion,
    formLength,
}: IStepButtonProps): JSX.Element => {
    return (
        <div className="step-buttons">
            <Button
                label="Back"
                onClick={() => {
                    onChangeQuestion(currentQuestion - 1);
                }}
                className="step-button back"
                disabled={currentQuestion === 0}
            />
            <Button
                label="Next"
                onClick={() => {
                    onChangeQuestion(currentQuestion + 1);
                }}
                className="step-button next"
                disabled={currentQuestion === formLength - 1}
            />
        </div>
    );
};
