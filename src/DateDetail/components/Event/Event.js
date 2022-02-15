import React from "react";
import {connect} from "react-redux";


function Event(props) {
    return (
        <li className="date-detail__event">
            <div className="left-block">
                <div className="circle"/>
                <div className="dynamic-circle"/>
            </div>
            <div className="event-info">
                <div className="header">Лекция подтверждена</div>
                <div className="theme">Тема: <span>Доноры России</span></div>
                <div className="lecturer">Лектор: <span>Евлампий Питрович Игорь</span></div>
                <div className="listener">Слушатель: <span>ОАО "Мокрые штаны"</span></div>
                <div className="address">Место: <span>Москва, ул. Не строителей, д. 98738</span></div>
            </div>
            <div className="time-range">
                <span className="start">10:00</span>
                <span className="end">12:00</span>
            </div>
        </li>
    )
}

export default connect(
    state => ({store: state.dateDetail}),
    dispatch => ({})
)(Event);