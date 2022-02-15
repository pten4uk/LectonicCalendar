import React from "react";
import {connect} from "react-redux";
import Event from "./Event/Event";


function DateDetail(props) {
    return (
        <div className="date-detail__wrapper">
            <div className="date-detail__body">
                <header className="date-detail__header">
                    24.02
                    <hr/>
                </header>
                <main className="date-detail__main">
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                </main>
                <hr/>
            </div>
        </div>
    )
}

export default connect(
    state => ({store: state.dateDetail}),
    dispatch => ({})
)(DateDetail);