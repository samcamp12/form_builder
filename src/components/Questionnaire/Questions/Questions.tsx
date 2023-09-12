import * as React from "react";

import { DisplayShortAnswer } from "./DisplayShortAnswer";
import { DisplayCheckBox } from "./DisplayCheckbox";
import { DisplayMultiSelect } from "./DisplayMultiSelect";

import { FormTypeEnum } from "constants/FormTypeEnum";
import { type Form } from "store/reducers/reducerTypes";

interface IQuestions {
    content: Form;
}

export const Questions = ({ content }: IQuestions): JSX.Element => {
    switch (content.formType) {
        case FormTypeEnum.shortAnswer:
            return <DisplayShortAnswer id={content.id} />;
        case FormTypeEnum.checkBox:
            return <DisplayCheckBox questionId={content.id} options={content.options} />;
        case FormTypeEnum.multipleChoice:
            return <DisplayMultiSelect title={content.title} />;
        default:
            return <></>;
    }
};
