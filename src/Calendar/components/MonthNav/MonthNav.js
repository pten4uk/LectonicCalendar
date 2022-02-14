import React, {useEffect} from "react";
import {connect} from "react-redux";


function MonthNav(props) {
    return (
        <nav className="month-nav">
            <button>(</button>
            <span>Декабрь</span>
            <button>)</button>
        </nav>
    )
}

export default connect(
    state => ({}),
    dispatch => ({})
)(MonthNav);
