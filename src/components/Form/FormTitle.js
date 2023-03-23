import * as React from "react";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";

import * as actionTypes from "store/actions/actionTypes";; 

const FormTitle = ({formTitle}) => {

    const dispatch = useDispatch();

    return (
        <div className="p-form-container">
            <div>
                <InputText 
                    className="p-field"
                    id="question" 
                    type="text"
                    value={formTitle.formTitle}
                    placeholder="Form title"
                    onChange={(e) => dispatch({type: actionTypes.ADD_TITLE, formTitle: e.target.value})}
                />
            </div>
            <div>
                <InputText 
                    className="p-field"
                    id="answer" 
                    type="text"
                    value={formTitle.description}
                    placeholder="Form Description (Optional)"
                    onChange={(e) => dispatch({type: actionTypes.ADD_TITLE_DESCRIPTION, description: e.target.value})}
                />
            </div>
        </div>
    )
}

export default FormTitle;