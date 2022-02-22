import React from "react";
import {connect} from "react-redux";

function EventMultiple(props) {
    let confirmedEvents = props.events.filter(event => event.status).length;
    let notConfirmedEvents = props.events.filter(event => !event.status).length;

    return (
        <>
            <div className="current-date-event-multiple">
                {confirmedEvents && notConfirmedEvents ?
                <>
                    <div className="event-multiple blue-half"/>
                    <div className="event-multiple grey-half"/>
                </> : confirmedEvents ? 
                <>
                    <div className="event-multiple blue"/>
                </> : notConfirmedEvents ?
                <>
                    <div className="event-multiple grey"/>
                </> :
                <></>
                }
                <span>{props.events.length}</span> 
            </div>
        </>
    )          
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(EventMultiple);