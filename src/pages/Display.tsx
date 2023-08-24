import { Container } from "components/Questionnaire/Container";
import * as React from "react";

import "../styles/Display.scss";

const Preview = (): JSX.Element => {
    return (
        <div className={"questionnaire-container"}>
            <Container />
        </div>
    );
};

export default Preview;
