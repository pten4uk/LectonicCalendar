import React from "react";
import {connect} from "react-redux";
import {WEEK_DAYS} from "../utils/calendar";
import {SetCheckedDate} from "../../redux/actions/calendar";


function Date(props) {

    return (
        <div className={getClassName(props)} onClick={() => props.SetCheckedDate(props.date)}>
            <span>{props.date.getDate()}</span>
        </div>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({
        SetCheckedDate:
            date => dispatch(SetCheckedDate(date))
    })
)(Date);

function checkEqualDates(date1, date2) {
    if (date1 && date2) {
        return (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate())
    } else return false
}

function getClassName(props) {
    let className = "date";

    if (props.store.currentDate.getMonth() !==
        props.date.getMonth()) return "date inactive";
    else if (props.date.getDay() === WEEK_DAYS.Saturday ||
        props.date.getDay() === WEEK_DAYS.Sunday) className += " weekend";

    if (checkEqualDates(props.date, props.store.today)) className += " today"
    if (checkEqualDates(props.date, props.store.checkedDate)) className += " active"

    return className
}
