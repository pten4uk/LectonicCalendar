import React from "react";
import Calendar from "./Calendar/components/Calendar";
import DateDetail from "./DateDetail/components/DateDetail";
import {connect} from "react-redux";
import Lecturer from "./Lecturer/components/Lecturer";


function App(props) {
    return (
        <div className="calendar__wrapper">
            <Lecturer/>
            {/*<Calendar/>*/}
            {/*<DateDetail date={props.store.calendar.checkedDate}/>*/}
        </div>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({})
)(App);
