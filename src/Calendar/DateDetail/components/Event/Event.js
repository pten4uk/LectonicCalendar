import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";


function Event(props) {
    let [className, setClass] = useState("left-block");
    let eventInfo = useRef();
    let [dynamicCircleHeight, setCircleHeight] = useState(24);
    let [eventDetail, setEventDetail] = useState(false);

    useEffect(() => {
        if (!props.status) setClass("left-block grey");
    }, [])

    useEffect(() => {
        if (!eventDetail) setCircleHeight(24);
        else setCircleHeight(eventInfo.current.clientHeight - 15.4);
    }, [eventDetail])

    return (
        <li className="date-detail__event">
            <div className={className}>
                <div className="circle"/>
                <div className="dynamic-circle" style={{height: dynamicCircleHeight}}/>
            </div>
            <div className="event-info"
                 ref={eventInfo}
                 onClick={() => setEventDetail(!eventDetail)}>
                <div className="header">{props.header}</div>
                <div className="theme">Тема: <span>{props.theme}</span></div>
                <div className="lecturer">Лектор: <span>{props.lecturer}</span></div>
                <div className="listener">Слушатель: <span>{props.listener}</span></div>
                <div className="address">Место: <span>{props.address}</span></div>
            </div>
            <div className="time-range">
                <span className="start">{props.timeStart}</span>
                <span className="end">{props.timeEnd}</span>
            </div>
        </li>
    )
}

export default connect(
    state => ({store: state.dateDetail}),
    dispatch => ({})
)(Event);
