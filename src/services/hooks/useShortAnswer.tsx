import * as React from "react";

interface UseShortAnswer {
    value: string;
    onShortAnswerChange: (e: any) => void;
}

export const useShortAnswer = (): UseShortAnswer => {
    const [value, setValue] = React.useState<string>("");
    const onShortAnswerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };
    return { value, onShortAnswerChange };
};
