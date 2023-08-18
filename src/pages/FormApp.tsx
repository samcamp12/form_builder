import * as React from "react";

import * as _ from "lodash";

import { DndProvider } from "react-dnd";

import { Dropdown, type DropdownChangeParams } from "primereact/dropdown";
import { FormTypeEnum } from "constants/FormTypeEnum";

import { useSelector, useDispatch } from "react-redux";

import "styles/FormApp.scss";
import { type AppDispatch, type RootState } from "store/store";

import * as actionTypes from "store/actions/actionTypes";
import { DraggableWrapper } from "components/DnD/DraggableWrapper";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ShortAnswer } from "components/FormBuilder/FormComponents/ShortAnswer";
import { CheckBox } from "components/FormBuilder/FormComponents/Checkbox";
import Title from "components/FormBuilder/FormComponents/FormTitle";
import { MultipleChoice } from "components/FormBuilder/FormComponents/MultipleChoice";

const formTypeToComponent = {
    [FormTypeEnum.shortAnswer]: ShortAnswer,
    [FormTypeEnum.checkBox]: CheckBox,
    [FormTypeEnum.multipleChoice]: MultipleChoice,
};

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

    const moveItem = _.debounce((dragIndex: number, hoverIndex: number): void => {
        dispatch({
            type: actionTypes.CHANGE_FORM_ORDER,
            dragIndex,
            hoverIndex,
        });
    }, 100);

    const forms = formList.map((x, i) => {
        if (!(x.formType in formTypeToComponent)) {
            return <></>;
        }

        const Component = formTypeToComponent[x.formType];

        return (
            <DraggableWrapper key={i} id={x.id} moveItem={moveItem}>
                <Component id={x.id} title={x.title} options={x.options} />
            </DraggableWrapper>
        );
    });

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={"forms-container"}>
                <Title title={title} />
                {forms}
                {isAddingForm ? (
                    <Dropdown
                        value={addFormType}
                        options={formTypeItems}
                        placeholder={"Select a Type"}
                        onChange={(e: DropdownChangeParams) => {
                            onBeginAddingForm(e);
                        }}
                    />
                ) : (
                    <div className="add-button" onClick={addFormClick}>
                        <i className="pi pi-ellipsis-v" style={{ fontSize: "1.2rem" }}></i>
                    </div>
                )}
            </div>
        </DndProvider>
    );
};

export default FormApp;
