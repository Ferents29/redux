import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {countReducer} from "./countReducer";

const rootReducer = combineReducers({
    cash:cashReducer,
    customers:customerReducer,
    count:countReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))