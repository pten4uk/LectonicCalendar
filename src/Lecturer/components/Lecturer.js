import React from "react";
import {connect} from "react-redux";
import bg from "../img/bg.svg"
import LectureCard from "./LectureCard";


function Lecturer(props) {
    return (
        <div className="full__profile">
            <div className="lecturer__background">
                <img src={bg} alt="Фон"/>
            </div>
            <main className="lecturer__main">
                <div className="lecturer__wrapper">
                    <div className="lecturer__profile">Лектор</div>
                    <section className="in-projects">
                        <div className="header">Участие в проектах</div>
                        <div className="projects">
                            <div className="project">Лидеры-доноры<span>3</span></div>
                            <div className="project">Научные субботы<span>3</span></div>
                            <div className="project">Клуб Эльбрус<span>3</span></div>
                        </div>
                    </section>
                    <section className="created-lectures">
                        <div className="header">Созданные лекции</div>
                         <LectureCard/>
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