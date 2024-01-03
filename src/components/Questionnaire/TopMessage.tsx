import * as React from "react";
import { Tooltip } from "primereact/tooltip";

interface ITopMessageProps {
    formTitle: string;
    description: string;
}

export const TopMessage = ({ formTitle, description }: ITopMessageProps): JSX.Element => {
    return (
        <>
            <Tooltip target=".form-description" showDelay={300} />
            <div className="top-message">
                <span className={"top-message-a"}>{"Need help?"}</span>
                <span className={"top-message-b"}>{"Call an expert"}</span>
                <span className={"top-message-c"}>{"+1 777-222-3333"}</span>
                <span className={"top-message-me"}>{"Work by Eric Wang"}</span>
                <div>
                    <div className="form-title">{formTitle}</div>
                    <div
                        className="form-description"
                        data-pr-tooltip={description}
                        data-pr-position="bottom">
                        <i className="pi pi-info-circle"></i>
                    </div>
                </div>
            </div>
        </>
    );
};
