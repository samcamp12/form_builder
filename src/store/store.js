import { createStore, combineReducers } from "redux";
import formStatereducer from "./reducers/formStateReducer";

const store = createStore(
    combineReducers({
        formState: formStatereducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
