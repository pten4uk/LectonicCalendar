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
                <div className="theme"><span>Тема:</span>Доноры России</div>
                <div className="lecturer"><span>Лектор:</span>Евлампий Питрович Игорь</div>
                <div className="listener"><span>Слушатель:</span>ОАО "Мокрые штаны"</div>
                <div className="address"><span>Место:</span>Москва, ул. Не строителей, д. 98738</div>
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