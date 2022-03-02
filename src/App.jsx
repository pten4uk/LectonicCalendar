import React from "react";
import Calendar from "./Calendar/Calendar/jsx/Calendar";
import DateDetail from "./Calendar/DateDetail/jsx/DateDetail";
import {connect} from "react-redux";


function App(props) {
    return (
        <div className="calendar__wrapper">
            <Calendar/>
            <DateDetail date={props.store.calendar.checkedDate}/>
        </div>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({})
)(App);
