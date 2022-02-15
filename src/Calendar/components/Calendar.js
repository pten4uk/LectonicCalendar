import React from "react";

import MonthNav from "./MonthNav";
import DatesList from "./DatesList/DatesList";
import DaysOfWeek from "./DaysOfWeek";


function Calendar(props) {
    return (
        <div className="calendar__wrapper">
            <div className="calendar__container">
                <div className="inside__container">
                    <MonthNav/>
                    <DaysOfWeek/>
                    <DatesList/>
                </div>
            </div>
        </div>
    )
}

export default Calendar;
