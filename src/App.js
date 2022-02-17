import React from "react";
import Calendar from "./Calendar/components/Calendar";
import DateDetail from "./DateDetail/components/DateDetail";
import {connect} from "react-redux";
import Lecturer from "./Lecturer/components/Lecturer";


function App(props) {
    return (
        <>
            <Lecturer/>
        </>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({})
)(App);
