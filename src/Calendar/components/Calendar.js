import React, {useEffect} from "react";

import {connect} from "react-redux";
import MonthNav from "./MonthNav/MonthNav";
import DatesList from "./DatesList";


function Calendar(props) {
    return (
        <div className="calendar__wrapper">
            <div className="calendar__container">
                <MonthNav/>
                <DatesList/>
            </div>
        </div>
    )
}

export default Calendar;
