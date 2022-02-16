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
    let className = "date";

    if (props.store.currentDate.getMonth() !==
        props.date.getMonth()) className += " inactive";
    else if (props.date.getDay() === WEEK_DAYS.Saturday ||
        props.date.getDay() === WEEK_DAYS.Sunday) className += " weekend";

    if (props.date.getFullYear() === props.store.today.getFullYear() &&
        props.date.getMonth() === props.store.today.getMonth() &&
        props.date.getDate() === props.store.today.getDate()
    ) className += " today"
    return className
}