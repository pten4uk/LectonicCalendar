import React from "react";
import {connect} from "react-redux";
import {WEEK_DAYS} from "../utils/calendar";


function Date(props) {
    return (
        <div className={getClassName(props)}>
            <span>{props.date.getDate()}</span>
        </div>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(Date);

function getClassName(props) {
    if (props.store.currentDate.getMonth() !==
        props.date.getMonth()) {return "date inactive"}
    if (props.date.getDay() === WEEK_DAYS.Saturday ||
        props.date.getDay() === WEEK_DAYS.Sunday) {
        return "date weekend"
    }
    return "date"
}