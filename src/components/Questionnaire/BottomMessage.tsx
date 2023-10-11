import * as React from "react";

const serviceTexts = ["Term of Service", "Privacy Policy", "Insurance Licenses"];

export const BottomMessage = (): JSX.Element => {
    return (
        <div className="bottom-message">
            <div className="bottom-message-service">
                {serviceTexts.map((text) => {
                    return (
                        <span key={text} className="bottom-message-service-text">
                            {text}
                        </span>
                    );
                })}
            </div>
            <small className={"bottom-message-rights"}>{"@Copyright Bluedog 2023"}</small>
        </div>
    );
};
