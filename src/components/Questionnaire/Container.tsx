import * as React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "store/store";
import { Questions } from "./Questions";
import { StepButton } from "./StepButton";

const EmptyMessage = (): JSX.Element => {
    return <div>There is no Questions in form builder</div>;
};

export const Container = (): JSX.Element => {
    const { formList, title } = useSelector((state: RootState) => state.formState);
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
    const [beginQuestions, setBeginQuestions] = React.useState<boolean>(false);

    const onBeginQuestions = (): void => {
        setBeginQuestions(true);
    };

    const renderQuestions =
        formList[currentQuestion] !== undefined ? (
            <Questions content={formList[currentQuestion]} />
        ) : (
            <EmptyMessage />
        );

    const onChangeQuestion = (index: number): void => {
        const formListLength = formList.length;
        if (index < 0 || index >= formListLength) {
            return;
        }
        setCurrentQuestion(index);
    };

    return (
        <>
            <div className="display-container">
                <div>{title.formTitle}</div>
                {beginQuestions ? (
                    <div>{renderQuestions}</div>
                ) : (
                    <div onClick={onBeginQuestions}>Begin Survey</div>
                )}
                <StepButton currentQuestion={currentQuestion} onChangeQuestion={onChangeQuestion} />
            </div>
        </>
    );
};
