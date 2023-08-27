import { FormTypeEnum } from "constants/FormTypeEnum";
import * as React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "store/store";
import { DisplayShortAnswer } from "./DisplayShortAnswer";
import { DisplayCheckBox } from "./DisplayCheckbox";
import { DisplayMultiSelect } from "./DisplayMultiSelect";

const formTypeToComponent = {
    [FormTypeEnum.shortAnswer]: <DisplayShortAnswer />,
    [FormTypeEnum.checkBox]: <DisplayCheckBox />,
    [FormTypeEnum.multipleChoice]: <DisplayMultiSelect />,
};

const EmptyMessage = (): JSX.Element => {
    return <div>There is no Questions in form builder</div>;
};

export const Container = (): JSX.Element => {
    const { formList, title } = useSelector((state: RootState) => state.formState);
    const [currentQuestion] = React.useState<number>(0);
    const [beginQuestions, setBeginQuestions] = React.useState<boolean>(false);

    const onBeginQuestions = (): void => {
        setBeginQuestions(true);
    };

    const renderQuestions =
        formList[currentQuestion] !== undefined ? (
            formTypeToComponent[formList[currentQuestion].formType]
        ) : (
            <EmptyMessage />
        );

    return (
        <>
            <div className="display-container">
                <div>{title.formTitle}</div>
                {beginQuestions ? (
                    renderQuestions
                ) : (
                    <div onClick={onBeginQuestions}>Begin Survey</div>
                )}
            </div>
        </>
    );
};
