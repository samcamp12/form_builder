import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createNewId } from "store/utils";
import ControlBar from "components/Control/ControlBar";
import * as actionTypes from "store/actions/actionTypes";
import { FormOptionValidator } from "components/Error/FormOptionValidator";
import { useDispatch } from "react-redux";
import { FormTitle } from "./FormComponents/FormTitle";

const CheckBox = (props) => {
    const { id, title, options } = props;
    const dispatch = useDispatch();
    const [checkBox, setCheckBox] = useState([]);
    const [beginAddOption, setBeginAddOption] = useState(false);
    const [newOptionInput, setNewOptionInput] = useState("");
    const [error, setError] = useState();

    const onAddOption = () => {
        setBeginAddOption(true);
    };

    const onCloseOption = () => {
        setBeginAddOption(false);
    };

    const onSaveOption = () => {
        if (newOptionInput === "") {
            setError("cannot set empty options");
            return;
        }
        if (options.map((option) => option.name).indexOf(newOptionInput) === -1) {
            setError(null);
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
            setError("Cannot set duplicate options");
        }
    };

    const onRemoveOption = (e) => {
        const newOptionList = options.filter((x) => x.id.toString() !== e.target.id);
        dispatch({
            type: actionTypes.CHANGE_OPTIONS,
            id,
            options: newOptionList,
        });
    };

    const handleClickRadioButton = (e) => {
        setCheckBox(e.value);
    };

    const radioButtons = options.map((x, i) => {
        return (
            <div className="radio-button" key={x.id}>
                <RadioButton
                    id="question"
                    checked={x.value === checkBox}
                    onChange={handleClickRadioButton}
                />
                <label style={{ marginLeft: "8px" }}>{x.name}</label>
                <button
                    className={"remove-option-button"}
                    onClick={(e) => onRemoveOption(e)}
                    id={x.id}>
                    <span className="pi pi-times" id={x.id}></span>
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
                                onChange={(e) => setNewOptionInput(e.target.value)}
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
            <ControlBar formId={id} formType={"checkBox"} value={checkBox} />
        </div>
    );
};

export default CheckBox;
