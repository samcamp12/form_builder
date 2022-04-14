import React, { useState } from "react";
import { Button } from "primereact/button"
import { InputSwitch } from "primereact/inputswitch";
import { useSelector, useDispatch  } from 'react-redux';
import * as actionTypes from "store/actions/actionTypes";

const ControlBar = (props) => {

    const { formId, formType, title, value } = props;

    const formData = useSelector(state => state.formState.formList.find(x => x.id === formId));
    const dispatch = useDispatch();

    const [isRequired, setIsRequired] = useState(formData.isRequired);

    const onDuplicateClick = () => {
        dispatch({ 
            type: actionTypes.DUPLICATE_FORM, 
            id: formId,
        })
    }

    const onRemoveClick = () => {
        dispatch({ type: actionTypes.DELETE_FORM, id: formId })
    }

    const onSwitchChange = () => {
        setIsRequired(isRequired => !isRequired)
        dispatch({ type: actionTypes.SET_REQUIRED, id: formId })
    }

    return (
        <div className="control-container">
            <Button
                label="Duplicate"
                className={"control-button"}
                onClick={onDuplicateClick}
            />
            <Button
                label="Remove"
                className={"control-button"}
                onClick={onRemoveClick}
            />
            <InputSwitch
                checked={isRequired}
                onChange={onSwitchChange}
                className={"control-switch"}
            />
            <div className={isRequired ? "required-checked" : "required"}>Required</div>
        </div>
    )

}

export default ControlBar;