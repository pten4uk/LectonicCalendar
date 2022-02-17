import React from "react";
import {connect} from "react-redux";
import bg from "../img/bg.svg"
import photo_profile from "../img/profile_photo.png"
import additional from "../img/additional.svg"
import empty_card from "../img/empty_card.svg"
import edit_photo from "../img/edit_photo.svg"
import card1 from "../img/potential1.svg"
import card2 from "../img/potential2.svg"
import card3 from "../img/potential3.svg"
import card4 from "../img/potential4.svg"
import card5 from "../img/potential5.svg"

import LectureCard from "./LectureCard";
import PotentialCard from "./PotentialCard";
import Calendar from "../../Calendar/components/Calendar";
import DateDetail from "../../DateDetail/components/DateDetail";


function Lecturer(props) {
    return (
        <div className="full__profile">
            <div className="lecturer__background"><img src={bg} alt="Фон"/></div>
            <div className="lecturer__profile__header">
                <div className="profile-photo">
                    <img src={photo_profile} alt="Фон"/>
                    <div className="edit-photo"><img src={edit_photo} alt=""/></div>
                </div>
                <div className="additional-info">
                    <div className="edit-photo"><img src={additional} alt=""/></div>
                    Дополнительная информация
                </div>
                <div className="profile-name">
                    <span>Марк</span>
                    <span>Туллий</span>
                    <span>Цицерон</span>
                </div>
            </div>
            <main className="lecturer__main">
                <div className="lecturer__wrapper">
                    <div className="lecturer__profile">Лектор</div>
                    <section className="in-projects">
                        <div className="header">Участие в проектах</div>
                        <div className="projects">
                            <div className="project">Лидеры-доноры<span>3</span></div>
                            <div className="project">Научные субботы<span>5</span></div>
                            <div className="project">Клуб Эльбрус<span>2</span></div>
                        </div>
                    </section>
                    <section className="created-lectures">
                        <div className="header">Созданные лекции <span>?</span></div>
                        <div className="lecture__cards">
                            <div className="lecture__card__empty">
                                <img src={empty_card} alt=""/>
                            </div>
                            <LectureCard/>
                        </div>
                    </section>
                    <section className="potential-orders">
                        <div className="header">Потенциальные заказы<span>?</span></div>
                        <div className="lecture__cards">
                            <PotentialCard photo={card1}
                                           header="Лидеры-доноры"
                                           body="Лекции от создателей проекта о донорстве"/>
                            <PotentialCard photo={card2}
                                           header="Научные субботы"
                                           body="Лекции от известных учёных о самых актуальных исследованиях"/>
                            <PotentialCard photo={card3}
                                           header="Лидеры-доноры"
                                           body="Лекции от создателей проекта о донорстве"/>
                            <PotentialCard photo={card4}
                                           header="Научные субботы"
                                           body="Лекции от известных учёных о самых актуальных исследованиях"/>
                            <PotentialCard photo={card5}
                                           header="Лидеры-доноры"
                                           body="Лекции от создателей проекта о донорстве"/>
                            <PotentialCard photo={card1}
                                           header="Лидеры-доноры"
                                           body="Лекции от создателей проекта о донорстве"/>

                        </div>
                    </section>
                    <section className="confirmed-lectures">
                        <div className="header">Подтверждённые лекции<span>?</span></div>
                        <div className="lecture__cards">
                            <LectureCard/>
                        </div>
                    </section>
                    <section className="lecturer-calendar">
                        <div className="header">Календарь лектора</div>
                        <div className="calendar__wrapper">
                            <Calendar/>
                            <DateDetail date={props.store.calendar.checkedDate}/>
                        </div>
                    </section>
                    <section className="bottom">
                        <div className="header">
                            <span className="first"/>
                            Событие не подтверждено
                        </div>
                        <div className="header">
                            <span className="second"/>
                            Событие подтверждено
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default connect(
    state => ({store: state}),
    dispatch => ({})
)(Lecturer);