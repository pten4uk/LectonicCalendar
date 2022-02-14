import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import month from "../redux/reducers/calendar";
import {getCalendar, MONTHS} from "./utils/calendar";
import Date from "./Date";


function DatesList(props) {
    let year = props.store.currentYear;
    let month = props.store.currentMonth;
    let calendar = getCalendar(year, month);

    return (
        <section className="dates__list">
            {calendar.map(day => <Date day={day.getDate()}/>)}
        </section>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(DatesList);
