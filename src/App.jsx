import React from "react";
import Calendar from "./components/Calendar/Calendar/components/Calendar";
import DateDetail from "./components/Calendar/DateDetail/components/DateDetail";
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
