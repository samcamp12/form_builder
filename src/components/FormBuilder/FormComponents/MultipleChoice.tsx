import * as React from "react";
import { Checkbox, type CheckboxChangeParams } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createNewId } from "store/utils";
import { useDispatch } from "react-redux";
import ControlBar from "components/FormBuilder/Control/ControlBar";
import * as actionTypes from "store/actions/actionTypes";
import { FormOptionValidator } from "components/Error/FormOptionValidator";
import { SubTitle } from "./SubTitle";
import { type Option } from "../Types/FormTypes";

interface IMultipleChoiceProps {
    id: number;
    options: Option[];
    title: string;
}

export const MultipleChoice = (props: IMultipleChoiceProps): JSX.Element => {
    const { id, options, title } = props;
    const dispatch = useDispatch();

    const [multiChoice, setMultiChoice] = React.useState<string[]>([]);
    const [beginAddOption, setBeginAddOption] = React.useState(false);
    const [newOptionInput, setNewOptionInput] = React.useState("");
    const [optionError, setOptionError] = React.useState<string>("");
    const [formError, setFormError] = React.useState<string>("");

    const onAddOption: React.MouseEventHandler = (e): void => {
        e.stopPropagation();
        if (options.length >= 4) {
            setFormError("You can set up to 4 options");
        } else {
            setFormError("");
            setBeginAddOption(true);
        }
    };

    const onCloseOption = (): void => {
        setBeginAddOption(false);
        setOptionError("");
    };

    const onSaveOption = (): void => {
        if (newOptionInput === "") {
            setOptionError("cannot set empty options");
            return;
        }
        if (!options.map((option) => option.name).includes(newOptionInput)) {
            setOptionError("");
            dispatch({
                type: actionTypes.CHANGE_OPTIONS,
                id,
                options: [
                    ...options,
                    {
                        id: createNewId(options.map((x) => x.id)),
                        name: newOptionInput,
                        value: newOptionInput,
                    },
                ],
            });
            setNewOptionInput("");
            setBeginAddOption(false);
        } else {
            setOptionError("Cannot set duplicate options");
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

    const handleMultiChoiceChange = (e: CheckboxChangeParams): void => {
        const tempState = multiChoice;
        if (!tempState.includes(e.value)) {
            tempState.push(e.value);
            setMultiChoice([...tempState]);
        } else {
            setMultiChoice(tempState.filter((x) => x !== e.value));
        }
    };

    const choiceList = options.map((x): JSX.Element => {
        if (x.value !== null && x.value !== undefined) {
            return (
                <div className="choice" key={x.id}>
                    <Checkbox
                        value={x.value}
                        onChange={handleMultiChoiceChange}
                        checked={multiChoice.includes(x.value)}
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
        } else {
            return <></>;
        }
    });

    return (
        <div
            className="p-form-container"
            onClick={() => {
                setFormError("");
            }}>
            <div className="p-form-index">#{id + 1}</div>
            <SubTitle id={id} title={title} />
            <div className="multiple-choice-list">{choiceList}</div>
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
                    <FormOptionValidator errorMessage={optionError} />
                </div>
            ) : (
                <>
                    <Button
                        label={"Add Choice"}
                        onClick={onAddOption}
                        className="add-option-button"
                    />
                    <FormOptionValidator errorMessage={formError} />
                </>
            )}

            <ControlBar formId={id} />
        </div>
    );
};
