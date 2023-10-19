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
    const [selectedOptions, setSelectedOptions] = React.useState<number[]>([]);

    const handleClickOption = (optionId: number, isSelected: boolean): void => {
        if (isSelected) {
            setSelectedOptions(selectedOptions.filter((x) => x !== optionId));
        } else {
            setSelectedOptions([...selectedOptions, optionId]);
        }
    };

    const MultiSelectOption = ({
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
                    <MultiSelectOption
                        key={option.id}
                        option={option.name}
                        id={option.id}
                        isSelected={selectedOptions.includes(option.id)}
                    />
                );
            })}
        </div>
    );
};
