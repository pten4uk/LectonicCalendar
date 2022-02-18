import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import {combineReducers} from "redux";

import "./index.css";
import App from "./App";
import dateDetail from "./Calendar/DateDetail/redux/reducers/dateDetail";
import calendar from "./Calendar/Calendar/redux/reducers/calendar";


let reducer = combineReducers({
        calendar,
        dateDetail
    }
)

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
