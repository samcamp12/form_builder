import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    title: {
        title: '',
        description: ''
    },
    shortAnswer: {
        type: 'input',
    },
    paragraph: {
        title: '',
        value: ''
    },
    multipleChoice: {
        question: '',
        choices: [],
    },
    checkboxes: {
        question: '',
        checkbox: [],
    },
    dropdown: {
        question: '',
        selection: []
    },
    date: {
        question: '',
        date: ''
    }
}

const titleContentHandler = (state, action) => {
    return {
        ...state,
        title: {
            ...state.title,
            title: action.title,
            description: action.description
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_TITLE: return titleContentHandler(state, action);
        default: return state;
    }
}

export default reducer;
