import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";

const FormTitle = (props) => {

    const [ title, setTitle ] = useState();
    const [ description, setDescription ] = useState();

    return (
        <div className="p-form-container">
            <div>
                <InputText 
                    className="p-field"
                    id="question" 
                    type="text"
                    value={title}
                    placeholder="Form title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <InputText 
                    className="p-field"
                    id="answer" 
                    type="text"
                    value={description}
                    placeholder="Form Description (Optional)"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FormTitle;