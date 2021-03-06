import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({ usersReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
