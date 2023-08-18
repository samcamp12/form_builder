import * as React from "react";
import { useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";
import { CHANGE_FORM_TITLE } from "store/actions/actionTypes";

interface IFormTitleProps {
    id: number;
    title: string;
}

export const SubTitle = (props: IFormTitleProps): JSX.Element => {
    const { id, title } = props;
    const dispatch = useDispatch();
    const handleInputText = (title: string): void => {
        dispatch({
            type: CHANGE_FORM_TITLE,
            id,
            title,
        });
    };
    return (
        <div>
            <InputText
                className="p-field"
                id="question"
                type="text"
                value={title}
                placeholder="Question"
                onChange={(e) => {
                    handleInputText(e.target.value);
                }}
            />
        </div>
    );
};
