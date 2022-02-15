import React from "react";
import {connect} from "react-redux";
import {SwapMonthToNext, SwapMonthToPrev} from "../redux/actions/calendar";
import {MONTHS} from "./utils/calendar";


function MonthNav(props) {
    let currentMonth = props.store.currentDate.getMonth();

    return (
        <nav className="month-nav">
            <button className="left" onClick={props.SwapMonthToPrev}/>
            <span>{getMonth(currentMonth)}</span>
            <button className="right" onClick={props.SwapMonthToNext}/>
        </nav>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({
        SwapMonthToNext:
            () => dispatch(SwapMonthToNext()),
        SwapMonthToPrev:
            () => dispatch(SwapMonthToPrev()),
    })
)(MonthNav);


function getMonth(monthId) {
    return MONTHS[monthId];
}

