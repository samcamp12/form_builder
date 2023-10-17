import * as React from "react";

export const TopMessage = ({ formTitle }: { formTitle: string }): JSX.Element => {
    return (
        <div className="top-message">
            <span className={"top-message-a"}>{"Need help?"}</span>
            <span className={"top-message-b"}>{"Call an expert"}</span>
            <span className={"top-message-c"}>{"+1 777-222-3333"}</span>
            <span className={"top-message-me"}>{"Work by Eric Wang"}</span>
            <div className="form-title">{formTitle}</div>
        </div>
    );
};
