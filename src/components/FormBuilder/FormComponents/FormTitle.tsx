import * as React from "react";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";

import * as actionTypes from "store/actions/actionTypes";

interface ITitleProps {
    title: {
        formTitle: string;
        description: string;
    };
}

export const Title = (props: ITitleProps): JSX.Element => {
    const { title } = props;

    const dispatch = useDispatch();

    return (
        <div className="p-form-container" style={{ marginBottom: "20px", marginTop: "10px" }}>
            <div>
                <InputText
                    className="p-field"
                    id="question"
                    type="text"
                    value={title.formTitle ?? ""}
                    placeholder="Form title"
                    onChange={(e) =>
                        dispatch({ type: actionTypes.ADD_TITLE, formTitle: e.target.value })
                    }
                />
            </div>
            <div>
                <InputText
                    className="p-field"
                    id="answer"
                    type="text"
                    value={title.description ?? ""}
                    placeholder="Form Description (Optional)"
                    onChange={(e) =>
                        dispatch({
                            type: actionTypes.ADD_TITLE_DESCRIPTION,
                            description: e.target.value,
                        })
                    }
                />
            </div>
        </div>
    );
};

export default Title;
