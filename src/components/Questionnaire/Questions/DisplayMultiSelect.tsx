import * as React from "react";
import { type Option } from "components/FormBuilder/Types/FormTypes";
import { Button } from "primereact/button";

interface IDisplayMultiSelect {
    questionId: number;
    options: Option[];
}

interface IMultiSelectOption {
    option: string;
    id: number;
    isSelected: boolean;
}

export const DisplayMultiSelect = ({ questionId, options }: IDisplayMultiSelect): JSX.Element => {
    const [selectedOption, setSelectedOption] = React.useState<number>();

    const handleClickOption = (optionId: number, isSelected: boolean): void => {
        if (isSelected) {
            setSelectedOption(-1);
        } else {
            setSelectedOption(optionId);
        }
    };

    const CheckBoxOption = ({
        isSelected = false,
        option,
        id,
    }: IMultiSelectOption): JSX.Element => {
        return (
            <Button
                label={option}
                onClick={() => {
                    handleClickOption(id, isSelected);
                }}
                className={`option ${isSelected ? "selected" : ""}`}
            />
        );
    };

    return (
        <div className="checkbox">
            {options.map((option) => {
                return (
                    <CheckBoxOption
                        key={option.id}
                        option={option.name}
                        id={option.id}
                        isSelected={selectedOption === option.id}
                    />
                );
            })}
        </div>
    );
};
