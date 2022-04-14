import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createNewId } from "store/utils";
import ControlBar from "components/Control/ControlBar";

const CheckBox = (props) => {
    
    const { id } = props;

    const [ title, setTitle ] = useState("");
    const [ checkBox, setCheckBox ] = useState([]);
    const [ beginAddOption, setBeginAddOption] = useState(false);
    const [ newOptionInput, setNewOptionInput ] = useState("");
    const [ options, setOptions ] = useState([
        {   
            id: 1,
            name: "CheckBox 1",
            checked: false,
        },
        {   
            id: 2,
            name: "CheckBox 2",
            checked: false,
        }
    ]) 
    

    const onAddOption = () => {
        setBeginAddOption(true)
    }

    const onCloseOption = () => {
        setBeginAddOption(false);
    }

    const onSaveOption = () => {
        setOptions([
            ...options,
            {   
                id: createNewId(options.map(x => x.id)),
                name: newOptionInput,
                checked: false,
            }
        ])
        setNewOptionInput("")
        setBeginAddOption(false)
    }

    const onRemoveOption = (e) => {
        const newOptionList = options.filter(x => x.id.toString() !== e.target.id)
        setOptions([...newOptionList])
    }

    const radioButtons = options.map((x, i) => {
        return (
            <div className="radio-button" key={x.id}>
                <RadioButton 
                    id="question" 
                    checked={x.checked}
                />
                <label style={{ marginLeft: "8px"}}>{x.name}</label> 
                <button
                    className={"remove-option-button"}
                    onClick={(e) => onRemoveOption(e)}
                    id={x.id}
                ><span className="pi pi-times" id={x.id}></span></button>              
            </div>
        )
    })

    return (
        <div className="p-form-container">
            <div>
                <InputText 
                    className="p-field"
                    id="question" 
                    type="text"
                    value={title}
                    placeholder="Question"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="radio-button-list">
                {radioButtons}
            </div>
            <div>
                {beginAddOption ? 
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
                    </div> :
                    <Button
                        label={"Add Option"}
                        onClick={onAddOption}
                        className="add-option-button"
                    />
                }
            </div>
            <div style={{textAlign: "center"}}>{id}</div>
            <ControlBar
                formId={id}
                title={title}
                formType={"checkBox"}
                value={checkBox}
            />
        </div>
    )
}

export default CheckBox;