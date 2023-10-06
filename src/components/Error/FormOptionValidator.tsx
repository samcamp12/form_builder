import * as React from "react";

interface FormOptionValidatorProps {
    errorMessage: string;
    isTimeout?: boolean;
}

export const FormOptionValidator = (props: FormOptionValidatorProps): JSX.Element => {
    const { errorMessage } = props;

    return errorMessage !== "" ? (
        <div className={"validator-message-option"}>{errorMessage}</div>
    ) : (
        <></>
    );
};
