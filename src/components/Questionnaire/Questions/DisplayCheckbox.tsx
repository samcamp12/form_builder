import * as React from "react";

interface IDisplayCheckBox {
    title: string;
}

export const DisplayCheckBox = ({ title }: IDisplayCheckBox): JSX.Element => {
    return <div>{title}</div>;
};
