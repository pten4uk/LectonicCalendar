import React, {useEffect, useState} from "react";

import MonthNav from "./MonthNav";
import DatesList from "./DatesList/DatesList";
import DaysOfWeek from "./DaysOfWeek";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import DatesListSwappable from "./DatesList/DatesListSwappable";


function Calendar(props) {
    return (
        <div className="calendar__container">
            <div className="inside__container">
                <MonthNav/>
                <DaysOfWeek/>
                <DatesListSwappable/>
            </div>
        </div>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(Calendar);
