import * as actionTypes from "store/actions/actionTypes";
import { createNewId, currentFormPosition } from "store/utils";

const initialState = {
    title: {
        formTitle: "",
        description: "",
    },
    formList: [
        {
            id: 0,
            formType: "shortAnswer",
            title: "",
            options: [],
            isRequired: false,
        },
    ],
};

const addTitle = (state, action) => {
    return {
        ...state,
        title: {
            ...state.title,
            formTitle: action.formTitle,
        },
    };
};

const addTitleDiscription = (state, action) => {
    return {
        ...state,
        title: {
            ...state.title,
            description: action.description,
        },
    };
};

const changeFormTitle = (state, action) => {
    return {
        ...state,
        formList: state.formList.map((form) =>
            form.id === action.id ? { ...form, title: action.title } : form
        ),
    };
};

const addNewForm = (state, action) => {
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

const addDuplicateForm = (state, action) => {
    const targetForm = state.formList.find((x) => x.id === action.id);

    console.log(targetForm);

    const newFormList = [
        ...state.formList,
        {
            ...targetForm,
            id: createNewId(state.formList.map((x) => x.id)),
        },
    ];
    console.log("newForm", newFormList);
    return {
        ...state,
        formList: newFormList,
    };
};

const removeForm = (state, action) => {
    const newFormList = state.formList;

    newFormList.splice(currentFormPosition(action.id, newFormList), 1);

    return {
        ...state,
        formList: [...newFormList],
    };
};

const setRequired = (state, action) => {
    return {
        ...state,
        formList: state.formList.map((form) =>
            form.id === action.id ? { ...form, isRequired: !form.isRequired } : form
        ),
    };
};

const changeOptions = (state, action) => {
    return {
        ...state,
        formList: state.formList.map((form) =>
            form.id === action.id ? { ...form, options: action.options } : form
        ),
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TITLE:
            return addTitle(state, action);
        case actionTypes.ADD_TITLE_DESCRIPTION:
            return addTitleDiscription(state, action);
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
