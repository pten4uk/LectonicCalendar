import React, {useEffect, useState} from "react";

import {connect} from "react-redux";
import DatesList from "./DatesList";
import {useTransition, animated} from "react-spring";
import {DeactivateSwap} from "../../redux/actions/calendar";

const datesLists = [
    [
        <DatesList/>,
    ],
    [
        <DatesList/>,
        <DatesList/>,
    ],
    [
        <DatesList/>,
        <DatesList/>,
    ],
]

function DatesListSwappable(props) {
    const [datesList, setDatesList] = useState(0);
    const [wrapperClassName, setWrapperClassName] = useState("dates-list__wrapper");

    useEffect(() => {

        if (props.store.datesListIndex === 2) setWrapperClassName("dates-list__wrapper reverse");
        else setWrapperClassName("dates-list__wrapper");

        setDatesList(props.store.datesListIndex);
    }, [props.store.datesListIndex])

    const transitions = useTransition(
        datesLists[datesList],
        {
            immediate: !props.store.swap,
            from: {
                transform: props.store.swap && props.store.swapToLeft ? "translateX(50%)" : "translateX(-50%)",
                marginRight: props.store.swap && props.store.swapToLeft ? 88 : 0,
                marginLeft: props.store.swap && props.store.swapToLeft ? 0 : 88,
            },
            enter: {
                transform: props.store.swap && props.store.swapToLeft ? "translateX(-50%)" : "translateX(50%)",
                marginRight: props.store.swap && props.store.swapToLeft ? 88 : 0,
                marginLeft: props.store.swap && props.store.swapToLeft ? 0 : 88,
            },
            leave: {
                transform: props.store.swap && props.store.swapToLeft ? "translateX(-50%)" : "translateX(-50%)",
                marginRight: props.store.swap && props.store.swapToLeft ? 88 : 0,
                marginLeft: props.store.swap && props.store.swapToLeft ? 0 : 88,
            },
            config: {duration: 1000},
            onRest: () => props.DeactivateSwap()
        })


    return (
            <div className={wrapperClassName}>
                {transitions((styles, item, key) => (
                    <animated.div key={key} style={styles}>{item}</animated.div>
                ))}
            </div>
    )
}

export default connect(
    state => ({store: state.calendar}),
    dispatch => ({
        DeactivateSwap:
            () => dispatch(DeactivateSwap())
    })
)(DatesListSwappable);
