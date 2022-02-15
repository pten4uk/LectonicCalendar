import React from "react";
import Calendar from "./Calendar/components/Calendar";
import DateDetail from "./DateDetail/components/DateDetail";


function App() {
    return (
        <div className="calendar__wrapper">
            <Calendar/>
            <DateDetail/>
        </div>
    )
}

export default App;
