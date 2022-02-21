import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import Event from "./Event";
import {checkEqualDates} from "../../../utils/date";

function Events(props) {
    let [events, setEvents] = useState(null);

    useEffect(() => {
        let currentEvents = props.store.dateDetail.filter(value => {
            return checkEqualDates(value.date, props.date)
        })
        if (currentEvents.length > 0) {
            setEvents(currentEvents[0].events)
        } else {
            setEvents(null)
        }
    }, [props.date])


    return (
        <div className="current-date-events">
            { 
                events ?
                events.length === 0 ? <></> :
                events.length === 1 ? <Event confirmed={events[0].status}/> : 
                events.length === 2 ? <>
                    <Event confirmed={true}/>
                    <Event confirmed={false}/>
                    </> : <EventMultiple/> :
                <></>
            }
        </div>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({})
)(Events);