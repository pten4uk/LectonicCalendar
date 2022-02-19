import React, {useEffect, useState} from "react";

import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import DatesList from "./DatesList";


function DatesListSwappable(props) {
    let [swap, setSwap] = useState(false);
    let [right, setToRight] = useState(false);
    let [left, setToLeft] = useState(false);

    useEffect(() => {
    }, [props.store.swap])

    return (
        <CSSTransition in={props.store.swap}
                           classNames={props.store.classNameForSwap}
                           timeout={500}>
            <div className="dates-list__wrapper">
                {props.store.leftElemForSwap ? <DatesList/> : <></>}
                {props.store.rightElemForSwap ? <DatesList/> : <></>}
            </div>
        </CSSTransition>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({})
)(DatesListSwappable);


function setSwipeFromSwapDirection(props, swap, setSwap, left, setToLeft, right, setToRight) {
    if (props.store.swapDirection === "LEFT") {
        setSwap(!swap);
        setToLeft(!left);
    } else if (props.store.swapDirection === "RIGHT") {
        setSwap(!swap);
        setToRight(!right);
    }
}