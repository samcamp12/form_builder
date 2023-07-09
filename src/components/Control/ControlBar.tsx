import * as React from "react";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "store/actions/actionTypes";

interface IControlBarProps {
    formId: number;
}

const ControlBar = (props: IControlBarProps): JSX.Element => {
    const { formId } = props;

    const formData = useSelector((state: any) =>
        state.formState.formList.find((x: { id: number }) => x.id === formId)
    );
    const dispatch = useDispatch();

    const [isRequired, setIsRequired] = React.useState<boolean>(formData.isRequired);

    const onDuplicateClick = (): void => {
        dispatch({
            type: actionTypes.DUPLICATE_FORM,
            id: formId,
        });
    };

    const onRemoveClick = (): void => {
        dispatch({ type: actionTypes.DELETE_FORM, id: formId });
    };

    const onSwitchChange = (): void => {
        setIsRequired((isRequired) => !isRequired);
        dispatch({ type: actionTypes.SET_REQUIRED, id: formId });
    };

    return (
        <div className="control-container">
            <Button label="Duplicate" className={"control-button"} onClick={onDuplicateClick} />
            <Button label="Remove" className={"control-button"} onClick={onRemoveClick} />
            <InputSwitch
                checked={isRequired}
                onChange={onSwitchChange}
                className={"control-switch"}
            />
            <div className={isRequired ? "required-checked" : "required-unchecked"}>Required</div>
        </div>
    );
};

export default ControlBar;
