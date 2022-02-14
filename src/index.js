import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from './Calendar/redux/reducers/index.js'
import "./index.css";
import Calendar from "./Calendar/components/Calendar";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <Calendar/>
    </Provider>,
    document.getElementById("root")
);
