import React, { useState, useEffect } from "react";

import ShortAnswer from "components/Form/ShortAnswer";
import FormTitle from "components/Form/FormTitle";
import { Dropdown } from "primereact/dropdown";
import { FormTypeEnum } from "Constants/FormTypeEnum";

import { useSelector, useDispatch } from "react-redux";

import "./FormApp.scss"
import CheckBox from "components/Form/Checkbox";
import MultipleChoice from "components/Form/MultipleChoice";

const FormApp = () => {

    const formData = useSelector(state => state.formState.formList);
    const dispatch = useDispatch();
    const [addForm, setAddForm] = useState(false);
    const [addFormType, setAddFormType] = useState();

    const formTypeItems = [
        {label: "Short Answer", value: FormTypeEnum.shortAnswer},
        {label: "Multiple Choice", value: FormTypeEnum.multipleChoice},
        {label: "Checkbox", value: FormTypeEnum.checkBox},
    ]
    
    const addFormClick = () => {
        setAddForm(true);
    }

    const onSelectChange = (e) => {
        setAddFormType(e.value)
        dispatch({ 
            type: "ADD_FORM",
            formType: e.value,
        })
        setAddForm(false);
    }


    
    const forms = formData.map((x, i) => {
        switch (x.formType) {
            case FormTypeEnum.shortAnswer: 
                return (
                    <ShortAnswer
                        key={i}
                        id={x.id}
                        options={x.options}
                    />
                );
            case FormTypeEnum.checkBox :
                return (
                    <CheckBox
                        key={i}
                        id={x.id}
                        options={x.options}
                    />
                )
            case FormTypeEnum.multipleChoice :
                return (
                    <MultipleChoice
                        key={i}
                        id={x.id}
                        options={x.options}
                    />
                )
            default: return "";
        }
    })

    return (
        <React.Fragment>
            <div className={"container"}>
                <FormTitle/>
                {forms}
                {addForm ? 
                    <Dropdown
                        value={addFormType}
                        options={formTypeItems}
                        placeholder={"Select a Type"}
                        onChange={(e) => onSelectChange(e)}
                    /> :
                    <div 
                        className="add-button"
                        onClick={addFormClick}
                    >
                        <i className="pi pi-ellipsis-v" style={{fontSize: "1.2rem"}}></i>
                    </div>
                }
            </div>   
        </React.Fragment>
    )
}

export default FormApp;