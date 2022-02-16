import React from "react";
import {connect} from "react-redux";
import Event from "./Event/Event";


function DateDetail(props) {
    return (
        <div className="date-detail__wrapper">
            <header className="date-detail__header">
                <span>24.02</span>
            </header>
            <div className="date-detail__body">
                <main className="date-detail__main">
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                    <Event/>
                </main>
            </div>
        </div>
    )
}

export default connect(
    state => ({store: state.dateDetail}),
    dispatch => ({})
)(DateDetail);