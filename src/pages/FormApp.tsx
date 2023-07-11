import * as React from "react";

import ShortAnswer from "components/Form/ShortAnswer";
import Title from "components/Form/FormTitle";
import { Dropdown, type DropdownChangeParams } from "primereact/dropdown";
import { FormTypeEnum } from "constants/FormTypeEnum";

import { useSelector, useDispatch } from "react-redux";

import "styles/FormApp.scss";
import CheckBox from "components/Form/Checkbox";
import MultipleChoice from "components/Form/MultipleChoice";
import { type AppDispatch, type RootState } from "store/store";

import * as actionTypes from "store/actions/actionTypes";

const FormApp = (): JSX.Element => {
    const { formList, title } = useSelector((state: RootState) => state.formState);
    const dispatch: AppDispatch = useDispatch();
    const [isAddingForm, setIsAddingForm] = React.useState(false);
    const [addFormType, setAddFormType] = React.useState<FormTypeEnum>();

    const formTypeItems = [
        { label: "Short Answer", value: FormTypeEnum.shortAnswer },
        { label: "Multiple Choice", value: FormTypeEnum.multipleChoice },
        { label: "Checkbox", value: FormTypeEnum.checkBox },
    ];

    const addFormClick = (): void => {
        setIsAddingForm(true);
    };

    const onBeginAddingForm = (e: DropdownChangeParams): void => {
        setAddFormType(e.value);
        dispatch({
            type: actionTypes.ADD_FORM,
            formType: e.value,
        });
        setIsAddingForm(false);
    };

    const forms = formList.map((x, i) => {
        switch (x.formType) {
            case FormTypeEnum.shortAnswer:
                return <ShortAnswer key={i} id={x.id} title={x.title} />;
            case FormTypeEnum.checkBox:
                return <CheckBox key={i} id={x.id} title={x.title} options={x.options} />;
            case FormTypeEnum.multipleChoice:
                return <MultipleChoice key={i} id={x.id} title={x.title} options={x.options} />;
            default:
                return "";
        }
    });

    return (
        <React.Fragment>
            <div className={"forms-container"}>
                <Title title={title} />
                {forms}
                {isAddingForm ? (
                    <Dropdown
                        value={addFormType}
                        options={formTypeItems}
                        placeholder={"Select a Type"}
                        onChange={(e) => {
                            onBeginAddingForm(e);
                        }}
                    />
                ) : (
                    <div className="add-button" onClick={addFormClick}>
                        <i className="pi pi-ellipsis-v" style={{ fontSize: "1.2rem" }}></i>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default FormApp;
