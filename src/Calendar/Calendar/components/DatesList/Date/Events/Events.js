import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import Event from "./Event";
import {checkEqualDates} from "../../../utils/date";
import EventMultiple from "./EventMultiple";
import EventSame from "./EventSame";

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
                events.length === 2 ? 
                eventsIsSame(events) === "confirmed" ? 
                    <EventSame confirmed={true} events={events}/> :
                eventsIsSame(events) === "notConfirmed" ? 
                    <EventSame confirmed={false} events={events}/> :
                <>
                    <Event confirmed={false}/>
                    <Event confirmed={true}/>
                </> :
                <EventMultiple events={events}/> : 
                <></>
            }
        </div>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({})
)(Events);


function eventsIsSame(events) {
    let confirmed = 0;
    let notConfirmed = 0;

    for (let event of events) {
        if (confirmed === 2 || notConfirmed === 2) break;
        if (event.status) confirmed += 1;
        if (!event.status) notConfirmed += 1;
    }

    if (confirmed === 2) return "confirmed";
    if (notConfirmed === 2) return "notConfirmed";
    return false;
}