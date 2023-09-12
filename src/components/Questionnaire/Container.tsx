import * as React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "store/store";

import { QuestionProgress } from "./QuestionProgress";
import { Questions } from "./Questions/Questions";
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

    const onChangeQuestion = (index: number): void => {
        const formListLength = formList.length;
        if (index < 0 || index >= formListLength) {
            return;
        }
        setCurrentQuestion(index);
    };

    const renderQuestions =
        formList[currentQuestion] !== undefined ? (
            <div className={"render-questions"}>
                <h2 className="questions-title">{formList[currentQuestion].title}</h2>
                <div className="questions">
                    <Questions content={formList[currentQuestion]} />
                </div>
                <StepButton currentQuestion={currentQuestion} onChangeQuestion={onChangeQuestion} />
                <QuestionProgress total={formList.length} current={currentQuestion + 1} />
            </div>
        ) : (
            <EmptyMessage />
        );

    return (
        <>
            <div className="display-container">
                <div>{title.formTitle}</div>
                {beginQuestions ? (
                    <div>{renderQuestions}</div>
                ) : (
                    <div onClick={onBeginQuestions}>Begin Survey</div>
                )}
            </div>
        </>
    );
};
