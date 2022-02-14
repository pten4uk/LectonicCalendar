import React, {useEffect, useState} from "react";
import {connect} from "react-redux";


function Date(props) {
    return (
        <div className="date">
            <span>{props.day}</span>
        </div>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(Date);