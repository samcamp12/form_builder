import { createStore, combineReducers, compose } from "redux";
import formStateReducer from "./reducers/formStateReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;
const store = createStore(
    combineReducers({
        formState: formStateReducer,
    }),
    composeEnhancers()
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
