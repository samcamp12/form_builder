import * as React from "react";

interface IDisplayMultiSelect {
    title: string;
}

export const DisplayMultiSelect = ({ title }: IDisplayMultiSelect): JSX.Element => {
    return <div>{title}</div>;
};
