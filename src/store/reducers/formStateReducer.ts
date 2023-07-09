import * as actionTypes from "store/actions/actionTypes";
import { createNewId, currentFormPosition } from "store/utils";
import { type FormState } from "./reducerTypes";
import { FormTypeEnum } from "constants/FormTypeEnum";
import { type Reducer } from "redux";
import {
    type AddNewFormAction,
    type AddTitleAction,
    type AddTitleDescriptionAction,
    type ChangeFormTitleAction,
    type ChangeOptionsAction,
    type DeleteFormAction,
    type DuplicateFormAction,
    type SetRequiredAction,
    type ActionType,
} from "store/actions/formActions";

const initialState: FormState = {
    title: {
        formTitle: "",
        description: "",
    },
    formList: [
        {
            id: 0,
            formType: FormTypeEnum.shortAnswer,
            title: "",
            options: [],
            isRequired: false,
        },
    ],
};

const addTitle = (state: FormState, action: AddTitleAction): FormState => {
    return {
        ...state,
        title: {
            ...state.title,
            formTitle: action.formTitle,
        },
    };
};

const addTitleDescription = (state: FormState, action: AddTitleDescriptionAction): FormState => {
    return {
        ...state,
        title: {
            ...state.title,
            description: action.description,
        },
    };
};

const changeFormTitle = (state: FormState, action: ChangeFormTitleAction): FormState => {
    return {
        ...state,
        formList: state.formList.map((form) =>
            form.id === action.id ? { ...form, title: action.title } : form
        ),
    };
};

const addNewForm = (state: FormState, action: AddNewFormAction): FormState => {
    const newFormList = [
        ...state.formList,
        {
            id: createNewId(state.formList.map((x) => x.id)),
            formType: action.formType,
            title: "",
            options: [],
            isRequired: false,
        },
    ];
    return {
        ...state,
        formList: newFormList,
    };
};

const addDuplicateForm = (state: FormState, action: DuplicateFormAction): FormState => {
    const targetForm = state.formList.find((x) => x.id === action.id);
    if (targetForm !== undefined) {
        const newFormList = [
            ...state.formList,
            {
                ...targetForm,
                id: createNewId(state.formList.map((x) => x.id)),
            },
        ];
        return {
            ...state,
            formList: newFormList,
        };
    } else {
        return state;
    }
};

const removeForm = (state: FormState, action: DeleteFormAction): FormState => {
    const newFormList = state.formList;
    newFormList.splice(currentFormPosition(action.id, newFormList), 1);
    return {
        ...state,
        formList: [...newFormList],
    };
};

const setRequired = (state: FormState, action: SetRequiredAction): FormState => {
    return {
        ...state,
        formList: state.formList.map((form) =>
            form.id === action.id ? { ...form, isRequired: !form.isRequired } : form
        ),
    };
};

const changeOptions = (state: FormState, action: ChangeOptionsAction): FormState => {
    return {
        ...state,
        formList: state.formList.map((form) =>
            form.id === action.id ? { ...form, options: action.options } : form
        ),
    };
};

const reducer: Reducer<FormState, ActionType> = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TITLE:
            return addTitle(state, action);
        case actionTypes.ADD_TITLE_DESCRIPTION:
            return addTitleDescription(state, action);
        case actionTypes.ADD_FORM:
            return addNewForm(state, action);
        case actionTypes.CHANGE_FORM_TITLE:
            return changeFormTitle(state, action);
        case actionTypes.DUPLICATE_FORM:
            return addDuplicateForm(state, action);
        case actionTypes.DELETE_FORM:
            return removeForm(state, action);
        case actionTypes.SET_REQUIRED:
            return setRequired(state, action);
        case actionTypes.CHANGE_OPTIONS:
            return changeOptions(state, action);
        default:
            return state;
    }
};

export default reducer;
