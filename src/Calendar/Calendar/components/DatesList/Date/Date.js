import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {WEEK_DAYS} from "../../utils/calendar";
import {SetCheckedDate, SwapMonthToNext, SwapMonthToPrev} from "../../../redux/actions/calendar";
import {checkEqualDates, checkNeedSwapToNextMonth, checkNeedSwapToPrevMonth} from "../../utils/date";
import Events from "./Events/Events";


function Date(props) {
    let [hover, setHover] = useState(false);
    let [active, setActive] = useState(false);
    let [events, setEvents] = useState(null);

    useEffect(() => {
        let currentEvents = props.store.dateDetail.filter(value => {
            return checkEqualDates(value.date, props.date)
        })
        if (currentEvents.length > 0) setEvents(currentEvents[0].events);
        else setEvents(null);

        if (checkEqualDates(props.store.calendar.checkedDate, props.date)) setActive(true);
    }, [props.date])

    return (
        <div className={getClassName(props)}
             onClick={() => clickHandler(props)}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}>
            <span>{props.date.getDate()}</span>
            <Events events={events}
                    dateHover={hover}
                    dateActive={active}/>
        </div>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({
        SetCheckedDate:
            date => dispatch(SetCheckedDate(date)),
        SwapMonthToNext:
            () => dispatch(SwapMonthToNext()),
        SwapMonthToPrev:
            () => dispatch(SwapMonthToPrev()),
    })
)(Date);


function getClassName(props) {
    let className = "date";

    if (props.store.calendar.currentDate.getMonth() !==
        props.date.getMonth()) return "date inactive";
    else if (props.date.getDay() === WEEK_DAYS.Saturday ||
        props.date.getDay() === WEEK_DAYS.Sunday) className += " weekend";

    if (checkEqualDates(props.date, props.store.calendar.today)) className += " today"
    if (checkEqualDates(props.date, props.store.calendar.checkedDate)) className += " active"

    return className
}

function clickHandler(props) {
    if (checkNeedSwapToNextMonth(props.date, props.store.calendar.currentDate)) {
        props.SwapMonthToNext();
    } else if (checkNeedSwapToPrevMonth(props.date, props.store.calendar.currentDate)) {
        props.SwapMonthToPrev()
    }
    props.SetCheckedDate(props.date)
}