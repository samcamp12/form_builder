import * as React from "react";
import { RadioButton, type RadioButtonChangeParams } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createNewId } from "store/utils";
import ControlBar from "components/Control/ControlBar";
import * as actionTypes from "store/actions/actionTypes";
import { FormOptionValidator } from "components/Error/FormOptionValidator";
import { useDispatch } from "react-redux";
import { FormTitle } from "./FormComponents/FormTitle";

interface Option {
    id: number;
    name: string;
    value: string;
}

interface ICheckboxProps {
    id: number;
    title: string;
    options: Option[];
}

const CheckBox = (props: ICheckboxProps): JSX.Element => {
    const { id, title, options } = props;
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = React.useState<string>();
    const [beginAddOption, setBeginAddOption] = React.useState<boolean>(false);
    const [newOptionInput, setNewOptionInput] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");

    const onAddOption = (): void => {
        setBeginAddOption(true);
    };

    const onCloseOption = (): void => {
        setBeginAddOption(false);
    };

    const onSaveOption = (): void => {
        if (newOptionInput === "") {
            setError("cannot set empty options");
            return;
        }
        if (!options.map((option) => option.name).includes(newOptionInput)) {
            setError("");
            dispatch({
                type: actionTypes.CHANGE_OPTIONS,
                id,
                options: [
                    ...options,
                    {
                        id: createNewId(options.map((x) => x.id)),
                        name: newOptionInput,
                    },
                ],
            });
            setNewOptionInput("");
            setBeginAddOption(false);
        } else {
            setError("Cannot set duplicate options");
        }
    };

    const onRemoveOption = (e: any): void => {
        const newOptionList = options.filter((x) => x.id.toString() !== e.target.id);
        dispatch({
            type: actionTypes.CHANGE_OPTIONS,
            id,
            options: newOptionList,
        });
    };

    const handleClickRadioButton = (e: RadioButtonChangeParams): void => {
        setSelectedOption(e.target.id);
    };

    const radioButtons = options.map((x, i) => {
        return (
            <div className="radio-button" key={x.id}>
                <RadioButton
                    id={x.id.toString()}
                    checked={x.id.toString() === selectedOption}
                    onChange={handleClickRadioButton}
                />
                <label style={{ marginLeft: "8px" }}>{x.name}</label>
                <button
                    className={"remove-option-button"}
                    onClick={(e) => {
                        onRemoveOption(e);
                    }}
                    id={x.id.toString()}>
                    <span className="pi pi-times" id={x.id.toString()}></span>
                </button>
            </div>
        );
    });

    return (
        <div className="p-form-container">
            <div className="p-form-index">#{id + 1}</div>
            <FormTitle id={id} title={title} />
            <div className="radio-button-list">{radioButtons}</div>
            <div>
                {beginAddOption ? (
                    <div>
                        <div className={"checkbox-input"}>
                            <InputText
                                className="p-field"
                                id="addOption"
                                value={newOptionInput}
                                placeholder={"Option Name"}
                                onChange={(e) => {
                                    setNewOptionInput(e.target.value);
                                }}
                            />
                            <Button
                                icon={"pi pi-check"}
                                className={"control-button"}
                                onClick={onSaveOption}
                            />
                            <Button
                                icon={"pi pi-times"}
                                className={"control-button-close"}
                                onClick={onCloseOption}
                            />
                        </div>
                        <FormOptionValidator errorMessage={error} />
                    </div>
                ) : (
                    <Button
                        label={"Add Checkbox"}
                        onClick={onAddOption}
                        className="add-option-button"
                    />
                )}
            </div>
            <ControlBar formId={id} formType={"checkBox"} value={selectedOption} />
        </div>
    );
};

export default CheckBox;
