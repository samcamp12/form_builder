import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createNewId } from "store/utils";
import { useDispatch } from "react-redux";
import ControlBar from "components/Control/ControlBar";
import * as actionTypes from "store/actions/actionTypes";
import { FormOptionValidator } from "components/Error/FormOptionValidator";

const MultipleChoice = (props) => {
    
    const { id, options } = props;
    const dispatch = useDispatch();

    const [ title, setTitle ] = useState("");
    const [ multiChoice, setMultiChoice ] = useState([]);
    const [ beginAddOption, setBeginAddOption] = useState(false);
    const [ newOptionInput, setNewOptionInput ] = useState("");
    const [ error, setError ] = useState();
    
    const onAddOption = () => {
        setBeginAddOption(true)
    }

    const onCloseOption = () => {
        setBeginAddOption(false);
    }

    const onSaveOption = () => {
        if (newOptionInput === "") {
            setError("cannot set empty options");
            return;
        }
        if (options.map(option => option.name).indexOf(newOptionInput) === -1) {
            setError(null);
            dispatch({
                type: actionTypes.CHANGE_OPTIONS,
                id: id,
                options: [
                    ...options,
                    {   
                        id: createNewId(options.map(x => x.id)),
                        name: newOptionInput,
                        value: newOptionInput
                    }
                ]
            });
            setNewOptionInput("");
            setBeginAddOption(false);
        } else {
            setError("Cannot set duplicate options");
        }
    }

    const onRemoveOption = (e) => {
        const newOptionList = options.filter(x => x.id.toString() !== e.target.id)
        dispatch({
            type: actionTypes.CHANGE_OPTIONS,
            id: id,
            options: newOptionList,
        });
    }

    const handleMultiChoiceChange = (e) => {
        let tempState = multiChoice;
        if(tempState.indexOf(e.value) === -1){
            tempState.push(e.value);
            setMultiChoice([...tempState]);
        } else {
            setMultiChoice(tempState.filter(x => x !== e.value));
        }
    }

    const choiceList = options.map((x, i) => {
        return (  
            <div className="choice" key={x.id}>
                <Checkbox
                    value={x.value}
                    onChange={handleMultiChoiceChange}
                    checked={multiChoice.indexOf(x.value) !== -1}
                />
                <label style={{ marginLeft: "8px"}}>{x.name}</label> 
                <button
                    className={"remove-option-button"}
                    onClick={(e) =>onRemoveOption(e)}
                    id={x.id}
                ><span className="pi pi-times" id={x.id}></span></button>                 
            </div>
             
        )
    })

    return (
        <div className="p-form-container">
            <div className="p-form-index">#{id+1}</div>
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
            <div className="multiple-choice-list">
                {choiceList}
            </div>
            
                {beginAddOption ? 
                    <div>
                        <FormOptionValidator errorMessage={error} />
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
                    </div> :
                    <Button
                        label={"Add Choice"}
                        onClick={onAddOption}
                        className="add-option-button"
                    />
                }
            
            <ControlBar
                formId={id}
                title={title}
                formType={"multipleChoice"}
                value={multiChoice}
            />
        </div>
    )
}

export default MultipleChoice;