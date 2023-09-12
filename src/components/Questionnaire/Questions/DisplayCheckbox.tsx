import { type Option } from "components/FormBuilder/Types/FormTypes";
import { Button } from "primereact/button";
import * as React from "react";

interface IDisplayCheckBox {
    questionId: number;
    options: Option[];
}

interface ICheckboxOption {
    option: string;
    id: number;
    isSelected: boolean;
}

export const DisplayCheckBox = ({ questionId, options }: IDisplayCheckBox): JSX.Element => {
    const [selectedOption, setSelectedOption] = React.useState<number>();

    const handleClickOption = (optionId: number, isSelected: boolean): void => {
        if (isSelected) {
            setSelectedOption(-1);
        } else {
            setSelectedOption(optionId);
        }
    };

    const CheckBoxOption = ({ isSelected = false, option, id }: ICheckboxOption): JSX.Element => {
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
