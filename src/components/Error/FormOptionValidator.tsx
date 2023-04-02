import * as React from "react";

interface FormOptionValidatorProps {
    errorMessage: string;
}

export const FormOptionValidator = (props: FormOptionValidatorProps): JSX.Element => {
    const { errorMessage } = props;
    return errorMessage !== "" ? (
        <div className={"validator-message-option"}>{errorMessage}</div>
    ) : (
        <></>
    );
};
