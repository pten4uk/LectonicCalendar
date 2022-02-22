import React from "react";
import {connect} from "react-redux";

function EventSame(props) {

    return  (
            <div className="current-date-event-multiple">
                {props.confirmed ? 
                    <div className="event-same blue"/> :
                    <div className="event-same grey"/>}
                <span>{props.events.length}</span> 
            </div>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(EventSame);